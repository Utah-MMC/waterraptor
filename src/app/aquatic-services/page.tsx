import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Droplets, Fish, Leaf, Waves } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Aquatic Services | WaterRaptor.com',
  description: 'Comprehensive aquatic services for ponds, lakes, and water features using The Water Raptor. Expert solutions including harvesting, dredging, weed control, water quality management, and maintenance for all types of water bodies and aquatic ecosystems. Serving Utah with professional aquatic management.',
  keywords: 'aquatic services, aquatic management, water body services, pond services, lake services, aquatic ecosystem services, Utah aquatic services',
  openGraph: {
    title: 'Aquatic Services | WaterRaptor.com',
    description: 'Comprehensive aquatic services for ponds, lakes, and water features using The Water Raptor. Expert solutions for all types of water bodies.',
    url: 'https://waterraptor.com/aquatic-services',
    type: 'website',
    images: [
      {
        url: 'https://waterraptor.com/images/image004.jpg',
        width: 1200,
        height: 630,
        alt: 'Aquatic services for ponds and lakes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aquatic Services | WaterRaptor.com',
    description: 'Comprehensive aquatic services for ponds, lakes, and water features.',
  },
};

export default function AquaticServicesPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Complete Aquatic Solutions</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Aquatic Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive aquatic services for ponds, lakes, and all types of water features. 
            Our expert team provides complete care for aquatic ecosystems using professional 
            equipment and proven methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Complete Aquatic Ecosystem Care</h2>
            <p className="text-lg text-slate-300">
              Our aquatic services address all aspects of water body health, from water quality 
              to vegetation management to wildlife support. We provide holistic solutions that 
              maintain ecosystem balance and long-term sustainability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Water quality management and treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Aquatic vegetation control and management</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Wildlife and fish habitat support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Ecosystem restoration and maintenance</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Aquatic services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-slate-900/60 border border-white/10">
        <h2 className="text-4xl font-bold text-center mb-12">Our Aquatic Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
              <img src="/images/graphics/clawssss.svg" alt="Water Raptor trademark" className="w-3/4 h-3/4 object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <Droplets className="h-10 w-10 text-blue-600 mb-4" />
              <div className="flex items-center gap-2">
                <img src="/images/graphics/clawssss.svg" alt="Water Raptor claw" className="w-5 h-5 opacity-80" style={{ filter: 'invert(1)' }} />
                <CardTitle>Water Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p>Comprehensive water quality and treatment services.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
              <img src="/images/graphics/clawssss.svg" alt="Water Raptor trademark" className="w-3/4 h-3/4 object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <div className="flex items-center gap-2">
                <img src="/images/graphics/clawssss.svg" alt="Water Raptor claw" className="w-5 h-5 opacity-80" style={{ filter: 'invert(1)' }} />
                <CardTitle>Vegetation Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p>Aquatic plant control and management solutions.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
              <img src="/images/graphics/clawssss.svg" alt="Water Raptor trademark" className="w-3/4 h-3/4 object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <Fish className="h-10 w-10 text-purple-600 mb-4" />
              <div className="flex items-center gap-2">
                <img src="/images/graphics/clawssss.svg" alt="Water Raptor claw" className="w-5 h-5 opacity-80" style={{ filter: 'invert(1)' }} />
                <CardTitle>Wildlife Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p>Habitat management for fish and aquatic wildlife.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
              <img src="/images/graphics/clawssss.svg" alt="Water Raptor trademark" className="w-3/4 h-3/4 object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <Waves className="h-10 w-10 text-teal-600 mb-4" />
              <div className="flex items-center gap-2">
                <img src="/images/graphics/clawssss.svg" alt="Water Raptor claw" className="w-5 h-5 opacity-80" style={{ filter: 'invert(1)' }} />
                <CardTitle>Ecosystem Care</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p>Holistic ecosystem management and restoration.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-slate-900/60 border border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Your Aquatic Services Consultation</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
