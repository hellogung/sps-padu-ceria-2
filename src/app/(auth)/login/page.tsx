import { Metadata } from "next";
import { APP_NAME } from "@/constant/const";
import LoginClientPage from "./login";

export const metadata: Metadata = {
  title: `Login | ${APP_NAME}`,
  description: "",
};

const Login = () => {
  return (
    <>
      <LoginClientPage />
    </>
  );
};

export default Login;
