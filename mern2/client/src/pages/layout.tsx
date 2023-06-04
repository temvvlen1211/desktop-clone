import { Footer } from "@client/components/atoms/Footer";
import { LoaderScreen } from "@client/components/molecules/LoaderScreen";
import { Navbar } from "@client/components/organisms/Navbar";
import { useBasket } from "@client/hooks/useBasket";
import { useCurrentUser } from "@client/hooks/useCurrentUser";
import { useLoading } from "@client/hooks/useLoading";
import axios from "axios";
import Head from "next/head";
import { FC, ReactNode, useEffect } from "react";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  children,
  title = ".:: E-Commerce ::.",
}) => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { basket, setBasket } = useBasket();
  const loading = useLoading();

  useEffect(() => {
    if (!currentUser) {
      axios
        .get("http://localhost:3005/currentUser", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((error) => {
          console.log("User is not signed in");
        });
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      axios
        .get("http://localhost:3005/baskets/main", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((res) => {
          setBasket(res.data);
        });
    }
  }, [currentUser]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`bg-gray-100 `}>
        <Navbar
          currentUser={currentUser}
          cartCount={basket?.items?.length || 0}
        />
        {children}
        {loading && <LoaderScreen />}
        <Footer />
      </div>
    </>
  );
};
