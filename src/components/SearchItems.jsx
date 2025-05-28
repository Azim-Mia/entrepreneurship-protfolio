import { FiSearch } from "react-icons/fi";

const SearchItems = ({ onSearchText }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-0 mb-4"
    >
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          <FiSearch className="text-xl text-black" />
        </span>
        <input
          type="text"
          placeholder="অনুসন্ধান করুন..."
          onChange={(e) => onSearchText(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base text-black"
        />
      </div>
    </form>
  );
};

export default SearchItems;
