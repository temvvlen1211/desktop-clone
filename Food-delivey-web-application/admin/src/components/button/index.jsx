const Button = ({ children, type = "button", onClick = () => {} }) => {
  return (
    <button
      type={type}
      className="w-full rounded-lg bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white duration-300 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:duration-300  dark:hover:bg-amber-700 dark:focus:ring-blue-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
