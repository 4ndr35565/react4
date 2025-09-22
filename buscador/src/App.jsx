import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchInput from "./components/Searchinput";
import Card from "./components/Card";
import Modal from "./components/modal";

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const API_URL = "http://localhost:8000";

  const handleCardClick = (usuario) => {
    setSelectedCard(usuario); // guardamos la info del usuario clickeado
  };

  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get(`${API_URL}/usuarios`);
      setUsuarios(response.data);
      setFiltrados(response.data);
    } catch (error) {
      console.log("Error al obtener los usuarios", error);
      setError("Error al obtener los usuarios");
      toast.error("Error al obtener los usuarios");
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  // ✅ Solo una versión de filtrarUsuarios con loader
  const filtrarUsuarios = useCallback(
    (query) => {
      setLoading(true); // activar loading
      const q = query.trim().toLowerCase();

      setTimeout(() => {
        const resultados = usuarios.filter((u) =>
          [u.nombre, u.apellidos, u.perfil, u.intereses, u.correo].some((campo) =>
            String(campo).toLowerCase().includes(q)
          )
        );
        setFiltrados(resultados);
        setLoading(false); // apagar loading después de 1s
      }, 1000);
    },
    [usuarios]
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Buscador de Usuarios
      </h1>

      <SearchInput onSearch={filtrarUsuarios} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-10">
            {/* Spinner Tailwind */}
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : filtrados.length > 0 ? (
          filtrados.map((usuario) => (
            <div
              key={usuario.id}
              onClick={() => handleCardClick(usuario)}
            >
              <Card usuario={usuario} />
            </div>
          ))
        ) : (
          <div className="text-center text-xl font-bold col-span-full">
            No se encontraron resultados
          </div>
        )}
      </div>

      {/* Modal 👇 */}
      {selectedCard && (
        <Modal usuario={selectedCard} onClose={() => setSelectedCard(null)} />
      )}

      <ToastContainer />
    </div>
  );
}
