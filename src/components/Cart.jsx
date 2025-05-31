const Cart = ({ title, value, icon }) => {
  return (
    <div className="flex justify-between items-center gap-6 bg-white p-4 rounded-lg shadow-md border-2 ring-1 ring-blue-100">
      <div className="xs:text-sm font-semibold">
       <p className="xs:text-0.5xl text-gray-600">{title}</p>
        <p className="text-sm font-bold text-gray-800">{value}</p>
      </div>
       <div className="text-3xl text-blue-600 opacity-25">{icon}</div>
    </div>
  );
};

export default Cart;
