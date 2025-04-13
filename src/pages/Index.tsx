
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import NGOShowcase from "@/components/home/NGOShowcase";
import DonationImpact from "@/components/home/DonationImpact";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <NGOShowcase />
        <DonationImpact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
