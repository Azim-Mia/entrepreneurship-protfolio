const Cart = ({ title, value, icon }) => {
  return (
    <div className="flex justify-between items-center gap-6 bg-white p-4 rounded-lg shadow-md border-l-4 border-b-4 border-pink">
      <div className="xs:text-sm font-semibold">
       <p className="xs:text-0.5xl text-blue-400">{title}</p>
        <p className="text-sm font-bold">{value}</p>
      </div>
       <div className="text-3xl text-black opacity-25">{icon}</div>
    </div>
  );
};

export default Cart;
