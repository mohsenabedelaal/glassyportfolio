import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">
                  Glassology
                </span>
                <span className="text-xs font-medium text-white/60">
                  Sydney
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm max-w-md">
              Modern Solutions, Flawless Finishes. Your trusted partner for all glass and aluminium services across Sydney Metro.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@glassologysydney.com.au"
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@glassologysydney.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:0400000000"
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  0400 000 000
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/glassologysydney"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Follow Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} Glassology Sydney. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
