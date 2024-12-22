import { Metadata } from "next";
import {APP_NAME} from "@/constant/const";

export const metadata: Metadata = {
  title: `Contact - ${APP_NAME}`,
  description: "Sekolahkan anak kita di SPS Padu Ceria, sebelum masuk SD",
};

const ContactPage = () => {
    return (
      <>
        <h1 className="text-5xl">Contact</h1>
      </>
    );
  };
  
  export default ContactPage;
  