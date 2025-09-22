
export default function Modal({ usuario, onClose }) {
  if (!usuario) return null; 

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <img
          src={usuario.foto}
          alt={`${usuario.nombre} ${usuario.apellidos}`}
          className="w-32 h-32 rounded-full mx-auto object-cover"
        />
        <h2 className="text-xl font-bold mt-2">
          {usuario.nombre} {usuario.apellidos}
        </h2>
        <p className="text-gray-700 mt-2">{usuario.perfil}</p>
        <p className="text-gray-500">{usuario.intereses}</p>
        <p className="text-gray-400 text-sm mt-2">{usuario.correo}</p>
      </div>
    </div>
  );
}
