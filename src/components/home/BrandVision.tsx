import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BrandVision = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Clarity, Integrity, Community
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            At Glassology Sydney, we're committed to more than just glass. We believe in 
            transparent communication, honest pricing, and building lasting relationships 
            within our community. Every project, big or small, receives our full attention 
            and dedication to excellence.
          </p>
          <Button
            asChild
            size="lg"
            className="btn-primary gap-2 px-8"
          >
            <a href="tel:0400000000">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
