import { MapPin, User } from 'lucide-react';
import officeImage from '@/assets/commercial-glass.jpg';

export const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={officeImage}
          alt="Commercial glass installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Sydney Metro */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Sydney Metro</h3>
            <p className="text-white/80 leading-relaxed">
              Anywhere, anytime. We come to you as soon as possible across the entire 
              Sydney metropolitan area. No location is too far.
            </p>
          </div>

          {/* Owner Operator */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Owner Operator</h3>
            <p className="text-white/80 leading-relaxed">
              Your business is our business. No job is too big or too small. 
              Personal attention and quality guaranteed on every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
