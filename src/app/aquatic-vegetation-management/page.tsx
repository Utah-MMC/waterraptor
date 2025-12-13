import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Leaf, Scissors, Shield, Target } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Aquatic Vegetation Management | WaterRaptor.com',
  description: 'Expert aquatic vegetation management services for lakes and ponds using The Water Raptor. Strategic control of aquatic plants including algae, milfoil, cattails, and invasive species to maintain ecosystem balance and water quality. Comprehensive harvesting and herbicide programs.',
  keywords: 'aquatic vegetation management, aquatic plant control, lake vegetation management, pond plant management, invasive plant control, Utah vegetation management',
  openGraph: {
    title: 'Aquatic Vegetation Management | WaterRaptor.com',
    description: 'Expert aquatic vegetation management services for lakes and ponds using The Water Raptor. Strategic control of aquatic plants to maintain ecosystem balance.',
    url: 'https://waterraptor.com/aquatic-vegetation-management',
    type: 'website',
    images: [
      {
        url: 'https://waterraptor.com/images/image004.jpg',
        width: 1200,
        height: 630,
        alt: 'Aquatic vegetation management services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aquatic Vegetation Management | WaterRaptor.com',
    description: 'Expert aquatic vegetation management services for lakes and ponds.',
  },
};

export default function AquaticVegetationManagementPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Vegetation Management</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Aquatic Vegetation Management
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Strategic aquatic vegetation management to maintain ecosystem balance. Our services 
            control invasive and excessive plants while preserving beneficial native vegetation 
            for healthy water bodies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Balanced Vegetation Management</h2>
            <p className="text-lg text-slate-300">
              Aquatic vegetation plays a crucial role in water ecosystems, but uncontrolled growth 
              can cause problems. Our management approach balances plant control with ecosystem 
              health, removing problem species while protecting beneficial ones.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Selective removal of invasive species</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Control of excessive native vegetation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Preservation of beneficial plants</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Long-term vegetation balance</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Aquatic vegetation management"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-slate-900/60 border border-white/10">
        <h2 className="text-4xl font-bold text-center mb-12">Our Management Approach</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
              <img src="/images/graphics/clawssss.svg" alt="Water Raptor trademark" className="w-3/4 h-3/4 object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <Target className="h-10 w-10 text-blue-600 mb-4" />
              <div className="flex items-center gap-2">
                <img src="/images/graphics/clawssss.svg" alt="Water Raptor claw" className="w-5 h-5 opacity-80" style={{ filter: 'invert(1)' }} />
                <CardTitle>Assessment</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p>Identifying problem species and determining management priorities.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
              <img src="/images/graphics/clawssss.svg" alt="Water Raptor trademark" className="w-3/4 h-3/4 object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <Scissors className="h-10 w-10 text-green-600 mb-4" />
              <div className="flex items-center gap-2">
                <img src="/images/graphics/clawssss.svg" alt="Water Raptor claw" className="w-5 h-5 opacity-80" style={{ filter: 'invert(1)' }} />
                <CardTitle>Selective Removal</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p>Precise removal of target vegetation using professional equipment.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
              <img src="/images/graphics/clawssss.svg" alt="Water Raptor trademark" className="w-3/4 h-3/4 object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <div className="flex items-center gap-2">
                <img src="/images/graphics/clawssss.svg" alt="Water Raptor claw" className="w-5 h-5 opacity-80" style={{ filter: 'invert(1)' }} />
                <CardTitle>Ecosystem Protection</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p>Methods that protect water quality and wildlife during management.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0 flex items-center justify-center">
              <img src="/images/graphics/clawssss.svg" alt="Water Raptor trademark" className="w-3/4 h-3/4 object-contain" />
            </div>
            <CardHeader className="relative z-10">
              <Leaf className="h-10 w-10 text-teal-600 mb-4" />
              <div className="flex items-center gap-2">
                <img src="/images/graphics/clawssss.svg" alt="Water Raptor claw" className="w-5 h-5 opacity-80" style={{ filter: 'invert(1)' }} />
                <CardTitle>Ongoing Monitoring</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p>Regular monitoring and maintenance to prevent regrowth.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-slate-900/60 border border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get Your Vegetation Management Plan</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
