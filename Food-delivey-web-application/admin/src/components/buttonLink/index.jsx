const ButtonLink = ({ children, ...otherProps }) => {
  return (
    <span
      {...otherProps}
      className="font-medium text-amber-500 hover:underline "
    >
      {children}
    </span>
  );
};
export default ButtonLink;
