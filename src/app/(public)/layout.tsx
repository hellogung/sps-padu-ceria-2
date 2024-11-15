import FooterComponent from "@/components/template/public/footer";
import HeaderComponents from "@/components/template/public/header";
import PageAnimatePresenceComponent from "@/components/framer-motion/page-animate-presence";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderComponents />
      <div className="container px-5 md:px-20 py-5 min-h-screen">
        <PageAnimatePresenceComponent>{children}</PageAnimatePresenceComponent>
      </div>
      <FooterComponent />
    </>
  );
}
