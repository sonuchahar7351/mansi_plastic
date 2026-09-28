import EnquiryModal from "@/shared/EnquiryModal";
import { EnquiryModalProvider } from "@/context/EnquiryForm";

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
      </EnquiryModalProvider>
    </>
  );
}
