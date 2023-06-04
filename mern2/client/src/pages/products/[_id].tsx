import { Button } from "@client/components/atoms/Button";
import { IProduct } from "@client/interfaces/product";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { FC, useState } from "react";
import { Layout } from "../layout";
import { FaMinus, FaPlus, FaRegStar, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { currencyFormatter } from "@client/utils/currencyFormatter";
import { useBasket } from "@client/hooks/useBasket";

interface ProductViewProps {
  product: IProduct;
}
const ProductView: FC<ProductViewProps> = (props) => {
  const [quantity, setQuantity] = useState(1);

  const { addToBasket } = useBasket();
  const { product } = props;

  const updateProductCount = (count: number) => {
    if (count < 0 && quantity === 1) {
      toast.warning("1 ээс бага бараа сагслах боломжгүй");
      return;
    }
    if (count > 0 && quantity === 10) {
      toast.warning("10 аас их бараа сагслах боломжгүй");
      return;
    }
    setQuantity(quantity + count);
  };

  return (
    <>
      <Layout title={product.name}>
        <div className="max-w-4xl mx-auto my-8">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <div className="aspect-square relative overflow-hidden border rounded">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 px-8">
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <div className="flex mb-4 items-center">
                <div className="mr-2">
                  <FaStar className="text-yellow-500" />
                </div>
                <div className="mr-2">
                  <FaStar className="text-yellow-500" />
                </div>
                <div className="mr-2">
                  <FaStar className="text-yellow-500" />
                </div>
                <div className="mr-2">
                  <FaStar className="text-yellow-500" />
                </div>
                <div className="mr-2">
                  <FaRegStar className="text-yellow-500" />
                </div>
                <div className="text-gray-700">(4.0)</div>
                <div className="text-gray-700 mx-2">|</div>
                <div className="text-gray-700">1234 views</div>
              </div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex mb-4">
                <div className="text-gray-700 mr-2">Category:</div>
                <div className="text-blue-500 font-bold">Category Name</div>
              </div>
              <div className="flex mb-4">
                <div className="text-gray-700 mr-2">Tags:</div>
                <span className="bg-gray-200 text-sm py-1 px-2 rounded-md mr-2 mb-2">
                  Tag1
                </span>
                <span className="bg-gray-200 text-sm py-1 px-2 rounded-md mr-2 mb-2">
                  Tag2
                </span>
                <span className="bg-gray-200 text-sm py-1 px-2 rounded-md mr-2 mb-2">
                  Tag3
                </span>
              </div>
              <div className="flex items-center mb-8">
                <div className="text-gray-700 mr-2">Price:</div>
                <div className="text-blue-500 font-bold text-lg">
                  {currencyFormatter(product.price)}₮
                </div>
              </div>
              <div className="mb-8">
                <label className="text-gray-700">Quantity:</label>
                <div className="flex items-center mt-2">
                  <button
                    type="button"
                    className="text-gray-700 rounded-full py-1 px-3 border-gray-300 border hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    onClick={() => updateProductCount(-1)}
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="number"
                    name="quantity"
                    value={quantity}
                    readOnly={true}
                    className="text-center text-gray-700 w-16 rounded-md px-2 py-1 mx-2 border-gray-300 border focus:outline-none focus:ring-2  focus:ring-gray-500 focus:ring-offset-2"
                  />
                  <button
                    type="button"
                    className="text-gray-700 rounded-full py-1 px-3 border-gray-300 border hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    onClick={() => updateProductCount(1)}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <Button onClick={() => addToBasket(product._id, quantity)}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (req: GetServerSidePropsContext) => {
  const _id = req.params;
  const productsRequest = await axios.get(
    `http://localhost:3005/products/${_id}`
  );
  const product: IProduct = productsRequest.data;
  return {
    props: {
      product,
    },
  };
};

export default ProductView;
