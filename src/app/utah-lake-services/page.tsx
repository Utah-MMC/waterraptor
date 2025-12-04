import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, MapPin, Waves, Mountain, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Utah Lake Services | Professional Lake Care in Utah | WaterRaptor.com',
  description: 'Professional lake services throughout Utah. Expert lake management, cleanup, and maintenance services for lakes and ponds across the state.',
  keywords: 'Utah lake services, Utah lake management, Utah lake cleanup, lake services Utah, Utah pond services, professional lake services Utah',
  openGraph: {
    title: 'Utah Lake Services | WaterRaptor.com',
    description: 'Professional lake services throughout Utah.',
    url: 'https://waterraptor.com/utah-lake-services',
  },
};

export default function UtahLakeServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Serving All of Utah</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Utah Lake Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert lake services throughout Utah. From Salt Lake City to St. George, we provide 
            professional lake management, cleanup, and maintenance services for lakes and ponds 
            across the entire state.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Serving Lakes Throughout Utah</h2>
            <p className="text-lg text-muted-foreground">
              We provide comprehensive lake services across Utah, from the Wasatch Front to 
              southern Utah. Our team understands the unique challenges of Utah's diverse 
              climate and geography, providing tailored solutions for each region.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Service throughout all of Utah</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Understanding of Utah's unique climate</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Local expertise and knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Quick response times across the state</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/cities" className="text-blue-600 hover:text-blue-800 underline">
                View our service areas →
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Utah lake services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Utah Lake Services We Provide</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Lake Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comprehensive management programs for Utah lakes and ponds.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Mountain className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Regional Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Understanding of Utah's unique geography and climate challenges.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <MapPin className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Statewide Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Professional lake services available throughout Utah.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Star className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Local Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Deep understanding of Utah's water bodies and ecosystems.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Utah Lake Services Today</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

