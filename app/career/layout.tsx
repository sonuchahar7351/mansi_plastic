import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers at Mansi Plastic | Join Our Team in Hyderabad",
  description:
    "Explore career opportunities at Mansi Plastic, a leading water tank manufacturer in Hyderabad. Current openings in manufacturing, quality, sales & logistics. Competitive salary, health benefits & growth opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <EnquiryModalProvider>
        {children}
        <EnquiryModal />
      </EnquiryModalProvider>
      <Footer />
    </>
  );
}
