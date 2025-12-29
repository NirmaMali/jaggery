import { Leaf, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Made from pure sugarcane juice without any chemicals or additives"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Rich in iron, minerals, and antioxidants for your well-being"
    },
    {
      icon: Sparkles,
      title: "Traditional Process",
      description: "Handcrafted using age-old methods passed down through generations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary pattern-indian">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pure Goodness from
            <span className="text-primary"> Indian Farms</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            For generations, our family has been crafting the finest quality jaggery using traditional methods. 
            We believe in preserving the authentic taste and nutritional value that makes Indian jaggery truly special.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-warm p-8 rounded-2xl hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
