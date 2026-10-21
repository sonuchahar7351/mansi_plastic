import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import EnquiryModal from "@/shared/EnquiryModal";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";

import { Poppins } from "next/font/google";
import WhatsAppFloat from "@/components/Whatsappfloat";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Water Tank Manufacturers in Hyderabad | Mansi Plastic",
  description:
    "Mansi Plastic is a trusted water tank manufacturer and supplier in Hyderabad, offering durable plastic water storage tanks for residential, commercial, and agricultural applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased text-body bg-white`}>
        <EnquiryModalProvider>
          {children}
          <EnquiryModal />
          <AutoEnquiryTrigger delay={5000} />
          <WhatsAppFloat />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
