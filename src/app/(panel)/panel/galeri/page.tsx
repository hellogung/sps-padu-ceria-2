import { APP_NAME } from "@/constant/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Galeri | ${APP_NAME}`,
};

const GaleriPage = () => {
  return (
    <>
      <h1 className="text-5xl">Galeri Page</h1>
      <p>Ini adalah Galeri Page</p>
    </>
  );
};

export default GaleriPage;
