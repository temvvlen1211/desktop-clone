import { ElementType, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  [x: string]: any;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  as: Tag = "button",
  ...otherProps
}) => {
  const baseStyles = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:scale-90 transition`;

  return (
    <Tag {...otherProps} className={twMerge(baseStyles, className)}>
      {children}
    </Tag>
  );
};
