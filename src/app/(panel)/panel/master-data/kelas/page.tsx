import { APP_NAME } from "@/constant/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Guru | ${APP_NAME}`,
};

const KelasPage = () => {
  return (
    <>
      <h1 className="text-5xl">Kelas Page</h1>
      <p>Ini adalah Kelas Page</p>
    </>
  );
};

export default KelasPage;
