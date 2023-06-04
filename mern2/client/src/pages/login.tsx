import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const loginOnSubmit = async (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/otp/signin", {
        email,
      })
      .then((res) => {
        const otp = window.prompt("Your OTP?");
        axios
          .post("http://localhost:3005/otp/signin/verify", { email, otp })
          .then((res) => {
            localStorage.setItem("token", res.data);
            toast.success("Амжилттай нэвтэрлээ!");
            router.replace("/");
          });
      });
  };
  return (
    <form onSubmit={loginOnSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">nevtreh</button>
    </form>
  );
};

export default LoginPage;
