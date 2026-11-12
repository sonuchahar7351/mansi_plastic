import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductPage from "@/components/ProductDetail/ProductDetail";

export default function Home({ params }: { params: { id: string } }) {
  const productId = params.id;
  return (
    <>
      <Header isVisible={true} />
      <ProductPage productId={productId} />
      <Footer />
    </>
  );
}
