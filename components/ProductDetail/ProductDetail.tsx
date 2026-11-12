import { ProductItem } from "@/types";
import FeaturesTable from "./FeaturesTable";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import { products } from "@/lib/data";
import CategoryProductList from "./CategoryProductList";
import AdditionalInfo from "./ProductAdditionalDetail";
import WaterTankDimension from "./WaterTankDimension";
import ProductEnquiryForm from "./ProductEnquiryForm";
import KeyFeatures from "./KeyFeatures";
import ProductColors from "./ProductColors";
import LayersBifurcation from "./LayersBifurcation";

export default function ProductPage({ productId }: { productId: string }) {
  const product: ProductItem | undefined = products.find(
    (p) => p.id === productId,
  );
  if (!product) {
    return null;
  }
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductGallery
          images={product.banners || []}
          mainAlt={product.title}
        />
        <ProductInfo product={product} />
      </div>

      <div className="mt-12">
        <ProductTabs
          panels={{
            description: <FeaturesTable product={product} />,
            features: <KeyFeatures product={product} />,
            colours: <ProductColors product={product} />,
            layers: <LayersBifurcation product={product} />,
            additional: <AdditionalInfo product={product} />,
            dimension: <WaterTankDimension product={product} />,
            enquiry: <ProductEnquiryForm />,
          }}
        />
      </div>

      <CategoryProductList productId={productId} />
    </div>
  );
}
