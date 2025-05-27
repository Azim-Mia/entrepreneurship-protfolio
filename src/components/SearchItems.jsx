import { FiSearch } from "react-icons/fi";
const SearchItems = ({ onSearchText }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-md mx-auto mb-4"
    >
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
          <FiSearch className="text-xl" />
        </span>
        <input
          type="text"
          placeholder="অনুসন্ধান করুন..."
          onChange={(e) => onSearchText(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  );
};

export default SearchItems;
