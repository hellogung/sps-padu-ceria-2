import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPS Padu Ceria",
  description: "Sekolahkan anak kita di SPS Padu Ceria, sebelum masuk SD",
};

const HomePage = async () => {
  return (
    <>
    
      <h1 className="text-5xl">Home</h1>
    </>
  );
};

export default HomePage;
