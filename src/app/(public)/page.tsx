import {Metadata} from "next";
import EmblaCarousel from "@/components/embla-carousel/EmblaCarousel";
import {EmblaOptionsType} from "embla-carousel";

export const metadata: Metadata = {
    title: "SPS Padu Ceria",
    description: "Sekolahkan anak kita di SPS Padu Ceria, sebelum masuk SD",
};

const OPTIONS: EmblaOptionsType = {};
const SLIDES = [
    {
        image: "/assets/images/banner/image-1.jpeg",
        link: "https://google.com",
    },
    {
        image: "/assets/images/banner/image-2.jpg",
        link: "https://google.com",
    },
    {
        image: "/assets/images/banner/image-3.jpg",
        link: "https://google.com",
    }
];

const HomePage = async () => {


    return (
        <>
            <div className="mx-auto mt-5">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} customClasses={"aspect-[16/8]"}/>
            </div>
            <h1 className="text-5xl">Home</h1>
        </>
    )
};

export default HomePage;
