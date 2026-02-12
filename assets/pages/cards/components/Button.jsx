export const Button = ({ children, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className="bg-rose-300 w-full text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-rose-400 active:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-colors duration-200 text-3xl"
    >
      {children}
    </button>
  );
};
