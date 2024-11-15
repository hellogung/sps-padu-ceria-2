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
      <div className="container min-h-screen pt-20">
        <PageAnimatePresenceComponent>{children}</PageAnimatePresenceComponent>
      </div>
      <FooterComponent />
    </>
  );
}
