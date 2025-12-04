import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Scissors, Leaf, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Lake Weed Control Services | Professional Aquatic Weed Removal | WaterRaptor.com',
  description: 'Expert lake weed control services using professional equipment. Effective removal of invasive and excessive aquatic weeds to restore lake health.',
  keywords: 'lake weed control, aquatic weed removal, lake weed management, invasive weed control, aquatic vegetation control, Utah weed control',
  openGraph: {
    title: 'Lake Weed Control Services | WaterRaptor.com',
    description: 'Professional lake weed control to restore and maintain healthy lakes.',
    url: 'https://waterraptor.com/lake-weed-control',
  },
};

export default function LakeWeedControlPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Aquatic Weed Control</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Lake Weed Control Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Effective lake weed control using professional Truxor equipment. Remove invasive and 
            excessive aquatic weeds to restore navigation, improve water quality, and enhance 
            the beauty of your lake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Professional Weed Control Matters</h2>
            <p className="text-lg text-muted-foreground">
              Uncontrolled aquatic weeds can quickly take over a lake, making it unusable and 
              unhealthy. Our professional weed control services use specialized equipment to 
              efficiently remove weeds while protecting the ecosystem.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Restores navigation and recreational use</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Improves water quality and clarity</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Prevents further weed spread</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Protects fish and wildlife habitat</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Lake weed control equipment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Weed Control Methods</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Scissors className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Mechanical Cutting</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Precise cutting and removal of aquatic weeds using specialized equipment.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Selective Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Targeted removal of invasive species while preserving beneficial plants.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Ecosystem Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Methods that protect fish, wildlife, and water quality during removal.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Prevention Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ongoing maintenance to prevent weed regrowth and spread.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Your Lake Weed Control Quote</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

