import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";
import AutoEnquiryTrigger from "@/shared/AutoenquiryTrigger";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    brand: string;
  }>;
};

export default function BrandLayout({ children }: Props) {
  return (
    <>
      <EnquiryModalProvider>
        {children}

        <EnquiryModal />

        <AutoEnquiryTrigger delay={5000} />
      </EnquiryModalProvider>
    </>
  );
}
