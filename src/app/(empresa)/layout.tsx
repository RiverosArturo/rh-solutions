import { Footer, Navbar, WhatsAppButton } from "@/components";


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
            <WhatsAppButton />
        </div>
      <Footer />
    </main>
  );
}