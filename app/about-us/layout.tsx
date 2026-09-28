import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Mansi Plastic | Trusted Water Tank Manufacturer",
  description:
    "Learn about Mansi Plastic, a trusted manufacturer and supplier of durable plastic water storage tanks, committed to quality, innovation, and reliable water storage solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header isVisible={true} />
      <EnquiryModalProvider>
        {children}
        <EnquiryModal />
      </EnquiryModalProvider>
      <Footer />
    </>
  );
}
