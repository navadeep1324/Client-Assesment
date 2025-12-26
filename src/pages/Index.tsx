import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Clients from "@/components/Clients";
import Solutions from "@/components/Solutions";
import VideoSection from "@/components/VideoSection";
import OurClients from "@/components/OurClients";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <VideoSection />

        <Stats />
        <Features />
        <Clients />
        <Solutions />
        <OurClients />
        {/* <CTA /> */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
