import { APP_NAME } from "@/constant/const";
import { Metadata } from "next";
import RegisterClientPage from "./register";

export const metadata: Metadata = {
  title: `Register | ${APP_NAME}`,
  description: "",
};

const Register = () => {
  return (
    <>
      <RegisterClientPage />
    </>
  );
};

export default Register;
