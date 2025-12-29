import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-jaggery.jpg";

interface HeroSectionProps {
  phoneNumber: string;
}

const HeroSection = ({ phoneNumber }: HeroSectionProps) => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your pure organic jaggery products. Please share more details.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pure organic jaggery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jaggery-dark/90 via-jaggery-dark/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl fade-in">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 text-primary-foreground rounded-full border border-primary-foreground/20 backdrop-blur-sm">
            🌿 100% Pure & Organic
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Pure Traditional
            <span className="block text-jaggery-light">Indian Jaggery</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body leading-relaxed">
            Experience the authentic taste of India with our handcrafted, chemical-free jaggery. 
            Made with traditional methods, delivering natural sweetness and health benefits to your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToProducts}
              className="bg-primary-foreground text-jaggery-dark hover:bg-primary-foreground/90"
            >
              View Products
            </Button>
            <Button 
              variant="whatsapp" 
              size="xl"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-6 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-whatsapp"></span>
              Free Delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-whatsapp"></span>
              No Chemicals
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-whatsapp"></span>
              Farm Fresh
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
