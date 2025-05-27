const Cart = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm transition hover:shadow-xl">
      <p className="text-gray-600 text-sm mb-2">{title}</p>
      <span className="text-2xl font-bold text-blue-600">{value}</span>
    </div>
  );
};

export default Cart;
