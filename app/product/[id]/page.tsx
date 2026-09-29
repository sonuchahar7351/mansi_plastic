import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";

export default function Home({ params }: { params: { id: string } }) {
  const productId = params.id;
  return (
    <>
      <Header isVisible={true} />
      <ProductDetail productId={productId} />
      <Footer />
    </>
  );
}
