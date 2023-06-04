import Aos from "aos";
import { useEffect } from "react";

export default function EmailMenu() {
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
  return (
    <section className="flex justify-evenly container mx-auto   py-16">
      <div data-aos="flip-up">
        <img
          src="https://bslthemes.com/html/quickeat/assets/img/illustration-4.png"
          alt=""
        />
      </div>
      <div data-aos="flip-up">
        <h1 className="text-5xl w-[500px] font-extrabold">
          Get the menu of your favorite restaurants every day
        </h1>
        <input
          type="text"
          placeholder="Enter email address"
          className="rounded-lg w-[70%] h-14 shadow-lg ps-2 focus:outline-0"
        />
        <button className="bg-amber-500 mt-10 h-14 text-white rounded-lg font-thin ms-2 w-[25%] hover:bg-transparent duration-300 hover:text-amber-500 hover:border hover:border-amber-500">
          SUBSCRIBE
        </button>
      </div>
    </section>
  );
}
