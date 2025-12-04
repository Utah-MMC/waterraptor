import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Droplets, Fish, Leaf, Waves } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Aquatic Services | Professional Water Body Services | WaterRaptor.com',
  description: 'Comprehensive aquatic services for ponds, lakes, and water features. Expert solutions for all types of water bodies and aquatic ecosystems.',
  keywords: 'aquatic services, aquatic management, water body services, pond services, lake services, aquatic ecosystem services, Utah aquatic services',
  openGraph: {
    title: 'Aquatic Services | WaterRaptor.com',
    description: 'Comprehensive aquatic services for all types of water bodies.',
    url: 'https://waterraptor.com/aquatic-services',
  },
};

export default function AquaticServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Complete Aquatic Solutions</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Aquatic Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive aquatic services for ponds, lakes, and all types of water features. 
            Our expert team provides complete care for aquatic ecosystems using professional 
            equipment and proven methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Complete Aquatic Ecosystem Care</h2>
            <p className="text-lg text-muted-foreground">
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

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Aquatic Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Droplets className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Water Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comprehensive water quality and treatment services.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Vegetation Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquatic plant control and management solutions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Fish className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Wildlife Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Habitat management for fish and aquatic wildlife.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Ecosystem Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Holistic ecosystem management and restoration.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Your Aquatic Services Consultation</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

