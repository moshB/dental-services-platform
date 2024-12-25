import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FilterAccordion } from "@/components/filters/FilterAccordion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { searchClinicsWithRadius } from '../../../controllers/clinicsController'; // נתיב ל-clinicsController




const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = (degree) => (degree * Math.PI) / 180;

  const R = 6371; // רדיוס כדור הארץ בקילומטרים
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
    Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance; // המרחק בקילומטרים
};

export const createDentalPracticeObject = (data, userLatitude, userLongitude) => {
  const practiceLatitude = parseFloat(data["Latitude"]);
  const practiceLongitude = parseFloat(data["Longitude"]);

  return {
    id: data["id"],
    name: data["Name"] || "Unknown",
    address: `${data["Address_1"] || ""}, ${data["Town_City"] || ""}, ${data["Postcode"] || ""}`.trim(),
    latitude: practiceLatitude,
    longitude: practiceLongitude,
    distance: calculateDistance(userLatitude, userLongitude, practiceLatitude, practiceLongitude),
    description: data["Specialisms_services"] || "No description available",
    tags: (data["Specialisms_services"] || "").split(",").map(tag => tag.trim()),
    dentists: [
      {
        name: data["Dentist_Type"] || "Unknown Dentist",
        specialties: (data["Specialisms_services"] || "").split(",").map(s => s.trim()),
        experience: "Unknown",
        education: "Unknown",
        languages: ["English"]
      }
    ],
    facilities: ["Wheelchair Access", "Free Parking"],
    paymentMethods: ["Cash", "Credit Card", "Insurance"],
    emergencyServices: true,
    rating: data["Rating"] || 0,
    reviewCount: data["ReviewCount"] || 0,
    openingTime: data["OpeningTime"] || "9:00 AM",
  };
};

export const createDentalPracticesArray = (dataRows, userLatitude, userLongitude) => {
  // Map each row in the data to a dental practice object
  return dataRows.map((row) =>
    createDentalPracticeObject(row, userLatitude, userLongitude)
  );
};

const Search = () => {
  const [minRating, setMinRating] = useState(0);
  const [practices, setPractices] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { state } = location || {};
  const { latitude, longitude, treatment } = state || {};

  // TODO: For testing purposes, using fixed coordinates for Birmingham
  // const testLatitude = 52.479699;
  // const testLongitude = -1.902691;
  const userLatitude = 52.479699; //latitude ||// TODO: For testing purposes, using fixed coordinates for Birmingham
  const userLongitude = -1.902691;//longitude ||

  // const fetchClinics = async () => {
  //   setLoading(true);

    // try {
    //   // קריאה לפונקציה החדשה
    //   const data = await searchClinicsWithRadius(
    //     treatment,
    //     userLatitude,
    //     userLongitude,
    //     3000 // רדיוס ברירת מחדל בקילומטרים
    //   );

      // if (data.length === 0) {
      //   console.warn('No clinics found');
      // }

  //     const processedData = createDentalPracticesArray(data, userLatitude, userLongitude);
  //     setPractices(processedData);
  //   } catch (error) {
  //     console.error('Error fetching clinics:', error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchClinics = async () => {
    setLoading(true);
    console.log(treatment, userLatitude, userLongitude);
    // const API_URL = process.env.API_URL;
    const API_URL = import.meta.env.VITE_API_URL;
    console.log(API_URL);
    try {
        const response = await fetch(`${API_URL}/clinics/search`, {
        // const response = await fetch(`${process.env.REACT_APP_API_URL}/clinics/search`, {
      //   const response = await fetch("https://dental-services-platform.netlify.app:5000/api/clinics/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: treatment,
          latitude: userLatitude,
          longitude: userLongitude,
          radius: 30000, // Default radius in kilometers
        }),
      });


      if (!response.ok) {
        throw new Error("Failed to fetch clinics");
      }

      const data = await response.json();
      if (data.length === 0) {
        console.warn("No clinics found");
      }
      const processedData = createDentalPracticesArray(data, latitude, longitude);
      setPractices(processedData);
    } catch (error) {
      console.error("Error fetching clinics:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (latitude && longitude && treatment) {
      fetchClinics();
    }
  }, [latitude, longitude, treatment]);

  const filteredPractices = practices.filter(practice => practice.rating >= minRating);

  const handleRatingChange = (newRating) => {
    setMinRating(newRating[0]);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FilterAccordion onRatingChange={handleRatingChange} />

        <div className="md:col-span-3 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h1>Search Results</h1>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
            <p>Treatment: {treatment}</p>
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

          {loading ? (
            <p>Loading...</p>
          ) : filteredPractices.length > 0 ? (
            filteredPractices.map((practice) => (
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
                            <span>{practice.address} ({practice.distance.toFixed(2)} km away)</span>
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
            ))
          ) : (
            <p>No practices found for the selected criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
