import axios from "axios";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { useCurrentUser } from "./useCurrentUser";
import { useEffect } from "react";
import { BasketState } from "@client/atoms/atoms";

export const useBasket = () => {
  const [basket, setBasket] = useRecoilState<any>(BasketState);

  useEffect(() => {
    console.log("basket: ", basket);
  }, [basket]);

  const { currentUser } = useCurrentUser();

  const addToBasket = async (productId: string, quantity: number) => {
    if (quantity > 10) {
      toast.warn("Та 10 аас дээш бараа сагслаж болохгүй");
      return;
    }
    if (quantity < 0) {
      toast.warn("Та дор хаяж 1 бараа сагслах ёстой");
      return;
    }

    const basket = await updateBasket(productId, quantity);
    setBasket(basket);
    toast.success("Барааг амжилттай сагсаллаа");
  };

  const updateBasket = async (productId: string, quantity: number) => {
    if (!currentUser) {
      if (!basket) {
        console.log("basket is empty so created");
        return { items: [{ productId, quantity }] };
      }

      const newBasket: any = { items: [] };
      let { items } = basket;
      items = [...items];
      let updatedQuantity = false;

      newBasket.items = items.map((item: any, index: number) => {
        if (item.productId === productId) {
          const newQuantity = item.quantity + quantity;
          updatedQuantity = true;
          return {
            productId: productId,
            quantity: newQuantity,
          };
        }
        return item;
      });
      console.log("newBasket:", newBasket);
      if (!updatedQuantity) {
        newBasket.items.push({ productId, quantity });
      }
      return newBasket;
    }
    const response = await axios.post(
      "http://localhost:3005/baskets/add",
      {
        productId,
        quantity,
      },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    );
    console.log("response is:", response);
    return response.data;
  };
  return { basket, setBasket, addToBasket };
};
