import Aos from "aos";
import { useEffect } from "react";

export default function Howitworks() {
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
    <section className="mb-10">
      <div className="text-center pt-16">
        <h1 className="text-5xl font-bold">How it works</h1>
        <p className="w-[600px] mx-auto text-gray-600 pt-5 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          dignissimos earum autem vel eveniet nisi dolorem doloribus?
        </p>
      </div>
      <div className="flex justify-center pt-10 gap-[150px]">
        <div data-aos="flip-up">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-1.png"
            alt="select"
          />
          <h1 className="text-2xl pt-5">
            <span className="text-5xl text-gray-400">01</span>
            Select Restaurant
          </h1>
          <p className="w-[280px] text-center text-gray-500 pt-5">
            Non enim praesent elementum facilisis leo vel fringilla. Lectus
            proin nibh nisl condimentum id. Quis varius quam quisque id diam
            vel.
          </p>
        </div>
        <div data-aos="flip-up">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-2.png"
            alt="menu"
          />
          <h1 className="text-2xl pt-5">
            <span className="text-5xl text-gray-400">02</span> Select Menu
          </h1>
          <p className="w-[280px] text-center text-gray-500 pt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            voluptate quibusdam ex eius eaque voluptatem voluptatum doloremque!
          </p>
        </div>
        <div data-aos="flip-up">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-3.png"
            alt=""
          />
          <h1 className="text-2xl pt-5">
            <span className="text-5xl text-gray-400">03</span> Wait for delivery
          </h1>
          <p className="w-[280px] text-center text-gray-500 pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            reiciendis pariatur fugit illum nulla hic.
          </p>
        </div>
      </div>
    </section>
  );
}
