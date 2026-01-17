import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  Home, 
  Shield, 
  DoorOpen, 
  Building2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: AlertTriangle,
    title: 'Emergency Glass Repair & Replacement',
    description: 'Rapid 24/7 response for shattered windows, broken doors, and damaged shopfronts.',
  },
  {
    icon: Home,
    title: 'Residential Glass Services',
    description: 'Complete home glass solutions including windows, doors, shower screens, and mirrors.',
  },
  {
    icon: Shield,
    title: 'Safety & Security Glass',
    description: 'Laminated and toughened glass for enhanced protection and peace of mind.',
  },
  {
    icon: DoorOpen,
    title: 'Aluminium Door & Window Repair',
    description: 'Expert repairs and replacements for all aluminium frame types.',
  },
  {
    icon: Building2,
    title: 'Commercial Glass & Shopfront Services',
    description: 'Professional solutions for offices, retail spaces, and commercial buildings.',
  },
  {
    icon: Sparkles,
    title: 'Custom Glass Solutions',
    description: 'Bespoke glass fabrication for unique projects and architectural features.',
  },
];

export const ServicesOverview = () => {
  return (
    <section className="section-padding bg-smoke">
      <div className="container-custom">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Based in Menai, NSW, Glassology Sydney provides comprehensive glass and aluminium 
            services across the greater Sydney metropolitan area. From emergency repairs to 
            custom installations, we deliver quality craftsmanship with every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="btn-outline-primary gap-2">
            <Link to="/services">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
