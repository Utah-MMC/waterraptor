import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, TestTube, Filter, Droplets, Shield } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Water Quality Management | Professional Water Testing & Treatment | WaterRaptor.com',
  description: 'Expert water quality management services including testing, treatment, and monitoring. Maintain optimal water quality for healthy lakes and ponds.',
  keywords: 'water quality management, water quality testing, water treatment, lake water quality, pond water quality, Utah water quality services',
  openGraph: {
    title: 'Water Quality Management | WaterRaptor.com',
    description: 'Professional water quality management for healthy water bodies.',
    url: 'https://waterraptor.com/water-quality-management',
  },
};

export default function WaterQualityManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Water Quality Solutions</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Water Quality Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive water quality management services to maintain optimal conditions for 
            your lake or pond. Regular testing, treatment, and monitoring ensure healthy water 
            for fish, wildlife, and recreational use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Water quality management"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Maintaining Optimal Water Quality</h2>
            <p className="text-lg text-muted-foreground">
              Water quality is fundamental to the health of any aquatic ecosystem. Our management 
              services include regular testing, analysis, and treatment to maintain optimal pH, 
              oxygen levels, nutrient balance, and clarity.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Regular water quality testing and analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>pH and oxygen level management</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Nutrient balance and algae control</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Customized treatment programs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Water Quality Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <TestTube className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Water Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comprehensive testing of pH, oxygen, nutrients, and other quality parameters.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Filter className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Treatment Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Customized treatment plans for algae, clarity, and nutrient balance.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Droplets className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Balance Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Maintaining optimal chemical and biological balance in your water.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Ongoing Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Regular monitoring to catch problems early and maintain quality.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Start Your Water Quality Program</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

