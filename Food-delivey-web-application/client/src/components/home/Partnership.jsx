import Aos from "aos";
import { useEffect } from "react";

const ship = [
  {
    id: "1",
    imageUrl: "https://bslthemes.com/html/quickeat/assets/img/photo-6.jpg",
    imageAlt: "",
    title: "Join Courier",
  },
  {
    id: "2",
    imageUrl: "https://bslthemes.com/html/quickeat/assets/img/photo-7.jpg",
    imageAlt: "",
    title: "Join Merchant",
  },
];
export default function Partnership() {
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
    <section className="bg-[#363636] py-16">
      <div className="container mx-auto grid gap-10">
        <h1 className="text-white text-5xl text-center">
          Want to Join Partnership?
        </h1>
        <div className="flex justify-around">
          {ship.map((partner) => {
            return (
              <div
                key={partner.id}
                className="border-4  rounded-lg border-amber-500 relative"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  src={partner.imageUrl}
                  alt={partner.imageAlt}
                  className="rounded-lg"
                />
                <div className="absolute top-[65%] left-[10%]">
                  <p className="text-white text-5xl">{partner.title}</p>
                  <a href="/contactus">
                    <button className="text-white bg-amber-500 w-[150px] h-[50px] rounded-xl mt-5 hover:bg-transparent hover:border-amber-500 hover:border-2 hover:text-amber-500 font-thin">
                      LEARN MORE→
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
