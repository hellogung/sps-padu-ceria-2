import { APP_NAME } from "@/constant/const";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Guru | ${APP_NAME}`,
  };

const GuruPage = () => {
  return (
    <>
      <h1 className="text-5xl">Guru Page</h1>
      <p>Ini adalah Guru Page</p>
    </>
  );
};

export default GuruPage;
