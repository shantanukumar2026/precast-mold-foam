import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import MegaShowcase from "@/components/MegaShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import EngineeringAdvantages from "@/components/EngineeringAdvantages";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import ProductExplorer from "@/components/ProductExplorer";
import Industries from "@/components/Industries";
import FacilityGallery from "@/components/FacilityGallery";
import SupplyMap from "@/components/SupplyMap";
import DownloadCenter from "@/components/DownloadCenter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <MegaShowcase />
        <ProcessTimeline />
        <EngineeringAdvantages />
        <ManufacturingProcess />
        <ProductExplorer />
        <Industries />
        <FacilityGallery />
        <SupplyMap />
        <DownloadCenter />
      </main>
      <Footer />
    </>
  );
}
