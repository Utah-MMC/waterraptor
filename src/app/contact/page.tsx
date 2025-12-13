import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata: Metadata = {
  title: "Contact Us | Water Raptor - Pond & Lake Management",
  description: "Get in touch with Water Raptor for professional pond and lake management services. Schedule a deployment, request a quote, or learn more about our amphibious harvesting services.",
  keywords: [
    "contact water raptor",
    "pond management contact",
    "lake services contact",
    "dumpster rental contact",
    "utah pond services",
    "aquatic management contact",
  ],
  openGraph: {
    title: "Contact Water Raptor | Pond & Lake Management",
    description: "Schedule a deployment or request a quote for professional pond and lake management services.",
    type: "website",
    url: "https://waterraptor.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Water Raptor | Pond & Lake Management",
    description: "Get in touch with Water Raptor for professional pond and lake management services.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Hero Section */}
      <section className="bg-slate-900/85 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-4 text-center">
            <Badge className="text-xs uppercase tracking-[0.4em] bg-emerald-500 text-slate-950">
              Get Started
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact The Water Raptor
            </h1>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto">
              Schedule a deployment, request a quote, or learn more about our amphibious harvesting and lake management services. Our team responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-slate-900/90 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-emerald-500/20">
                      <Phone className="h-6 w-6 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-[0.2em]">Phone</p>
                      <a
                        href="tel:8019186000"
                        className="text-lg font-semibold text-white hover:text-emerald-300 transition-colors"
                      >
                        (801) 918-6000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-emerald-500/20">
                      <Mail className="h-6 w-6 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-[0.2em]">Email</p>
                      <a
                        href="mailto:icondumpsters@gmail.com"
                        className="text-lg font-semibold text-white hover:text-emerald-300 transition-colors break-all"
                      >
                        icondumpsters@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-emerald-500/20">
                      <MapPin className="h-6 w-6 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-[0.2em]">Service Area</p>
                      <p className="text-lg font-semibold text-white">
                        Utah & Surrounding States
                      </p>
                      <p className="text-sm text-slate-300 mt-1">
                        We deploy The Water Raptor across the Wasatch Front and neighboring regions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-emerald-500/20">
                      <Clock className="h-6 w-6 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-[0.2em]">Response Time</p>
                      <p className="text-lg font-semibold text-white">
                        Within 24 Hours
                      </p>
                      <p className="text-sm text-slate-300 mt-1">
                        We respond to all inquiries within one business day.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Emergency Response:</strong> For urgent aquatic weed control or emergency lake management needs, call us directly for immediate assistance.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services Quick Links */}
            <Card className="bg-slate-900/90 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li>• Aquatic weed harvesting & removal</li>
                  <li>• Lake & pond dredging</li>
                  <li>• Shoreline restoration</li>
                  <li>• Aquatic herbicide staging</li>
                  <li>• Habitat restoration</li>
                  <li>• Emergency response</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <div className="space-y-4 mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Get Your Free Quote</p>
              <h2 className="text-3xl font-bold text-white">Request a Deployment</h2>
              <p className="text-slate-300">
                Fill out the form below and our team will contact you within 24 hours to discuss your project needs and schedule a deployment.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-4 text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Why Water Raptor</p>
            <h2 className="text-3xl font-bold text-white">Professional Lake Management Services</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-slate-900/90 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-white mb-2">Amphibious Expertise</h3>
                <p className="text-sm text-slate-300">
                  The Water Raptor moves from shore to open water without cranes or barges, keeping your project on schedule.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/90 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-white mb-2">Rapid Response</h3>
                <p className="text-sm text-slate-300">
                  Our harvest-ready crew deploys quickly for seasonal blooms, emergency cleanups, and scheduled maintenance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/90 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-white mb-2">Complete Documentation</h3>
                <p className="text-sm text-slate-300">
                  Every deployment includes field data, imagery, and a clear plan for the next maintenance cycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

