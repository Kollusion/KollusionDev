import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import StackSection from "@/components/sections/StackSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <>
            <main className="space-y-4">
                <HeroSection />
                <PortfolioSection />
                <StackSection />
                <ServicesSection />
                <ContactSection />
            </main>
        </>
    );
}
