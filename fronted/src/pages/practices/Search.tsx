import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FilterAccordion } from "@/components/filters/FilterAccordion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Updated mock data to ensure all practices have required properties
const mockPractices = [
  {
    id: 1,
    name: "Bright Smile Dental",
    address: "123 Main St, London, UK",
    distance: 2.5,
    rating: 4.8,
    reviewCount: 234,
    description: "Specializing in general dentistry, cosmetic procedures, and orthodontics. Modern facility with state-of-the-art equipment.",
    tags: ['NHS', 'General Dentistry', 'Cosmetic'],
    openingTime: "9:00 AM",
    dentists: [
      {
        name: "Dr. Sarah Johnson",
        specialties: ["General Dentistry", "Cosmetic Dentistry"],
        experience: "15 years",
        education: "King's College London",
        languages: ["English", "Spanish"]
      },
      {
        name: "Dr. Michael Chen",
        specialties: ["Orthodontics", "Pediatric Dentistry"],
        experience: "10 years",
        education: "University College London",
        languages: ["English", "Mandarin"]
      }
    ],
    facilities: ["Wheelchair Access", "Free Parking", "Digital X-Ray"],
    paymentMethods: ["Credit Card", "Cash", "Insurance"],
    emergencyServices: true
  },
  {
    id: 2,
    name: "City Dental Care",
    address: "456 High Street, London, UK",
    distance: 1.8,
    rating: 4.2,
    reviewCount: 186,
    description: "Family-friendly practice offering comprehensive dental care with a focus on preventive dentistry.",
    tags: ['Private', 'Family Dentistry', 'Emergency Care'],
    openingTime: "8:30 AM",
    dentists: [
      {
        name: "Dr. Emma White",
        specialties: ["Family Dentistry", "Preventive Care"],
        experience: "8 years",
        education: "University of Manchester",
        languages: ["English"]
      }
    ],
    facilities: ["Parking Available", "Child-Friendly"],
    paymentMethods: ["Credit Card", "Cash"],
    emergencyServices: true
  },
  {
    id: 3,
    name: "Advanced Dental Clinic",
    address: "789 Park Road, London, UK",
    distance: 3.2,
    rating: 3.9,
    reviewCount: 142,
    description: "Specialized in advanced dental procedures and cosmetic dentistry with latest technology.",
    tags: ['Private', 'Cosmetic', 'Implants'],
    openingTime: "9:30 AM",
    dentists: [
      {
        name: "Dr. James Smith",
        specialties: ["Cosmetic Dentistry", "Implants"],
        experience: "12 years",
        education: "Bristol Dental School",
        languages: ["English", "French"]
      }
    ],
    facilities: ["Modern Equipment", "Disabled Access"],
    paymentMethods: ["Credit Card", "Insurance"],
    emergencyServices: false
  }
];

const Search = () => {
  const [minRating, setMinRating] = useState(0);
  
  const filteredPractices = mockPractices.filter(practice => practice.rating >= minRating);

  const handleRatingChange = (newRating: number[]) => {
    setMinRating(newRating[0]);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FilterAccordion onRatingChange={handleRatingChange} />

        <div className="md:col-span-3 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{filteredPractices.length} practices found</h2>
            <Select defaultValue="proximity">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="proximity">Nearest to you</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredPractices.map((practice) => (
            <Link key={practice.id} to={`/practices/${practice.id}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Dental Practice"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                          {practice.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{practice.address} ({practice.distance} miles away)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{practice.rating}</span>
                        <span className="text-muted-foreground">({practice.reviewCount})</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        {practice.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {practice.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Opens {practice.openingTime}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:text-primary">
                        View Details →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
