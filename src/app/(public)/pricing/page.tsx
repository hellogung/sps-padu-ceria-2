import { Metadata } from "next";
import {APP_NAME} from "@/constant/const";

export const metadata: Metadata = {
  title: `Pricing - ${APP_NAME}`,
  description: "Sekolahkan anak kita di SPS Padu Ceria, sebelum masuk SD",
};

const PricingPage = () => {
  return (
    <>
      <h1 className="text-5xl">Pricing</h1>
    </>
  );
};

export default PricingPage;
