import React, { useEffect, useState } from "react";
import api from "./api";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users")
      .then(res => {
        console.log("Réponse API :", res.data);

        const result = res.data.users || []; 
        setUsers(result);
      })
      .catch(err => {
        console.error("Erreur fetch users :", err);
      });
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))
        ) : (
          <p>Aucun utilisateur trouvé.</p>
        )}
      </ul>
    </div>
  );
}

export default UsersList;
