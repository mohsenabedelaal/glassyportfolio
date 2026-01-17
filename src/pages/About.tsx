import { Layout } from '@/components/layout/Layout';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    title: 'Clarity',
    description: 'Transparent communication and honest pricing. No hidden costs, no surprises.',
  },
  {
    title: 'Integrity',
    description: 'We stand behind our work with quality craftsmanship and reliable service.',
  },
  {
    title: 'Community',
    description: 'Building lasting relationships with our Sydney neighbours and local businesses.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Sydney's trusted glass and aluminium specialists since day one.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Glassology Sydney was founded with a simple mission: to provide Sydney homeowners 
                and businesses with exceptional glass services, delivered with integrity and care.
              </p>
              <p>
                Based in Menai, NSW, we've built our reputation on quality workmanship, transparent 
                pricing, and genuine customer service. As an owner-operated business, we take 
                personal pride in every project we complete.
              </p>
              <p>
                From emergency repairs at any hour to custom installations that transform spaces, 
                we bring the same level of dedication to every job. No project is too big or too 
                small – your glass needs are our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-smoke">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-card text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Serving All of Sydney Metro
            </h2>
            <p className="text-muted-foreground mb-8">
              From the Northern Beaches to the Sutherland Shire, from the Inner West to Western 
              Sydney – we bring our expertise directly to you. No location is too far for quality 
              glass service.
            </p>
            <Button asChild size="lg" className="btn-primary gap-2">
              <a href="tel:0400000000">
                <Phone className="h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
