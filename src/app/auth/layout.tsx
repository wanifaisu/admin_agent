export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen w-screen bg-[#ffffff99] overflow-y-hidden overflow-x-hidden sm:py-20 relative">
      <div className="w-full h-full sm:flex items-center justify-center">
        <div className="bg-[#D2D7D3] shadow-lg h-fit rounded-none w-[30%] sm:rounded-[40px] 2xl:pl-[5.313rem]  px-5 sm:px-10 py-8">
          {children}
        </div>
      </div>
    </section>
  );
}
