import { APP_NAME } from "@/constant/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Data Siswa | ${APP_NAME}`,
};

const SiswaPage = () => {
  return (
    <>
      <h1 className="text-5xl">Siswa Page</h1>
      <p>Ini adalah Siswa Page</p>
    </>
  );
};

export default SiswaPage;
