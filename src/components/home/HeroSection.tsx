import { Phone, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-glass-building.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern glass building architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center py-32">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
            Modern Solutions,
            <br />
            <span className="text-forest-light">Flawless Finishes</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Sydney's trusted experts in glass repair, replacement, and custom installations. 
            Available 24/7 for emergencies.
          </p>

          <Button
            asChild
            size="lg"
            className="btn-primary text-lg px-10 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <a href="tel:0400000000" className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              CALL NOW
            </a>
          </Button>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[250px]">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-foreground">24/7 Repair</h3>
              <p className="text-sm text-muted-foreground">Emergency response anytime</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[250px]">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-foreground">High Quality</h3>
              <p className="text-sm text-muted-foreground">Premium materials & craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
