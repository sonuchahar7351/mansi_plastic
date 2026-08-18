"use client";

import Image from "next/image";
import CustomCarousel from "../shared/bannerCarousel";
import { products } from "@/lib/data";
import { ProductItem } from "@/types";
import { useEnquiryModal } from "@/context/EnquiryForm";
import Breadcrumb from "@/shared/Breadcrumb";
import { notFound } from "next/navigation";

const ProductDetail = ({ productId }: { productId: string }) => {
  const product: ProductItem | undefined = products.find(
    (p) => p.id === productId,
  );

  const { openModal } = useEnquiryModal();

  if (!product) {
    return notFound();
  }

  return (
    <div className="pt-20">
      <div className="relative w-full min-h-[600px] overflow-hidden">
        <div className="block md:hidden">
          <Image
            src={
              product.mobileFeaturesBanner ||
              product.featuresBanner ||
              product.image
            }
            alt=""
            width={1080}
            height={1400}
            priority
            sizes="100vw"
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="hidden md:block">
          <Image
            src={product.featuresBanner || product.image}
            alt=""
            width={1800}
            height={1080}
            priority
            sizes="100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
      <div className="container-page grid grid-cols-1 md:grid-cols-3 my-8 gap-4">
        <div className="col-span-2 space-y-3">
          <h2 className="text-2xl font-bold text-primary">{product.title}</h2>
          <p className="text-lg">{product.description}</p>
          <div className="rounded-xl border py-4 px-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Water Storage Tanks</h2>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Available Layers</h3>
              <div className="flex flex-wrap gap-2">
                {["Double Layer", "Triple Layer", "Four Layer"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-gray-100 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Capacity Range</h3>
              <div className="flex flex-wrap gap-2">
                {product?.CapiblityRange?.map((capacity) => (
                  <span
                    key={capacity}
                    className="px-3 py-1 rounded-md border text-sm"
                  >
                    {capacity}
                  </span>
                ))}
              </div>
            </div>

            {product?.category && (
              <p className="text-gray-600">{product?.category}</p>
            )}
          </div>
        </div>
        <div>
          <CustomCarousel
            items={product.banners || []}
            className="w-full h-[400px]"
            showArrows={false}
            showDots={false}
            showThumbnails={true}
            showCounter={false}
            autoPlay={true}
            autoPlayInterval={5000}
            height={300}
            aspectRatio="16/9"
          />
        </div>
      </div>
      <div className="container-page my-8 flex items-center justify-between gap-4 text-center border border-red-500 p-4">
        <p className="text-lg font-semibold">Know More About This Product</p>
        <button
          onClick={() => openModal(product.title)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
