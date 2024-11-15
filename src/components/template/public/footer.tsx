import { APP_NAME } from "@/app/constant/const";

const FooterComponent = () => {
  return (
    <>
      <div className="border-t p-5">
        <div className="flex items-center justify-center">{APP_NAME}</div>
      </div>
    </>
  );
};

export default FooterComponent;
