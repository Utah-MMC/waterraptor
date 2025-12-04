import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Droplets, Leaf, Fish, Waves } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Aquatic Management Services | Comprehensive Water Body Management | WaterRaptor.com',
  description: 'Expert aquatic management services for ponds, lakes, and water features. Comprehensive solutions for vegetation control, water quality, and ecosystem health.',
  keywords: 'aquatic management, aquatic services, water body management, pond management, aquatic ecosystem, Utah aquatic services',
  openGraph: {
    title: 'Aquatic Management Services | WaterRaptor.com',
    description: 'Comprehensive aquatic management for all types of water bodies.',
    url: 'https://waterraptor.com/aquatic-management',
  },
};

export default function AquaticManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Comprehensive Aquatic Solutions</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Aquatic Management Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete aquatic management solutions for ponds, lakes, and water features. 
            Our expert team provides comprehensive care for all aspects of your aquatic ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Aquatic management services"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Complete Aquatic Ecosystem Care</h2>
            <p className="text-lg text-muted-foreground">
              Aquatic management requires a holistic approach that considers water quality, 
              vegetation, wildlife, and the overall ecosystem balance. Our services address 
              every aspect of aquatic health.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Integrated ecosystem management</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Balanced approach to vegetation and wildlife</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Customized solutions for each water body</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Long-term sustainability focus</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Aquatic Management Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Droplets className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Water Quality Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Maintaining optimal water chemistry and clarity for healthy aquatic life.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Vegetation Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Strategic management of aquatic plants for ecosystem balance.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Fish className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Wildlife Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Supporting healthy fish populations and aquatic wildlife.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Ecosystem Restoration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Restoring and maintaining natural aquatic ecosystem balance.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Professional Aquatic Management</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Expert Knowledge</h3>
            <p>Years of experience managing diverse aquatic ecosystems and solving complex problems.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Advanced Equipment</h3>
            <p>Professional-grade Truxor equipment for efficient and effective aquatic management.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Proven Results</h3>
            <p>Track record of successful aquatic management projects across the region.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Your Aquatic Management Consultation</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

