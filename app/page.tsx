import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import OurProducts from "@/components/OurProducts";
import Testimonials from "@/components/Testimonials";
import CompanyVideo from "@/components/CompanyVideo";
import BrandsSection from "@/components/BrandsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import CompanyIntro from "@/components/CompanyIntro";
import MobileHero from "@/components/MobileHero";

export default function Home() {
  return (
    <>
      <Header isVisible={false} />
      <main>
        <div className="sm:hidden">
          <MobileHero />
        </div>
        <div className="hidden sm:block">
          <Hero />
        </div>
        <CompanyIntro />
        <About />
        <WhyChooseUs />
        <OurProducts />
        <BrandsSection />
        <Stats />
        <Testimonials />
        <CompanyVideo />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
