import { APP_NAME } from "@/constant/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Artikel | ${APP_NAME}`,
};

const ArtikelPage = () => {
  return (
    <>
      <h1 className="text-5xl">Artikel Page</h1>
      <p>Ini adalah Artikel Page</p>
    </>
  );
};

export default ArtikelPage;
