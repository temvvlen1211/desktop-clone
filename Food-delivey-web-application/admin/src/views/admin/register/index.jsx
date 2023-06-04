import InputGroup from "components/input";
import Button from "components/button";
import ButtonLink from "components/buttonLink";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();

  const submitRegister = () => {
    const body = { email, password, repassword };
    axios.post("/api/register", body).then(() => {
      toast.success("Бүртгэл амжилттай");
      navigate("/signIn");
    });
  };

  return (
    <section className=" mt-52 ">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8  lg:py-0">
        <div className="w-full rounded-lg bg-white shadow-xl  dark:border-gray-700 dark:bg-navy-700 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Системд бүртгүүлэх
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                submitRegister();
              }}
            >
              <InputGroup
                label="И-Мэйл"
                placeholder="email@example.com"
                required={true}
                type="email"
                value={email}
                onChange={setEmail}
              />
              <InputGroup
                label="Нууц үг"
                placeholder="*********"
                required={true}
                type="password"
                value={password}
                onChange={setPassword}
              />
              <InputGroup
                label="Нууц үг давтах"
                placeholder="*********"
                required={true}
                type="password"
                value={repassword}
                onChange={setRepassword}
              />
              <Button type="submit">Бүртгүүлэх</Button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Бүртгэлтэй хэрэглэгч? &nbsp;
                <Link to={"/signIn"}>
                  <ButtonLink>Нэвтрэх</ButtonLink>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterScreen;
