import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag, Minus, Plus } from "lucide-react";
import { useState } from "react";
import jaggeryBlock from "@/assets/jaggery-block.jpg";
import jaggeryPowder from "@/assets/jaggery-powder.jpg";
import jaggeryCubes from "@/assets/jaggery-cubes.jpg";

interface Product {
  id: number;
  name: string;
  nameHindi: string;
  description: string;
  price: number;
  unit: string;
  image: string;
}

interface ProductsSectionProps {
  phoneNumber: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Organic Jaggery Block",
    nameHindi: "देसी गुड़",
    description: "Traditional round jaggery block, perfect for cooking sweets and daily use",
    price: 120,
    unit: "500g",
    image: jaggeryBlock
  },
  {
    id: 2,
    name: "Jaggery Powder",
    nameHindi: "गुड़ पाउडर",
    description: "Fine jaggery powder, ideal for tea, milk, and quick dissolving recipes",
    price: 140,
    unit: "500g",
    image: jaggeryPowder
  },
  {
    id: 3,
    name: "Jaggery Cubes",
    nameHindi: "गुड़ के टुकड़े",
    description: "Convenient bite-sized cubes for snacking and portion control",
    price: 160,
    unit: "500g",
    image: jaggeryCubes
  }
];

const ProductsSection = ({ phoneNumber }: ProductsSectionProps) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1,
    2: 1,
    3: 1
  });

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta)
    }));
  };

  const handleBuyNow = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    const totalPrice = product.price * quantity;
    const message = `🛒 *New Order*\n\n📦 Product: ${product.name} (${product.nameHindi})\n📊 Quantity: ${quantity} x ${product.unit}\n💰 Total: ₹${totalPrice}\n\nPlease confirm my order. Thank you!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Quality
            <span className="text-primary"> Jaggery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Choose from our range of pure, organic jaggery products. Order directly via WhatsApp!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="card-warm rounded-2xl overflow-hidden hover-lift fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <span className="text-primary font-medium">{product.nameHindi}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-foreground">₹{product.price}</span>
                    <span className="text-muted-foreground text-sm">/{product.unit}</span>
                  </div>
                  
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-3 bg-secondary rounded-lg p-1">
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      className="w-8 h-8 rounded-md flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium text-foreground">
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-8 h-8 rounded-md flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full"
                  onClick={() => handleBuyNow(product)}
                >
                  <ShoppingBag className="w-5 h-5" />
                  Buy Now - ₹{product.price * (quantities[product.id] || 1)}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Order CTA */}
        <div className="mt-16 text-center p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
            Need Bulk Orders?
          </h3>
          <p className="text-muted-foreground mb-6">
            Contact us for wholesale pricing and bulk quantity discounts
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const message = encodeURIComponent("Hello! I'm interested in bulk/wholesale orders for jaggery. Please share the pricing details.");
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Enquire for Bulk Orders
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
