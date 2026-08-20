import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";

export default function Home({
  params,
}: {
  params: { brand?: string; id: string };
}) {
  const productId = params.id;
  const brand = params?.brand || "mansi-plastic";
  return (
    <>
      <Header isVisible={true} />
      <ProductDetail productId={productId} brand={brand} />
      <Footer />
    </>
  );
}
