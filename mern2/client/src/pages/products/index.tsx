import { IProduct } from "@client/interfaces/product";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { Layout } from "../layout";
import { FC } from "react";
import { Card } from "@client/components/molecules/Card";
import { nanoid } from "nanoid";
import { Pagination } from "@client/components/molecules/Pagination";

interface ProudctsProps {
  products: IProduct[];
  page: number;
  size: number;
  total: number;
}

const Products: FC<ProudctsProps> = (props) => {
  const { products, page, size, total } = props;
  return (
    <Layout>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Бүтээгдэхүүнүүд
            </h2>
          </div>

          <div className="my-10">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <li key={nanoid()} className="col-span-1">
                  <Card product={product} />
                </li>
              ))}
            </ul>
          </div>
          <Pagination
            page={page}
            size={size}
            total={total}
            baseUrl="/products"
          />
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { page = 1, size = 12 } = ctx.query;

  const productsRequest = await axios.get(
    `http://localhost:3005/products?limit=${size}`
  );

  const productsCountRequest = await axios.get(
    `http://localhost:3005/products/total`
  );

  const products: IProduct[] = productsRequest.data;
  const total = productsCountRequest.data;
  return {
    props: {
      products,
      page,
      size,
      total,
    },
  };
};

export default Products;
