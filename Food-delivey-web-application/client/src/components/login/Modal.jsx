import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Logo from "../logo/Logo";

export default function LoginModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("signIn");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className=" inset-0 flex items-center justify-center">
        <FaUserAlt fill="#ffa500" size="20" onClick={openModal} />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full relative  max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="grid gap-3 relative ">
                    <div className=" absolute right-0">
                      <button
                        onClick={closeModal}
                        className="text-amber-500 focus:outline-none  "
                      >
                        <AiOutlineCloseCircle fill="#ffa500" size={30} />
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <Logo />
                    </div>
                  </div>
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold  text-center my-3  leading-6 text-gray-900"
                    >
                      {type === "signIn"
                        ? "Sign in to your account"
                        : "Sign up your account"}
                    </Dialog.Title>
                  </div>
                  {type === "signIn" && <SignIn setType={setType} />}
                  {type === "signUp" && <SignUp setType={setType} />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
