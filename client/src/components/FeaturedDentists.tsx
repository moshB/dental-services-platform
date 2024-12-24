import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const dentists = [
  {
    id: 1,
    name: "Dr. Sarah Williams",
    specialty: "Cosmetic Dentistry",
    rating: 4.9,
    reviews: 127,
    location: "London",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dr. James Thompson",
    specialty: "Orthodontics",
    rating: 4.8,
    reviews: 98,
    location: "Manchester",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&h=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Emily Parker",
    specialty: "General Dentistry",
    rating: 4.7,
    reviews: 156,
    location: "Birmingham",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&h=300&auto=format&fit=crop",
  },
];

export const FeaturedDentists = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {dentists.map((dentist) => (
        <Link key={dentist.id} to={`/practices/dentist/${dentist.id}`}>
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="aspect-square relative">
              <img
                src={dentist.image}
                alt={dentist.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{dentist.name}</h3>
                <Badge variant="secondary" className="bg-[#4FD1C5]/10 text-[#4FD1C5]">
                  {dentist.specialty}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <MapPin className="h-4 w-4" />
                {dentist.location}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{dentist.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({dentist.reviews} reviews)</span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};