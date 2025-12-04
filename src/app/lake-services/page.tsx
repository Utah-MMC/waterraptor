import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Waves, Wrench, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Lake Services | Comprehensive Lake Care Solutions | WaterRaptor.com',
  description: 'Complete lake services including cleanup, maintenance, restoration, and management. Professional lake care solutions for all your water body needs.',
  keywords: 'lake services, lake care, lake maintenance, lake cleanup, lake management, comprehensive lake services, Utah lake services',
  openGraph: {
    title: 'Lake Services | WaterRaptor.com',
    description: 'Comprehensive lake services for all your water body needs.',
    url: 'https://waterraptor.com/lake-services',
  },
};

export default function LakeServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Complete Lake Solutions</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Comprehensive Lake Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete lake services for all your water body needs. From routine maintenance to 
            major restoration projects, we provide expert lake care solutions using professional 
            equipment and proven methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Lake services"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">All-Inclusive Lake Care</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive lake services cover every aspect of lake care, from routine 
              maintenance to emergency response. We're your single source for all lake-related 
              needs, providing consistent, professional service.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Routine maintenance and cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Emergency response and urgent repairs</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Major restoration and rehabilitation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Long-term management programs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Lake Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Lake Cleanup</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Complete cleanup of debris, sediment, and vegetation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Wrench className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Regular maintenance programs to keep lakes healthy.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comprehensive lake management and care programs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Sparkles className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Restoration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Major restoration projects to restore lake health.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Started with Lake Services</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

