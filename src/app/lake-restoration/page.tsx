import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, RefreshCw, TreePine, Droplets, Shield } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Lake Restoration Services | Restore Your Lake to Health | WaterRaptor.com',
  description: 'Professional lake restoration services to bring degraded lakes back to health. Expert restoration for water quality, vegetation, and ecosystem recovery.',
  keywords: 'lake restoration, lake rehabilitation, lake recovery, degraded lake restoration, ecosystem restoration, Utah lake restoration',
  openGraph: {
    title: 'Lake Restoration Services | WaterRaptor.com',
    description: 'Expert lake restoration to restore health and beauty to degraded water bodies.',
    url: 'https://waterraptor.com/lake-restoration',
  },
};

export default function LakeRestorationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Restoration & Recovery</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Lake Restoration Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restore your degraded lake to its former beauty and health. Our comprehensive restoration 
            services address water quality, vegetation overgrowth, sediment buildup, and ecosystem imbalance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">When Restoration is Needed</h2>
            <p className="text-lg text-muted-foreground">
              Lakes can become degraded due to years of neglect, invasive species, pollution, or 
              natural processes. Our restoration services bring these water bodies back to health 
              through systematic, science-based approaches.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Severe vegetation overgrowth</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Poor water quality and clarity</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Excessive sediment and muck</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Loss of fish and wildlife</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Lake restoration services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Restoration Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <RefreshCw className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comprehensive evaluation of current conditions and restoration needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <TreePine className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Vegetation Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Systematic removal of invasive and excessive aquatic vegetation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Droplets className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Water Quality Treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Restoring optimal water chemistry and clarity.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-teal-600 mb-4" />
              <CardTitle>Ongoing Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Maintenance plan to preserve restored conditions.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Start Your Lake Restoration Project</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

