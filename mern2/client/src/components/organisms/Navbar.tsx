import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/Button";
import { FC, ReactNode } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface NavbarItem {}

interface NavbarProps {
  items?: NavbarItem[];
  cartCount?: number;
  currentUser?: any;
}
export const Navbar: FC<NavbarProps> = ({
  items,
  currentUser,
  cartCount = 1,
}) => {
  return (
    <nav className="bg-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                width={32}
                height={32}
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Workflow"
              />
              <span className="text-lg font-medium text-gray-800 ml-2">
                E-commerce
              </span>
            </Link>
            <ul className="hidden md:ml-6 md:flex md:items-center">
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-3">
            <div className="relative mr-6">
              <Link
                href="/cart"
                className="text-blue-400 relative focus:outline-none"
              >
                <FaShoppingCart size={24} />
              </Link>
              {cartCount > 0 && (
                <span className="absolute -right-3 -top-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            {!currentUser && (
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Button as={Link} href="/sign-up">
                  Sign up
                </Button>
              </>
            )}
            {currentUser && currentUser.email}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Products
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-indigo-600 hover:bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};
