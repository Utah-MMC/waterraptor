import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const serviceLinks = [
    { href: '/lake-services', label: 'Lake Services' },
    { href: '/lake-management', label: 'Lake & Pond Management' },
    { href: '/harvesting', label: 'Harvesting with The Water Raptor' },
    { href: '/invasive-aquatic-plants', label: 'Invasive Aquatic Plants' },
    { href: '/aquatic-herbicide', label: 'Aquatic Herbicide Support' },
    { href: '/dredge-operations', label: 'Dredge Operations' },
    { href: '/river-canal-management', label: 'River & Canal Management' },
    { href: '/water-raptor', label: 'Water Raptor Equipment' },
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/resources', label: 'Resources' },
    { href: '/blog', label: 'Blog & Stories' },
    { href: '/#contact-form', label: 'Contact' },
    { href: '/lake-services', label: 'All Services' },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/70 text-slate-300 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">WaterRaptor.com</h3>
            <p className="text-sm text-slate-400">
              The Water Raptor amphibious machine harvesting ponds, lakes, rivers, and canals. Clean weeds, move muck, and stage herbicide work without barges.
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">Regional operations</p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Services & focus</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Learn more</h3>
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

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-300" />
                <span>(801) 590-8516</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-300" />
                <Link href="mailto:info@waterraptor.com" className="hover:text-white">
                  info@waterraptor.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-300" />
                <span>Utah + regional mobilization</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} WaterRaptor.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
