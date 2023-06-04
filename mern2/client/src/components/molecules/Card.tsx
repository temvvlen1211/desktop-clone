import { IProduct } from "@client/interfaces/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../atoms/Button";
import { currencyFormatter } from "@client/utils/currencyFormatter";
import { FaShoppingBag } from "react-icons/fa";

interface CardProps {
  product: IProduct;
}

export const Card: FC<CardProps> = ({ product }) => {
  const { image, name, description, price } = product;
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link
        href={`/products/${product._id}`}
        className="block aspect-square relative overflow-hidden group"
      >
        <Image
          width={400}
          height={400}
          src={image}
          alt={name}
          className="absolute w-full h-full object-cover group-hover:scale-110 transition-all"
        />
      </Link>
      <div className="px-6 py-4">
        <Link
          href={`/products/${product._id}`}
          className="font-bold text-xl mb-2 line-clamp-1 opacity-100 hover:opacity-70 transition-opacity"
        >
          {name}
        </Link>
        <p className="text-gray-700 text-base mb-2 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-gray-900 font-bold text-xl">
            {currencyFormatter(product.price)} ₮
          </div>
          <Button>
            <FaShoppingBag />
          </Button>
        </div>
      </div>
    </div>
  );
};
