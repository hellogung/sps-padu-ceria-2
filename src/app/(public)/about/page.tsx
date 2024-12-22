import {Metadata} from "next";
import {APP_NAME} from "@/constant/const";
import EmblaCarousel from "@/components/embla-carousel/EmblaCarousel";
import {EmblaOptionsType} from "embla-carousel";

export const metadata: Metadata = {
    title: `About - ${APP_NAME}`,
    description: "Sekolahkan anak kita di SPS Padu Ceria, sebelum masuk SD",
};

const OPTIONS: EmblaOptionsType = {};
const SLIDES = [
    {
        image: "/assets/images/profiles/1.jpg"
    },
    {
        image: "/assets/images/profiles/2.jpg"
    },
    {
        image: "/assets/images/profiles/3.jpg"
    },
    {
        image: "/assets/images/profiles/4.jpg"
    },
    {
        image: "/assets/images/profiles/5.jpg"
    },
    {
        image: "/assets/images/profiles/6.jpg"
    },
    {
        image: "/assets/images/profiles/7.jpg"
    },
    {
        image: "/assets/images/profiles/8.jpg"
    },
    {
        image: "/assets/images/profiles/9.jpg"
    },
    {
        image: "/assets/images/profiles/10.jpg"
    }
];

const AboutPage = () => {
    return (
        <div className="w-11/12 md-w-3/4 mx-auto text-xl">
            <section className="text-justify my-5">
                <h1 className="text-6xl font-bold text-center text-slate-800 dark:text-slate-200">About</h1>
                <p className="my-5">
                    Anak adalah buah hati sangat berharga yang merupakan amanah untuk senantiasa kita menjaga dan
                    membimbing
                    agar anak yang berkualitas, bertaqwa berbudi pekerti luhur dan mampu bersaing.
                </p>
                <p className="my-5">
                    Usia Emas "The Golden Age" adalah usia yang sangat peka dan usia tersebut dimana para pakar
                    berpendapat:
                    "Manusia yang berkualitas tidak akan terbentuk begitu saja, melainkan harus diupayakan sedini
                    mungkin".
                    Salah satu caranya adalah melakukan perangsangan diri yang mendorong anak untuk aktif. Agar anak
                    timbuh
                    aktif ia perlu diberi kesempatan untuk bereksplorasi seluas dan sebebas mungkin di lingkungan
                    sekitarnya. Anak perlu dilatih untuk mandiri sejak dini dan belajar bertanggung jawab.
                </p>
            </section>

            <section id="visi" className="my-5">
                <h2 className="text-5xl font-bold text-center">Visi</h2>
                <p className="my-5">Berusaha merenas jalan membentuk sistem pembinaan terPADU diluar Sekolah yang
                    berkualitas tapi
                    "MERAKYAT".</p>
            </section>

            <section id="misi" className="my-5">
                <h2 className="text-5xl font-bold text-center">Misi</h2>
                <ul className="list-inside list-disc">
                    <li className="my-3">Memberikan kemampuan kepada anak-anak didik berupa ilmu dan keterampilan dasar
                        aplikasi
                        sehari-hari dalam membingkai akhlakul karimah.
                    </li>
                    <li className="my-3">Menyatukan kemampuan, keterampilan dan sikap islami sehingga anak didik dapat
                        timuh dan
                        berkembang potensi fitrahnya kearah terbentuknya insan yang bertakwa dan intelektual.
                    </li>
                    <li className="my-3">Membina dan membentuk anak-anak didik menjadi pribadi muslim yang berakhlak
                        mulia, akal yang
                        cerdas, fisik yang sehat dan kuat serta cinta kepada Allah dan Rosul-Nya, kepada orang tua dan
                        cinta kepada sesama.
                    </li>
                </ul>
            </section>

            <section>
                <div className="mx-auto my-10">
                    <h2 className="text-5xl font-bold text-center">Guru Terbaik Kami</h2>
                    <p className="my-5"></p>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} customClasses={"aspect-[3/4]"}
                                   customBasis="basis-[80%] md:basis-[calc(100%/5)]"/>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
  