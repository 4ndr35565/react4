// src/components/SearchInput.jsx
export default function SearchInput({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre, perfil o intereses"
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
    />
  );
}