import { Layout } from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import officeImage from '@/assets/commercial-glass.jpg';
import residentialImage from '@/assets/residential-glass.jpg';

const serviceCategories = [
  {
    id: 'emergency',
    title: 'Emergency Glass Repair & Replacement',
    content: [
      '24/7 rapid response service for urgent glass needs',
      'Shattered windows and broken doors',
      'Damaged shopfronts and storefronts',
      'Same-day service when possible',
      'Secure temporary boarding if needed',
    ],
  },
  {
    id: 'residential',
    title: 'Residential Glass Services',
    content: [
      'Window glass repair and replacement (timber, aluminium, uPVC frames)',
      'Sliding door glass replacement',
      'French door glass replacement',
      'Shower screens (frameless, semi-frameless, framed)',
      'Balustrade glass installation',
      'Custom-cut glass for tabletops, shelves, mirrors',
      'Pet door installation',
    ],
  },
  {
    id: 'safety',
    title: 'Safety & Security Glass',
    content: [
      'Laminated glass for security and noise reduction',
      'Toughened/tempered glass for impact resistance',
      'Safety glass compliance upgrades',
      'Security window installations',
      'Grade A safety glass solutions',
    ],
  },
  {
    id: 'aluminium',
    title: 'Aluminium Door & Window Repair',
    content: [
      'Aluminium frame repair and restoration',
      'Replacement of old or inefficient units',
      'Sliding door adjustment and lubrication',
      'Lock and handle replacements',
      'Weather seal replacement',
      'Full window system upgrades',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Glass & Shopfront Services',
    content: [
      'Shopfront glass repair and replacement',
      'Office partition glass installation',
      'Safety and security installations for businesses',
      'Door closer adjustments and replacements',
      'Glass entry systems',
      'Commercial glazing solutions',
    ],
  },
  {
    id: 'custom',
    title: 'Custom Glass Solutions',
    content: [
      'Custom-cut and fabricated glass for unique projects',
      'Architectural glass features',
      'Glass splashbacks for kitchens',
      'Decorative glass panels',
      'Glass pool fencing',
      'Bespoke mirror installations',
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Comprehensive glass and aluminium solutions for residential and commercial properties across Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            {serviceCategories.map((category) => (
              <AccordionItem key={category.id} value={category.id} className="border-b border-border">
                <AccordionTrigger className="text-lg md:text-xl font-semibold text-foreground hover:text-primary py-6">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="space-y-3">
                    {category.content.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-smoke">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={officeImage}
                alt="Commercial office glass installation"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Commercial Installations</h3>
                <p className="text-sm text-muted-foreground">Office partitions & shopfronts</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={residentialImage}
                alt="Residential glass installation"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Residential Solutions</h3>
                <p className="text-sm text-muted-foreground">Windows, doors & shower screens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on any of our services. We're here to help 24/7.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="gap-2 px-8"
          >
            <a href="tel:0400000000">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
