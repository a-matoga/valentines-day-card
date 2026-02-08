export const Button = ({children}) => {
    return (
        <button className="
  bg-rose-500 
  text-white 
  font-semibold 
  py-2 
  px-6 
  rounded-lg 
  shadow-md 
  hover:bg-rose-600 
  active:bg-rose-700 
  focus:outline-none 
  focus:ring-2 
  focus:ring-rose-300 
  transition-colors 
  duration-200
  text-3xl
">
            {children}
        </button>
    );
}