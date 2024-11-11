export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-10 h-screen">
        {children}
      </div>
    </>
  );
}
