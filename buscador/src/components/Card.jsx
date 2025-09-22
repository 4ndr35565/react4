// src/components/Card.jsx
export default function Card({ usuario, onClick }) {
  return (
    <div 
      className="bg-white p-4 rounded-lg shadow text-center cursor-pointer hover:shadow-lg transition"
      onClick={onClick}  // 👈 aquí se hace clic en toda la card
    >
      <img
        src={usuario.foto}
        alt={`${usuario.nombre} ${usuario.apellidos}`}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{usuario.nombre}</h2>
      <p className="text-sm text-gray-700">{usuario.perfil}</p>
      <p className="text-sm text-gray-500">{usuario.intereses}</p>
      <p className="text-xs text-gray-400 mt-2">{usuario.correo}</p>
    </div>
  );
}
