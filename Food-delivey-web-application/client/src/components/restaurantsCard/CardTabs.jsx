import { useState } from "react";
import { Tab } from "@headlessui/react";
import GenresButton from "../unify/Genresbutton";
import {
  AiFillHeart,
  AiOutlineInfoCircle,
  AiOutlineClose,
} from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CardTabs() {
  const [info, setInfo] = useState(false);

  let [FoodCategory] = useState({
    Breakfast: [
      {
        id: 1,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-13.png",
        imgAlt: "food",
        title: "Egg, kiwi and sauce chilli",
        price: "599$",
        button: "Add to cart",
      },
      {
        id: 2,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-2.png",
        title: "Potatoes with pork and dried fruits",
        imgAlt: "food",
        price: "99$",
        button: "Add to cart",
      },
      {
        id: 3,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-3.png",
        title: "Rice with shrimps and kiwi",
        imgAlt: "food",
        price: "911$",
        button: "Add to cart",
      },
      {
        id: 4,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-2.png",
        title: "Spaghetti with mushrooms and...",
        imgAlt: "food",
        price: "923$",
        button: "Add to cart",
      },
      {
        id: 5,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-3.png",
        title: "Sliced pork, avocado and...",
        imgAlt: "food",
        price: "911$",
        button: "Add to cart",
      },
      {
        id: 6,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-2.png",
        title: "Veal meat, tomatoes and...",
        imgAlt: "food",
        price: "923$",
        button: "Add to cart",
      },
    ],
    Lunch: [
      {
        id: 1,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-13.png",
        imgAlt: "food",
        title: "Egg, kiwi and sauce chilli",
        price: "599$",
        button: "Add to cart",
      },
      {
        id: 2,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-2.png",
        title: "Potatoes with pork and dried fruits",
        imgAlt: "food",
        price: "99$",
        button: "Add to cart",
      },
      {
        id: 3,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-3.png",
        title: "Rice with shrimps and kiwi",
        imgAlt: "food",
        price: "911$",
        button: "Add to cart",
      },
      {
        id: 4,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-2.png",
        title: "Spaghetti with mushrooms and...",
        imgAlt: "food",
        price: "923$",
        button: "Add to cart",
      },
      {
        id: 5,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-3.png",
        title: "Sliced pork, avocado and...",
        imgAlt: "food",
        price: "911$",
        button: "Add to cart",
      },
    ],
    Dinner: [
      {
        id: 1,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-13.png",
        imgAlt: "food",
        title: "Egg, kiwi and sauce chilli",
        price: "599$",
        button: "Add to cart",
      },
      {
        id: 2,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-2.png",
        title: "Potatoes with pork and dried fruits",
        imgAlt: "food",
        price: "99$",
        button: "Add to cart",
      },
      {
        id: 3,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-3.png",
        title: "Rice with shrimps and kiwi",
        imgAlt: "food",
        price: "911$",
        button: "Add to cart",
      },
      {
        id: 4,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-2.png",
        title: "Spaghetti with mushrooms and...",
        imgAlt: "food",
        price: "923$",
        button: "Add to cart",
      },
    ],
    StreetFood: [
      {
        id: 1,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-13.png",
        imgAlt: "food",
        title: "Egg, kiwi and sauce chilli",
        price: "599$",
        button: "Add to cart",
      },
      {
        id: 2,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-2.png",
        title: "Potatoes with pork and dried fruits",
        imgAlt: "food",
        price: "99$",
        button: "Add to cart",
      },
      {
        id: 3,
        imageUrl: "https://bslthemes.com/html/quickeat/assets/img/dish-3.png",
        title: "Rice with shrimps and kiwi",
        imgAlt: "food",
        price: "911$",
        button: "Add to cart",
      },
    ],
  });

  return (
    <div className="w-full container mx-auto my-20 ">
      <Tab.Group>
        <Tab.List className="flex gap-4 shadow-xl ">
          {Object.keys(FoodCategory).map((genres) => (
            <Tab
              key={genres.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5  font-medium     duration-300   text-amber-500   ",
                  "ring-white  ring-offset-2 ring-offset-amber-500  focus:outline-none focus:ring-2 uppercase",
                  selected
                    ? "bg-white shadow"
                    : "text-black/50   hover:bg-dark hover:text-amber-500"
                )
              }
            >
              {genres}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 p-10">
          {Object.values(FoodCategory).map((FoodCard, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3  ",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none "
              )}
            >
              <ul className="flex gap-10 flex-wrap focus:outline-0 ">
                {FoodCard.map((food) => (
                  <li key={food.id}>
                    <div
                      className="w-full  max-w-md  bg-white border border-gray-200 rounded-lg shadow"
                      data-aos="flip-up"
                    >
                      <a href="/">
                        <img
                          className="p-8 rounded-t-lg"
                          src={food.imageUrl}
                          alt={food.imgAlt}
                        />
                      </a>
                      {/* front */}
                      <div
                        className="px-10 py-10"
                        style={{ display: info ? "none" : "block" }}
                      >
                        <h5 className="text-4xl font-semibold tracking-tight text-gray-900">
                          {food.title}
                        </h5>

                        <div className="flex justify-between gap-2 items-center  my-5">
                          <GenresButton />
                          <button>
                            <AiOutlineInfoCircle
                              className=" fill-amber-500 "
                              onClick={() => setInfo(true)}
                            />
                          </button>
                          <a href="/">
                            <AiFillHeart className="fill-amber-500 h-[50px] active:fill-amber-500" />
                          </a>
                        </div>
                        <hr />
                        <div className="flex my-5 justify-between ">
                          <p className="text-3xl font-bold text-gray-900">
                            {food.price}
                          </p>
                          <div className="flex gap-2 ">
                            <button className=" flex items-center justify-center  border p-1       text-amber-500 rounded-lg  group bg-amber-500  hover:text-white     ">
                              <span className="relative px-5 py-2.5   duration-300 bg-white  rounded-md group-hover:bg-opacity-0">
                                -
                              </span>
                            </button>
                            <input
                              className="  rounded-lg  w-20 text-center  border-gray-200 border "
                              defaultValue="1"
                              type="number"
                              min="0"
                            />

                            <button className=" flex items-center justify-center  border p-1       text-amber-500 rounded-lg  group bg-amber-500  hover:text-white     ">
                              <span className="relative px-5 py-2.5   duration-300 bg-white  rounded-md group-hover:bg-opacity-0">
                                +
                              </span>
                            </button>
                          </div>
                        </div>

                        <p className="">
                          <button
                            href="/"
                            className="bg-amber-500 rounded-lg w-full text-white p-2  hover:bg-white hover:text-amber-500 hover:border-amber-500 hover:border-2 duration-300 hover:bg-transparent"
                          >
                            {food.button}
                          </button>
                        </p>
                      </div>

                      {/* back */}
                      <div
                        className="px-10 py-10"
                        style={{ display: info ? "block" : "none" }}
                      >
                        <div className="flex justify-end">
                          <button className="" onClick={() => setInfo(false)}>
                            <AiOutlineClose className="fill-amber-500 " />
                          </button>
                        </div>
                        <h5 className="text-4xl font-semibold tracking-tight text-gray-900">
                          Potatoes with pork and dried fruits
                        </h5>

                        <div className="   my-5">
                          <GenresButton />
                        </div>
                        <div className="text-lg ">
                          <p className="text-gray-400 my-2 ">
                            In egestas erat imperdiet sed euismod nisi porta.
                            Ultrices sagittis orci a scelerisque. Diam quam
                            nulla porttitor.
                          </p>

                          <ul className="list-disc mx-4  ">
                            <li>Nulla porttitor massa id;</li>
                            <li>Aliquam vestibulum morbi;</li>
                            <li>Blandit donec adipiscing;</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
export default CardTabs;
