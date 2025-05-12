'use client';
import '../style/animated.css';
import '../style/templatemo-chain-app-dev.css';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function Authentification() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motDePasse: '',
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
    <div className="user_register">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
        <br />

        <label htmlFor="prenom">Prénom</label>
        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
        <br />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />

        <label htmlFor="telephone">Téléphone</label>
        <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
        <br />

        <label htmlFor="motDePasse">Mot de passe</label>
        <input type="password" name="motDePasse" value={formData.motDePasse} onChange={handleChange} />
        <br />

        <label htmlFor="commune">Commune</label>
        <input type="text" name="commune" value={formData.commune} onChange={handleCommuneChange} />
        {showSuggestions && (
          <ul>
            {suggestions.map((c, idx) => (
              <li key={idx} onClick={() => {
                setFormData({ ...formData, commune: c });
                setShowSuggestions(false);
              }}>{c}</li>
            ))}
          </ul>
        )}
        <br />

        <div className="checkbox">
          <input id="send_updates" type="checkbox" />
          <label htmlFor="send_updates">Send me occasional email updates</label>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="action_btns">
          <button type="submit" className="btn btn_red">Register</button>
        </div>
      </form>
    </div>
  );
}
