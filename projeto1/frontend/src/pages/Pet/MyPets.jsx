import { useEffect, useState } from "react";
import api from "../../utils/api"; // Certifique-se de que você tem uma instância configurada do Axios

function MyPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const token = localStorage.getItem("token"); // Obtém o token do localStorage
        const response = await api.get("/pets/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPets(response.data);
      } catch (error) {
        console.error("Erro ao buscar os pets:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
      <h1>Meus Pets</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Raça</th>
            <th>Espécie</th>
            <th>Gênero</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet._id}>
              <td>{pet.nome}</td>
              <td>{pet.idade}</td>
              <td>{pet.raca}</td>
              <td>{pet.especie}</td>
              <td>{pet.genero}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyPets;
