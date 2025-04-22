import { Footer, Navbar } from "@/components";


export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
        <div>
            {children}
        </div>
      <Footer />
    </main>
  );
}