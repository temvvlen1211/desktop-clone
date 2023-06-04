import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BackgroundContext } from "../contexts/BackgroundProvider";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Tab } from "@headlessui/react";
import Banks from "../components/icon/Banks";
import Aos from "aos";

const disctrict = [
  { name: "Хан-Уул" },
  { name: "Сүхбаатар" },
  { name: "Сонгинохайрхан" },
  { name: "Баянгол" },
  { name: "Чингэлтэй" },
  { name: "Баянзүрх" },
];

function FoodList() {
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
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  const foods = [
    {
      id: 1,
      resname: "Kennington Lane Cafe",
      respic: "https://bslthemes.com/html/quickeat/assets/img/logo-s.jpg",
      foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-1.png",
      foodname: "Pasta,kiwi and sauce chilli",
      price: "$13",
      quantity: 1,
    },
    {
      id: 2,
      foodpic: "https://bslthemes.com/html/quickeat/assets/img/order-2.png",
      foodname: "Rice with shrimps and kiwi",
      price: "$12",
      quantity: 1,
    },
  ];
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleSubstract = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div>
      {foods.map((food) => (
        <div className="my-2">
          <div className="flex align-middle">
            <img src={food.respic} alt="" className="rounded-xl mb-5" />
            <h1 className="font-bold  text-xl p-3">{food.resname}</h1>
          </div>
          <div className="flex">
            <img src={food.foodpic} alt="" className="mt-5" />
            <h1 className="font-bold text-xl pt-8 w-[220px] ms-4">
              {food.foodname}
            </h1>
          </div>
          <div className="flex mt-5 justify-between">
            <div className="text-4xl font-bold text-amber-500">
              {food.price}
            </div>
            <div className="flex gap-2 ">
              <button
                onClick={handleSubstract}
                className=" flex items-center justify-center  border-2 p-1  text-amber-500 rounded-xl  group bg-amber-500  hover:text-white     "
              >
                <span className="relative px-5 py-2.5   duration-300 bg-white  rounded-md group-hover:bg-opacity-0">
                  -
                </span>
              </button>
              <input
                className="  rounded-lg  w-20 text-center  border-gray-200 border "
                type="number"
                min="0"
                value={quantity}
              />

              <button
                onClick={handleAdd}
                className=" flex items-center justify-center  border-2 p-1  text-amber-500 rounded-xl  group bg-amber-500  hover:text-white"
              >
                <span className="relative px-5 py-2.5   duration-300 bg-white  rounded-md group-hover:bg-opacity-0">
                  +
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between text-gray-400 font-thin">
            <p>Price</p>
            <p>Quantity</p>
          </div>
          <hr className="mt-2" />
        </div>
      ))}
      <div className="flex justify-between mt-5">
        <p className="text-gray-400 font-thin pt-1">Total order:</p>
        <p className="text-3xl font-bold">$25</p>
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-gray-400 font-thin pt-1">To pay</p>
        <p className="text-5xl text-amber-500 font-bold">$25</p>
      </div>
    </div>
  );
}

export default function Checkout() {
  const Number = 2;
  const { setColor } = useContext(BackgroundContext);
  setColor("bg-transparent");
  return (
    <section className="container mx-auto">
      <div className="text-center my-16 grid gap-10">
        <ol className="flex items-center justify-center" data-aos="fade-up">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-amber-500 "
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="#ffa500"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                to="/restaurants"
                className="ml-1 text-sm font-medium text-gray-700 md:ml-2"
              >
                Restaurants
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="#ffa500"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                to="/restaurantsCard"
                className="ml-1 text-sm font-medium text-gray-700 md:ml-2"
              >
                Restaurants Card
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="#ffa500"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                to="/restaurants"
                className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 "
              >
                Checkout
              </Link>
            </div>
          </li>
        </ol>
        <h1 className="text-5xl font-bold" data-aos="fade-up">
          Checkout
        </h1>
        <p className="text-md text-gray-500 font-thin" data-aos="fade-up">
          Sit amet nisl purus in mollis nunc sed id semper. Condimentum id
          venenatis a condimentum vitae sapien pellentesque.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center gap-[10%]">
          <div className="w-[500px]" data-aos="flip-down">
            <div className="flex justify-between my-10">
              <h1 className="text-5xl font-bold">Your order:</h1>
              <p className="text-amber-500 text-5xl font-bold">{Number}</p>
            </div>
            <div className="mb-16">
              <FoodList />
            </div>
          </div>
          <div
            className="w-[636px] rounded-lg shadow-2xl mt-5 mb-16"
            data-aos="flip-down"
          >
            <div className="p-8">
              <div>
                <h1 className="text-2xl font-bold">Buyer information</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border h-14 ps-2 rounded-lg font-thin mt-4 focus:outline-0 border-gray-400"
                  />
                  <div className="flex mt-5 gap-10  ">
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-80 h-14 border-gray-400"
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-72 h-14 border-gray-400"
                    />
                  </div>
                  <h1 className="text-2xl font-bold mt-7 mb-4">
                    Delivery address
                  </h1>
                  <Disctrict />
                  <input
                    type="text"
                    placeholder="Street"
                    className="rounded-lg font-thin focus:outline-0 border ps-2 border-gray-400 w-full h-14 mt-4"
                  />
                  <div className="flex mt-5 gap-10  ">
                    <input
                      type="text"
                      placeholder="House number"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-80 h-14 border-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Apartment number"
                      className="rounded-lg font-thin focus:outline-0 border ps-2 w-72 h-14 border-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-extrabold pt-5 mb-2">
                    Payment method
                  </h1>
                  <Tab.Group>
                    <Tab.List className={"text-xl font-extrabold"}>
                      <Tab
                        className={
                          "hover:text-amber-500 duration-300 ps-10 active:ring-white outline-none"
                        }
                      >
                        Card
                      </Tab>
                      <Tab
                        className={
                          "hover:text-amber-500 duration-300 ps-10 outline-none"
                        }
                      >
                        Cash
                      </Tab>
                    </Tab.List>
                    <Tab.Panels>
                      <Tab.Panel>
                        <Banks />
                        <input
                          type="number"
                          placeholder="Card number"
                          className="rounded-lg font-thin focus:outline-0 border ps-2 w-full mt-2 h-14 border-gray-400"
                        />
                        <div className="flex mt-5 gap-10  ">
                          <input
                            type="number"
                            placeholder="Expiration Date"
                            className="rounded-lg font-thin focus:outline-0 border ps-2 w-80 h-14 border-gray-400"
                          />
                          <input
                            type="number"
                            placeholder="CVV"
                            className="rounded-lg font-thin focus:outline-0 border ps-2 w-72 h-14 border-gray-400"
                          />
                        </div>
                        <button className="bg-amber-500 w-full h-14 rounded-lg text-white hover:bg-transparent hover:border-2 border-amber-500 hover:text-amber-500 duration-300 font-thin mt-6">
                          Send
                        </button>
                      </Tab.Panel>
                      <Tab.Panel>
                        <button className="bg-amber-500 w-full h-14 rounded-lg text-white hover:bg-transparent hover:border-2 border-amber-500 hover:text-amber-500 duration-300 font-thin mt-16">
                          Send
                        </button>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Disctrict() {
  const [selected, setSelected] = useState(disctrict[0]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-gray-400 text-gray-500 h-14 font-bold focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {disctrict.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
