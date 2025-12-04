import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Droplets, TestTube, Filter, Waves } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Water Management Services | Comprehensive Water Quality Management | WaterRaptor.com',
  description: 'Professional water management services for lakes, ponds, and water features. Expert solutions for water quality, treatment, and sustainable water management.',
  keywords: 'water management, water quality management, water treatment, aquatic water management, sustainable water management, Utah water services',
  openGraph: {
    title: 'Water Management Services | WaterRaptor.com',
    description: 'Comprehensive water management solutions for optimal water quality and sustainability.',
    url: 'https://waterraptor.com/water-management',
  },
};

export default function WaterManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Water Quality & Management</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Water Management Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive water management solutions to maintain optimal water quality, balance 
            nutrients, and ensure the long-term health of your water body.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Water management services"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Comprehensive Water Quality Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Effective water management requires understanding the complex interactions between 
              water chemistry, biology, and the environment. Our services address all aspects 
              of water quality and sustainability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Regular water quality testing and analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Nutrient balance and algae control</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>pH and oxygen level management</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Sustainable long-term water management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Water Management Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <TestTube className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Water Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Regular analysis of water chemistry, nutrients, and quality parameters.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Filter className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Treatment Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Customized treatment plans for algae, nutrients, and water clarity.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Droplets className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Balance Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Maintaining optimal pH, oxygen, and nutrient levels.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Sustainability Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Long-term strategies for sustainable water management.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Your Water Management Assessment</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

