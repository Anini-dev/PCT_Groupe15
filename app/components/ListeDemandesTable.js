'use client';

import { useEffect, useState } from 'react';

export default function ListeDemandesTable() {
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    const fetchDemandes = async () => {
      const res = await fetch('../api/demandes/par-type');
      const data = await res.json();
      setDemandes(data);
    };
    fetchDemandes();
  }, []);

  return (
    <div className="p-4">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Nom</th>
            <th className="border px-4 py-2">Prénom</th>
            <th className="border px-4 py-2">téléphone</th>
            <th className="border px-4 py-2">Type dacte</th>
            <th className="border px-4 py-2">Statut</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande) => (
            <tr key={demande.id}>
              <td className="border px-4 py-2">{demande.utilisateur?.nom}</td>
              <td className="border px-4 py-2">{demande.utilisateur?.prenom}</td>
              <td className="border px-4 py-2">{demande.utilisateur?.telephone}</td>
              <td className="border px-4 py-2">{demande.typeActe}</td>
              <td className="border px-4 py-2">{demande.statut}</td>
              <td className="border px-4 py-2">{new Date(demande.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
