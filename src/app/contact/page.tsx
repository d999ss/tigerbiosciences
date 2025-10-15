import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-tiger text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Get in touch with our team to learn more about our products and services, 
              or to discuss partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your needs..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-tiger-red hover:bg-tiger-red-dark text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-slate-900">
                    Get in touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10">
                      <Phone className="h-5 w-5 text-tiger-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Phone</h3>
                      <p className="text-slate-600">1-888-665-5005</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10">
                      <Mail className="h-5 w-5 text-tiger-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <p className="text-slate-600">info@tigerbiosciences.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10">
                      <MapPin className="h-5 w-5 text-tiger-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Address</h3>
                      <p className="text-slate-600">
                        555 E North Ln, Ste 5000<br />
                        Bldg D, Conshohocken, PA 19428
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10">
                      <Clock className="h-5 w-5 text-tiger-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Business Hours</h3>
                      <p className="text-slate-600">
                        Monday - Friday: 8:00 AM - 6:00 PM ET
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-tiger-red/5 to-tiger-red/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Need immediate assistance?
                  </h3>
                  <p className="text-slate-600 mb-4">
                    For urgent matters or technical support, please call our main number 
                    or email us directly.
                  </p>
                  <Button asChild variant="outline" className="border-tiger-red text-tiger-red hover:bg-tiger-red hover:text-white">
                    <a href="tel:+18886655005">
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
