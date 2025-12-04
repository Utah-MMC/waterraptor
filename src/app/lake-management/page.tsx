import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Waves, Settings, Shield, TrendingUp, Clock } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Professional Lake Management Services | WaterRaptor.com',
  description: 'Comprehensive lake management services including water quality monitoring, aquatic vegetation control, and ecosystem maintenance. Expert lake management solutions for Utah.',
  keywords: 'lake management, lake maintenance, aquatic management, water quality management, lake services, Utah lake management',
  openGraph: {
    title: 'Professional Lake Management Services | WaterRaptor.com',
    description: 'Expert lake management services for optimal water quality and ecosystem health.',
    url: 'https://waterraptor.com/lake-management',
  },
};

export default function LakeManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Professional Lake Management</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Comprehensive Lake Management Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert lake management solutions to maintain optimal water quality, control aquatic vegetation, 
            and preserve ecosystem health for lakes throughout Utah and surrounding states.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Professional lake management equipment"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Professional Lake Management Matters</h2>
            <p className="text-lg text-muted-foreground">
              Proper lake management ensures long-term health, prevents costly problems, and maintains 
              the aesthetic and functional value of your water body. Our comprehensive approach addresses 
              all aspects of lake health.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Prevents invasive species and algae blooms</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Maintains water quality and clarity</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Protects fish and wildlife habitat</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Reduces long-term maintenance costs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Lake Management Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Water Quality Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Regular monitoring and treatment to maintain optimal pH, oxygen levels, and nutrient balance.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Settings className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Aquatic Vegetation Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Strategic removal of invasive plants while preserving beneficial native vegetation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Ecosystem Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Maintaining healthy fish populations and wildlife habitat through balanced management.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Benefits of Professional Lake Management</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <TrendingUp className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Improved Property Value</h3>
              <p>Well-maintained lakes increase property values and appeal to potential buyers or tenants.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="h-8 w-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Preventive Maintenance</h3>
              <p>Regular management prevents costly emergency repairs and major restoration projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Your Free Lake Management Consultation</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

