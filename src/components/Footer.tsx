import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const serviceLinks = [
    { href: '/lake-management', label: 'Lake Management' },
    { href: '/lake-maintenance', label: 'Lake Maintenance' },
    { href: '/aquatic-management', label: 'Aquatic Management' },
    { href: '/lake-restoration', label: 'Lake Restoration' },
    { href: '/water-management', label: 'Water Management' },
    { href: '/lake-weed-control', label: 'Lake Weed Control' },
    { href: '/lake-cleanup', label: 'Lake Cleanup' },
    { href: '/aquatic-vegetation-management', label: 'Vegetation Management' },
    { href: '/lake-dredging', label: 'Lake Dredging' },
    { href: '/water-quality-management', label: 'Water Quality Management' },
    { href: '/lake-services', label: 'Lake Services' },
    { href: '/aquatic-services', label: 'Aquatic Services' },
    { href: '/utah-lake-services', label: 'Utah Lake Services' },
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/truxor-t50', label: 'Truxor T50 Equipment' },
    { href: '/cities', label: 'Service Areas' },
    { href: '/lake-services', label: 'All Services' },
    { href: '/#contact-form', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">WaterRaptor.com</h3>
            <p className="text-sm mb-4">
              Professional pond cleanup and lake weed removal services in Utah. 
              Expert aquatic vegetation control using Truxor T50 equipment.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/truxor-t50" className="hover:text-white transition-colors">
                  Truxor T50 Equipment
                </Link>
              </li>
              <li>
                <Link href="/lake-services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (801) 555-0123</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@waterraptor.com" className="hover:text-white transition-colors">
                  info@waterraptor.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Service Area: Utah Statewide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} WaterRaptor.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

