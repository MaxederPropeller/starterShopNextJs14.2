import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ShopSection from "@/components/ShopSection";
// import InfinityCarousel  from "@/components/infitySlider";

export default function Home() {
  return (
<>
    <HeroSection />
    <ShopSection />
    {/* <InfinityCarousel items={["1", "2", "3", "4", "5"]} /> */}
    <ContactSection />
</>
  );
}
