import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";

// In a real app, this would come from an API
const getProcedureData = (id: string) => ({
  id,
  name: "Teeth Whitening",
  description: "Professional teeth whitening treatment for a brighter, more confident smile",
  price: "From £199",
  duration: "60-90 minutes",
  image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
  benefits: [
    "Immediate visible results",
    "Professional-grade whitening agents",
    "Long-lasting effects",
    "Safe and comfortable procedure"
  ],
  providers: [
    {
      id: 1,
      name: "Dr. Sarah Williams",
      clinic: "Bright Smile Dental",
      rating: 4.9,
      reviews: 127,
      location: "London",
      price: "£199",
      nextAvailable: "Tomorrow",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Dr. James Thompson",
      clinic: "City Dental Care",
      rating: 4.8,
      reviews: 98,
      location: "Manchester",
      price: "£249",
      nextAvailable: "Next Week",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&h=300&auto=format&fit=crop"
    }
  ],
  faqs: [
    {
      question: "How long does the treatment last?",
      answer: "The effects typically last 6-12 months, depending on your lifestyle and oral hygiene habits."
    },
    {
      question: "Is the procedure painful?",
      answer: "Most patients experience minimal to no discomfort during the procedure. Some may experience temporary sensitivity."
    }
  ]
});

const ProcedureDetails = () => {
  const { id } = useParams();
  const procedure = getProcedureData(id || "");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${procedure.image})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative h-full flex items-end pb-8">
          <div className="text-white space-y-2">
            <h1 className="text-4xl font-bold">{procedure.name}</h1>
            <p className="text-xl">{procedure.description}</p>
            <div className="flex items-center gap-4 mt-4">
              <Badge variant="secondary" className="bg-primary/20">
                {procedure.price}
              </Badge>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{procedure.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Benefits & FAQs */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-3">
                {procedure.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {procedure.faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Available Providers */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Available Providers</h2>
            {procedure.providers.map((provider) => (
              <Card key={provider.id} className="p-4">
                <div className="flex gap-4">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{provider.name}</h3>
                    <p className="text-sm text-gray-600">{provider.clinic}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{provider.rating}</span>
                        <span className="text-gray-500">({provider.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{provider.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <p className="font-medium text-primary">{provider.price}</p>
                        <p className="text-sm text-gray-500">Next available: {provider.nextAvailable}</p>
                      </div>
                      <Button>Book Now</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureDetails;