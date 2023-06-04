import { ElementType, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PaginationItemProps {
  as?: ElementType;
  active?: boolean;
  onClick?: (event: any) => void;
  children: ReactNode;
  isLast: boolean;
  isFirst: boolean;
  [x: string]: any;
}
export const PaginationItem: FC<PaginationItemProps> = (props) => {
  let {
    onClick = () => {},
    active = false,
    children,
    as: Tag = "span",
    isLast = false,
    isFirst = false,
    ...otherProps
  } = props;

  if (active) Tag = "span";

  const baseClasses = "px-3 py-2 leading-tight border";
  const inActiveClasses =
    "text-gray-500 bg-white hover:bg-gray-100 border-gray-300 hover:text-gray-700 ";
  const activeClasses =
    "text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ";
  const firstStyles = "rounded-l-lg";
  const lastStyles = "rounded-r-lg";
  return (
    <li>
      <Tag
        onClick={onClick}
        {...otherProps}
        className={twMerge(
          baseClasses,
          active ? activeClasses : inActiveClasses,
          isLast && lastStyles,
          isFirst && firstStyles
        )}
      >
        {children}
      </Tag>
    </li>
  );
};
