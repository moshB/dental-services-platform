import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate, Link } from "react-router-dom";

const procedures = [
  {
    id: 1,
    name: "Teeth Whitening",
    description: "Professional whitening for a brighter smile",
    price: "From £199",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&h=300&auto=format&fit=crop",
    topProviders: [
      { name: "Bright Smile Dental", rating: 4.9, distance: "1.2 miles" },
      { name: "City Dental Care", rating: 4.8, distance: "2.1 miles" },
    ]
  },
  {
    id: 2,
    name: "Dental Implants",
    description: "Permanent solution for missing teeth",
    price: "From £1,500",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=400&h=300&auto=format&fit=crop",
    topProviders: [
      { name: "Advanced Dental Clinic", rating: 4.9, distance: "0.8 miles" },
      { name: "Premier Implant Center", rating: 4.7, distance: "1.5 miles" },
    ]
  },
  {
    id: 3,
    name: "Invisalign",
    description: "Clear aligners for straighter teeth",
    price: "From £2,500",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&h=300&auto=format&fit=crop",
    topProviders: [
      { name: "Orthodontic Specialists", rating: 5.0, distance: "1.0 miles" },
      { name: "Clear Smile Center", rating: 4.8, distance: "1.8 miles" },
    ]
  }
];

export const PopularProcedures = () => {
  const navigate = useNavigate();

  const handleViewProviders = (procedureId: number) => {
    navigate(`/practices/procedures/${procedureId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {procedures.map((procedure) => (
        <Card key={procedure.id} className="overflow-hidden">
          <Link to={`/practices/procedures/${procedure.id}`}>
            <div className="aspect-video relative overflow-hidden">
              <img
                src={procedure.image}
                alt={procedure.name}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="p-6">
            <Link to={`/practices/procedures/${procedure.id}`}>
              <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                {procedure.name}
              </h3>
            </Link>
            <p className="text-gray-600 text-sm mb-4">{procedure.description}</p>
            <p className="font-medium text-[#4FD1C5] mb-4">{procedure.price}</p>
            
            <div className="space-y-3 mb-4">
              <h4 className="font-medium text-sm">Top Providers Nearby:</h4>
              {procedure.topProviders.map((provider, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{provider.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★ {provider.rating}</span>
                    <span className="text-gray-500">({provider.distance})</span>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => handleViewProviders(procedure.id)}
              className="w-full"
            >
              View All Providers
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};