import { Card } from "@client/components/molecules/Card";
import { Layout } from "./layout";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { IProduct } from "@client/interfaces/product";
import { nanoid } from "nanoid";
import Head from "next/head";
import { Button } from "@client/components/atoms/Button";
import Link from "next/link";

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  return (
    <Layout>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Шинэ бүтээгдэхүүн
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
          <div className="my-10 flex w-full justify-center">
            <Button as={Link} href={"/products"}>
              Бүгдийг үзэх
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const limit = 8;
  const productsRequest = await axios.get(
    `http://localhost:3005/products?limit=${limit}`
  );
  const products: IProduct[] = productsRequest.data;
  return {
    props: {
      products,
    },
  };
};
