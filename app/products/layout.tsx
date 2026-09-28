import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sitemap | Mansi Plastic",
  description:
    "Browse the Mansi Plastic website sitemap to find water storage tanks, product information, company details, and contact information.",
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
