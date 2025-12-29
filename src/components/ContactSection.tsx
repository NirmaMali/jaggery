import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  phoneNumber: string;
}

const ContactSection = ({ phoneNumber }: ContactSectionProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I have a question about your jaggery products.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-secondary pattern-indian">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact
            <span className="text-primary"> Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Have questions? We'd love to hear from you. Reach out via WhatsApp for the fastest response!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card-warm p-6 rounded-2xl text-center hover-lift">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-whatsapp/10 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-whatsapp" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-sm">Quick & Easy Ordering</p>
            <Button 
              variant="whatsapp" 
              size="sm" 
              className="mt-4"
              onClick={handleWhatsAppClick}
            >
              Chat Now
            </Button>
          </div>

          <div className="card-warm p-6 rounded-2xl text-center hover-lift">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">+91 {phoneNumber.slice(2)}</p>
          </div>

          <div className="card-warm p-6 rounded-2xl text-center hover-lift">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Mandya, Karnataka, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
