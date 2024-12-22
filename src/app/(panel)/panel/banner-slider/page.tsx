import { APP_NAME } from "@/constant/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Banner Slider | ${APP_NAME}`,
};

const BannerSliderPage = () => {
    return ( 
        <>
            <h1 className="text-5xl">Banner Slider Page</h1>
            <p>Ini adalah Banner Slider Page</p>
        </>
     );
}
 
export default BannerSliderPage;