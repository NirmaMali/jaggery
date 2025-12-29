import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsApp = ({ phoneNumber, message = "Hello! I'm interested in your jaggery products." }: FloatingWhatsAppProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="floating-whatsapp hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </button>
  );
};

export default FloatingWhatsApp;
