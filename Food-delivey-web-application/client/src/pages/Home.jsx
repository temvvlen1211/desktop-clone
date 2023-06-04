import HowItWorks from "../components/home/HowItWork";
import MainSection from "../components/home/MainSection";
import Partnership from "../components/home/Partnership";
import EmailMenu from "../components/home/Emailmenu";
import RestaurantsCategory from "../components/unify/RestaurantsCategory";

export default function Home() {
  return (
    <>
      <MainSection />
      <HowItWorks />
      <RestaurantsCategory />
      <Partnership />
      <EmailMenu />
    </>
  );
}
