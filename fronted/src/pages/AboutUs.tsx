import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About AlldentZ</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To revolutionize the way dental practices and patients connect, making quality dental care more accessible across the UK.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Who We Are</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              AlldentZ is a comprehensive platform connecting dental professionals with patients. We provide tools and insights to help practices thrive and patients find the perfect dental care provider.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Excellence in dental care</li>
              <li>Transparency and trust</li>
              <li>Innovation in healthcare</li>
              <li>Patient-centered approach</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-muted-foreground mb-4">
          Have questions or suggestions? We'd love to hear from you. Reach out to our team at support@alldentZ.com
        </p>
      </div>
    </div>
  );
};

export default AboutUs;