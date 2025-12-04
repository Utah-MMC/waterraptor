import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Wrench, Calendar, DollarSign, Shield } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

export const metadata: Metadata = {
  title: 'Lake Maintenance Services | Regular Lake Upkeep | WaterRaptor.com',
  description: 'Professional lake maintenance services including regular inspections, cleaning, and preventive care. Keep your lake healthy year-round with our maintenance programs.',
  keywords: 'lake maintenance, lake upkeep, preventive lake care, regular lake service, lake inspection, Utah lake maintenance',
  openGraph: {
    title: 'Lake Maintenance Services | WaterRaptor.com',
    description: 'Regular lake maintenance programs to keep your water body healthy and beautiful.',
    url: 'https://waterraptor.com/lake-maintenance',
  },
};

export default function LakeMaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Regular Maintenance Programs</Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Professional Lake Maintenance Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep your lake healthy and beautiful year-round with our comprehensive maintenance programs. 
            Regular upkeep prevents problems before they start and saves you money in the long run.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Regular Maintenance is Essential</h2>
            <p className="text-lg text-muted-foreground">
              Consistent lake maintenance is the key to preventing costly problems and maintaining 
              the health and beauty of your water body. Our maintenance programs are designed to 
              address issues proactively.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Prevents invasive species establishment</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Maintains water clarity and quality</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Reduces emergency service needs</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span>Extends the life of your lake infrastructure</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/New Images/Truxor_Cutting-Collecting_1_web.jpg"
              alt="Lake maintenance equipment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Maintenance Programs */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Maintenance Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Seasonal Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quarterly inspections and treatments tailored to each season's specific needs and challenges.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Wrench className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Monthly Service Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Regular monthly visits for consistent care and early problem detection.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Annual Maintenance Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comprehensive year-round coverage with priority service and discounted rates.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">What's Included in Maintenance</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Water Quality Testing</h3>
              <p>Regular monitoring of pH, oxygen, and nutrient levels</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Vegetation Control</h3>
              <p>Ongoing removal of invasive and excessive aquatic plants</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Debris Removal</h3>
              <p>Regular cleanup of floating debris and shoreline waste</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Equipment Inspection</h3>
              <p>Checking and maintaining aeration systems and other equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Start Your Maintenance Program Today</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

