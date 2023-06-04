import Aos from "aos";
import { useEffect } from "react";
import RatingStars from "react-rating-stars-component";
import GenresButton from "./Genresbutton";

const resCategory = [
  {
    id: "1",
    imageUrl: "https://bslthemes.com/html/quickeat/assets/img/logos-2.jpg",
    imageAlt: "",
    title: "Kennington Lane Cafe",
    text: "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
  {
    id: "2",
    imageUrl: "https://bslthemes.com/html/quickeat/assets/img/logos-1.jpg",
    imageAlt: "",
    title: "The Wilmington",
    text: "Vulputate enim nulla aliquet porttitor lacus luctus. Suscipit adipiscing bibendum est ultricies integer. Sed adipiscing diam donec adipiscing tristique.",
  },
  {
    id: "3",
    imageUrl: "https://bslthemes.com/html/quickeat/assets/img/logos-3.jpg",
    imageAlt: "",
    title: " Kings Arms",
    text: "Tortor at risus viverra adipiscing at in tellus. Cras semper auctor neque vitae tempus. Dui accumsan sit amet nulla facilisi. Sed adipiscing diam donec adipiscing tristique.",
  },
  {
    id: "4",
    imageUrl: "https://bslthemes.com/html/quickeat/assets/img/logos-4.jpg",
    imageAlt: "",
    title: "The Victoria",
    text: "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
];

export default function RestaurantsCategory() {
  useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 700,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="grid gap-8 py-10 bg-gray-100">
      <section className="mx-auto container flex gap-16 flex-wrap  pt-16">
        {resCategory.map((restaurant) => {
          return (
            <div
              key={restaurant.id}
              className="flex w-[46rem]  rounded-xl bg-white p-10 shadow-xl"
              data-aos="flip-down"
            >
              <div className="">
                <img
                  src={restaurant.imageUrl}
                  alt={restaurant.imageAlt}
                  className="rounded-lg w-52  "
                />
              </div>
              <div className="mx-7">
                <h1 className="text-3xl font-bold hover:text-amber-500 duration-300 cursor-pointer">
                  {restaurant.title}
                </h1>
                <RatingStars
                  count={5}
                  value={5}
                  size={20}
                  activeColor="#FFA500"
                />
                <div className="grid gap-5 ">
                  <GenresButton />
                  <p className="font-thin  ">{restaurant.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="text-center ">
        <a href="/restaurants">
          <button className="hover:bg-amber-500 border-2 border-amber-500 text-amber-500 hover:text-white w-[100px] h-[50px] rounded-xl">
            SEE ALL →
          </button>
        </a>
      </div>
    </div>
  );
}
