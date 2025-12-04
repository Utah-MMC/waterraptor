import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Wrench, Scissors, Hand, Grip, Waves, Settings, Zap, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false });

export const metadata: Metadata = {
  title: 'Truxor T50 Equipment | Professional Amphibious Lake Management Machine | WaterRaptor.com',
  description: 'Learn about the Truxor T50 - our professional amphibious equipment for lake management, dredging, and aquatic vegetation control. Advanced capabilities for all lake services.',
  keywords: 'Truxor T50, Truxor equipment, amphibious equipment, lake management equipment, aquatic equipment, professional lake equipment, Utah Truxor',
  openGraph: {
    title: 'Truxor T50 Equipment | WaterRaptor.com',
    description: 'Professional Truxor T50 amphibious equipment for comprehensive lake management.',
    url: 'https://waterraptor.com/truxor-t50',
  },
};

export default function TruxorT50Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Professional Equipment</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Truxor T50 - Professional Amphibious Equipment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Truxor T50 is our primary equipment for professional lake management, dredging, 
            and aquatic vegetation control. This versatile amphibious machine delivers exceptional 
            performance for all types of lake services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Truxor T50 equipment"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Truxor T50?</h2>
            <p className="text-lg text-muted-foreground">
              The Truxor T50 is specifically designed for aquatic operations, combining the 
              versatility of a boat with the power of an excavator. This unique design allows 
              us to work efficiently in water environments that traditional equipment cannot access.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Amphibious design works on land and water</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Quick-change attachment system for versatility</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Precise control for delicate operations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Environmentally friendly operation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Truxor T50 in Action</h2>
        <div className="max-w-4xl mx-auto">
          <VideoPlayer
            src="/videos/equipment-3d-render.mp4"
            poster="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
            title="Truxor T50 Equipment Demonstration"
            description="Watch the Truxor T50 demonstrate its capabilities in real lake management operations"
            autoPlay={false}
            loop={true}
            muted={true}
            controls={true}
          />
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Truxor T50 Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Scissors className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Cutting Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Precise cutting of aquatic vegetation with various cutter attachments including Doro Cutters D20, D30, D40, and ESM series.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Wrench className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Dredging & Excavation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Doro Digger attachment for sediment removal, muck cleanup, and depth restoration up to 3m depth.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Grip className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Debris Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Doro Grip attachment for removing trees, roots, and debris with telescopic reach up to 1.7m depth.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Hand className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Lifting Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <p>350-400kg lifting capacity via X4 quick-change bracket for various materials and equipment.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-orange-600 mb-4" />
              <CardTitle>Shoreline Work</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Amphibious capability allows work on shorelines, banks, and shallow water areas.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Settings className="h-10 w-10 text-red-600 mb-4" />
              <CardTitle>Versatile Attachments</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quick-change system allows rapid switching between different tools for maximum efficiency.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Specifications */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Specifications</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Cutting Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Doro Cutter D20:</strong> ~1m depth, ~4m width</p>
              <p><strong>Doro Cutter D30:</strong> ~1.4m depth, ~4m width</p>
              <p><strong>Doro Cutter D40:</strong> 0.2-2.1m depth (telescopic), up to 4m width</p>
              <p><strong>ESM Series:</strong> Various depths from 0.3m to 0.8m</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Excavation & Lifting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Doro Digger:</strong> Max depth 3m, lift height 2.9m, reach radius 4m</p>
              <p><strong>Lifting Capacity:</strong> 350-400kg via X4 bracket</p>
              <p><strong>Doro Grip:</strong> Working depth up to ~1.7m, width 0.49-1.2m</p>
              <p><strong>Outriggers:</strong> Stabilize operations up to 2m deep</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Applications */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Ideal Applications</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Lake Management</h3>
              <p>Comprehensive lake management including vegetation control and maintenance</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Lake Dredging</h3>
              <p>Sediment removal and depth restoration projects</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Aquatic Vegetation Control</h3>
              <p>Precise cutting and removal of invasive and excessive plants</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Shoreline Restoration</h3>
              <p>Cleaning and restoration of eroded or overgrown shorelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Services Using Truxor T50</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/lake-management" className="hover:opacity-80 transition-opacity">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <p className="font-semibold">Lake Management</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/lake-dredging" className="hover:opacity-80 transition-opacity">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <p className="font-semibold">Lake Dredging</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/aquatic-vegetation-management" className="hover:opacity-80 transition-opacity">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <p className="font-semibold">Vegetation Management</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/lake-cleanup" className="hover:opacity-80 transition-opacity">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <p className="font-semibold">Lake Cleanup</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Learn More About Our Equipment</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

