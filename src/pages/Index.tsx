import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// IMPORTANT: Replace with your actual WhatsApp number (with country code, no + or spaces)
// Example: For +91 98765 43210, use "919876543210"
const WHATSAPP_NUMBER = "919876543210";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ShudhGur - Pure Organic Jaggery | Traditional Indian Sweetener</title>
        <meta 
          name="description" 
          content="Buy pure, organic jaggery (gur) directly from Indian farms. 100% natural, chemical-free traditional sweetener. Order via WhatsApp for home delivery." 
        />
        <meta name="keywords" content="jaggery, gur, organic jaggery, natural sweetener, Indian jaggery, pure gur, buy jaggery online" />
        <link rel="canonical" href="https://shudhgur.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection phoneNumber={WHATSAPP_NUMBER} />
          <AboutSection />
          <ProductsSection phoneNumber={WHATSAPP_NUMBER} />
          <ContactSection phoneNumber={WHATSAPP_NUMBER} />
        </main>
        <Footer phoneNumber={WHATSAPP_NUMBER} />
        <FloatingWhatsApp phoneNumber={WHATSAPP_NUMBER} />
      </div>
    </>
  );
};

export default Index;
