'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function InscriptionForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motDePasse: '',
    role: '',
    commune: ''
  });

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCommuneChange = async (e) => {
    const value = e.target.value;
    setFormData({ ...formData, commune: value });

    if (value.length > 1) {
      const res = await fetch(`/api/communes?q=${encodeURIComponent(value)}`);
      const data = await res.json();
      setSuggestions(data);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/utilisateurs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      await signIn('credentials', {
        redirect: true,
        email: formData.email,
        motDePasse: formData.motDePasse
      });
    } else {
      const data = await res.json();
      setError(data.error || "Erreur d'inscription inconnue.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-500 to-green-500">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-16" />
        </div>

        <h2 className="text-2xl font-bold text-center text-orange-600 mb-8">Formulaire dinscription</h2>

        <div className="grid grid-cols-1 gap-4">
          <input type="text" name="nom" placeholder="Nom" onChange={handleChange} className="input" required />
          <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} className="input" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input" required />
          <input type="text" name="telephone" placeholder="Téléphone" onChange={handleChange} className="input" required />
          <input type="password" name="motDePasse" placeholder="Mot de passe" onChange={handleChange} className="input" required />
          <select name="role" onChange={handleChange} required>
            <option value="">-- Choisir un rôle --</option>
            <option value="Citoyen">Citoyen</option>
            <option value="Agent">Agent</option>
          </select>

          <div className="relative">
            <input
              type="text"
              name="commune"
              placeholder="Nom de la commune"
              value={formData.commune}
              onChange={handleCommuneChange}
              className="input"
              required
              autoComplete="off"
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border rounded-md w-full mt-1 max-h-48 overflow-y-auto">
                {suggestions.map((commune) => (
                  <li
                    key={commune.id}
                    className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                    onClick={() => {
                      setFormData({ ...formData, commune: commune.nom.toString() });
                      setShowSuggestions(false);
                      setSuggestions([]);
                    }}
                  >
                    {commune.nom}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {error && (
          <p className="mt-4 text-red-600 text-sm text-center">
            {error}
          </p>
        )}

        <button type="submit" className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">
          Sinscrire
        </button>
      </form>

      <style jsx>{`
        .input {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 0.75rem;
          width: 100%;
        }
        input:focus, select:focus {
          outline: none;
          border-color: #fb923c;
          box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.3);
        }
      `}</style>
    </div>
  );
}
