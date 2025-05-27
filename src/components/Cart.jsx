const Cart = ({ title, value, icon }) => {
  return (
    <div className="flex justify-between items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md border-2 ring-1 ring-blue-100">
      <div className="xs:xs:text-1xl">
       <p className="xs:text-0.5xl text-gray-600">{title}</p>
        <p className="text-sm font-bold text-gray-800">{value}</p>
      </div>
       <div className="text-3xl text-blue-600">{icon}</div>
    </div>
  );
};

export default Cart;
