import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
// import { supabase } from "@/integrations/supabase/client";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Command,
  CommandList,
} from "./ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { SearchResults } from "./search/SearchResults";
import { TreatmentSelect } from "./search/TreatmentSelect";

const treatments = [
  "General Dentist",
  "Special Care Dentistry",
  "Public Health",
  "Dental Hygienist",
  "Oral Medicine",
  "Orthodontist",
  "Endodontist",
  "Oral and Maxillofacial Surgeon",
  "Pediatric Dentist",
  "Cosmetic Dentist",
  "Periodontist",
  "Oral Pathologist",
  "Prosthodontist"
];



export const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(""); // Location name (city)
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState([]); // Location suggestions
  const [treatment, setTreatment] = useState(""); // Selected treatment type
  const [locationOpen, setLocationOpen] = useState(false); // Popover state
  const [clinicName, setClinicName] = useState(""); // Clinic name input
  // Set the default value to the first treatment
  useEffect(() => {
    if (treatments.length > 0) {
      setTreatment(treatments[0].toLowerCase()); // Ensure consistent casing
    }
  }, [treatments]);
  // Fetch user's location when the component mounts (GPS)
  useEffect(() => {
    const fetchUserLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);

            // Fetch city name using latitude and longitude
            fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            )
              .then((response) => response.json())
              .then((data) => {
                if (data && data.address && data.address.city) {
                  setLocation(data.address.city); // Update the input value
                }
              })
              .catch((error) => console.error("Error fetching city name:", error));
          },
          (error) => {
            console.error("Error fetching user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchUserLocation();
  }, []);

  // // Fetch coordinates based on city name
  // const fetchCoordinates = async (city) => {
  //   try {
  //     // const response = await fetch(
  //     //   `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
  //     //     city
  //     //   )}&format=json`
  //     // );
  //     const response = await fetch(
  //       `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
  //         city
  //       )}&format=json`
  //     );
  //     const data = await response.json();
  //     if (data && data.length > 0) {
  //       const { lat, lon } = data[0];
  //       setLatitude(parseFloat(lat));
  //       setLongitude(parseFloat(lon));
  //       console.log(`Coordinates for ${city}: Latitude: ${lat}, Longitude: ${lon}`);
  //     } else {
  //       console.error("No results found for the specified city.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching coordinates:", error);
  //   }
  // };

  // const handleLocationChange = (e) => {
  //   const city = e.target.value;
  //   setLocation(city);

  //   // Fetch coordinates for city when input length > 2
  //   if (city.length > 2) {
  //     fetchCoordinates(city);
  //   }
  // };
  // Fetch coordinates based on user query
  const fetchCoordinates = async (query) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query
        )}&format=json`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setLatitude(parseFloat(lat));
        setLongitude(parseFloat(lon));
        console.log(
          `Coordinates for "${query}": Latitude: ${lat}, Longitude: ${lon}`
        );
      } else {
        console.error("No results found for the specified query.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handleLocationChange = (e) => {
    const query = e.target.value;
    setLocation(query);

    // Fetch suggestions and coordinates if input length > 2
    if (query.length > 2) {
      fetchSuggestions(query); // Fetch autocomplete suggestions
      fetchCoordinates(query); // Fetch coordinates for the entered query
    } else {
      setSuggestions([]); // Clear suggestions if input is too short
    }
  };

  // Fetch autocomplete suggestions
  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          query
        )}&format=json&addressdetails=1&limit=5`
      );
      const data = await response.json();
      setSuggestions(data || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  const handleSuggestionClick = (suggestion: any) => {
    setLocation(suggestion.display_name); // Update the input field
    setSuggestions([]); // Clear suggestions
    setLocationOpen(false); // Close the dropdown
  };


  const handleSearch = () => {
    if (latitude !== null && longitude !== null) {
      navigate("/practices/search", {
        state: { latitude, longitude, treatment, clinicName },
      });
    } else {
      console.error("Location coordinates are not available.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg">
      {/* Location Input */}
      {/* <div className="relative flex-[1.5]">
        <Popover open={locationOpen} onOpenChange={setLocationOpen}>
          <PopoverTrigger asChild>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Enter a City, Area"
                className="pl-10 h-12 w-full"
                value={location} // Value updated automatically
                onChange={handleLocationChange}
              />
            </div>
          </PopoverTrigger>
        </Popover>
      </div> */}
      {/* Location Input */}
      <div className="relative flex-[1.5]">
        <Popover open={locationOpen} onOpenChange={setLocationOpen}>
          <PopoverTrigger asChild>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Enter a City, Area"
                className="pl-10 h-12 w-full"
                value={location} // Value updated automatically
                onChange={handleLocationChange}
              />
            </div>
          </PopoverTrigger>
          {/* Dropdown Suggestions */}
          {suggestions.length > 0 && locationOpen && (
            <div className="absolute top-14 left-0 w-full bg-white border rounded shadow-lg z-10">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.display_name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Popover>
      </div>

      {/* Clinic Name Input */}
      <div className="relative flex-1">
        <div className="relative">
          <Input
            placeholder="Search by Practice, Dentist"
            className="h-12 w-full"
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
          />
        </div>
      </div>

      <TreatmentSelect
        value={treatment}
        onValueChange={setTreatment}
        treatments={treatments}
      />

      <Button
        className="h-12 px-8 bg-[#4FD1C5] hover:bg-[#3BA89F] transition-all w-full lg:w-auto"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};
