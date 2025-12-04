import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Wrench, Droplets, Gauge, Waves } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Lake Dredging Services | Professional Sediment Removal | WaterRaptor.com',
  description: 'Professional lake dredging services to remove sediment, muck, and buildup. Restore depth and improve water quality with expert dredging solutions.',
  keywords: 'lake dredging, pond dredging, sediment removal, lake depth restoration, muck removal, Utah dredging services',
  openGraph: {
    title: 'Lake Dredging Services | WaterRaptor.com',
    description: 'Professional lake dredging to restore depth and improve water quality.',
    url: 'https://waterraptor.com/lake-dredging',
  },
};

export default function LakeDredgingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Sediment Removal & Dredging</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Lake Dredging Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert lake dredging services to remove accumulated sediment, muck, and organic 
            matter. Restore lake depth, improve water quality, and extend the life of your water body.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">When Dredging is Needed</h2>
            <p className="text-lg text-muted-foreground">
              Over time, lakes accumulate sediment, muck, and organic matter that reduces depth 
              and water quality. Professional dredging removes this buildup to restore the lake 
              to its original condition and prevent future problems.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Significant depth loss due to sediment</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Poor water quality from organic buildup</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Navigation or recreational use problems</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Restoration after years of neglect</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Lake dredging services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Dredging Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Gauge className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Depth Restoration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Removing sediment to restore original lake depth and capacity.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Droplets className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Muck Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Removal of organic muck and decaying matter from the lake bottom.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Sediment Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Strategic removal and disposal of accumulated sediment.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Wrench className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Preventive Dredging</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Regular maintenance dredging to prevent major buildup.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Your Dredging Project Quote</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

