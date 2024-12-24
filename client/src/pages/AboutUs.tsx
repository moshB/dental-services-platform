import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Heart, Lightbulb, Mail, Phone, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Blue Gradient */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700">
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-center max-w-3xl mx-auto bg-blue-950/20 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to AlldentZ
            </h1>
            <p className="text-lg text-blue-50 mb-8 drop-shadow-md font-medium">
              Revolutionising dental care access across the UK through innovation and excellence
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-white hover:shadow-lg transition-shadow border-blue-100">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To revolutionise the way dental practices and patients connect, making quality dental care more accessible across the UK.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow border-blue-100">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Who We Are</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                AlldentZ is a comprehensive platform connecting dental professionals with patients. We provide tools and insights to help practices thrive and patients find the perfect dental care provider throughout the United Kingdom.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow border-blue-100">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2 text-blue-600" />
                  Excellence in dental care
                </li>
                <li className="flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2 text-blue-600" />
                  Transparency and trust
                </li>
                <li className="flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2 text-blue-600" />
                  Innovation in healthcare
                </li>
                <li className="flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2 text-blue-600" />
                  Patient-centred approach
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white hover:shadow-lg transition-shadow border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600">support@alldentZ.com</p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">0800 123 4567</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
