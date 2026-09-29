import { EnquiryModalProvider } from "@/context/EnquiryForm";
import EnquiryModal from "@/shared/EnquiryModal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mansi Plastic – Water Tank Brands",
  description:
    "AASHIRWAD, DURALEX, NANDHI PLUS and SUNRISE water tanks from Mansi Plastic, made from LLDPE virgin material.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EnquiryModalProvider>
        {children}
        <EnquiryModal />
      </EnquiryModalProvider>
    </>
  );
}
