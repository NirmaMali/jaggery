interface FooterProps {
  phoneNumber: string;
}

const Footer = ({ phoneNumber }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jaggery-dark text-primary-foreground py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍯</span>
              <span className="font-display text-2xl font-bold">
                Shudh<span className="text-jaggery-light">Gur</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Bringing the authentic taste of pure, organic jaggery directly from Indian farms to your home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>📱 +91 {phoneNumber.slice(2)}</li>
              <li>📍 Mandya, Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
          <p>© {currentYear} ShudhGur. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ for pure, natural sweetness</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
