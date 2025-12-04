import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles, Trash2, Waves, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Lake Cleanup Services | Professional Lake Cleaning & Restoration | WaterRaptor.com',
  description: 'Professional lake cleanup services to remove debris, sediment, and vegetation. Restore your lake to a clean, healthy, and beautiful condition.',
  keywords: 'lake cleanup, lake cleaning, lake debris removal, lake sediment removal, lake restoration cleanup, Utah lake cleanup',
  openGraph: {
    title: 'Lake Cleanup Services | WaterRaptor.com',
    description: 'Professional lake cleanup to restore beauty and health to your water body.',
    url: 'https://waterraptor.com/lake-cleanup',
  },
};

export default function LakeCleanupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Comprehensive Cleanup</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Lake Cleanup Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete lake cleanup services to remove debris, sediment, vegetation, and restore 
            your lake to a clean, healthy, and beautiful condition. Professional equipment 
            and expert service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Lake cleanup services"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Complete Lake Cleanup Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive lake cleanup services address all aspects of lake maintenance, 
              from surface debris to bottom sediment. We use professional equipment to efficiently 
              clean your lake while protecting the ecosystem.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Debris and trash removal</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Sediment and muck removal</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Aquatic vegetation cleanup</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Shoreline cleanup and restoration</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">What We Clean</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Trash2 className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Debris Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Removal of floating debris, trash, and organic matter from the lake surface.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Waves className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Sediment Cleanup</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Removal of accumulated sediment, muck, and organic buildup from the lake bottom.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Sparkles className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Vegetation Cleanup</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Removal of excessive and invasive aquatic vegetation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <RefreshCw className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Shoreline Cleanup</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Cleaning and restoration of lake shorelines and banks.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Schedule Your Lake Cleanup</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

