// import { useState, useEffect } from "react";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { supabase } from "@/integrations/supabase/client";
// import { MapPin } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import {
//   Command,
//   CommandList,
// } from "./ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "./ui/popover";
// import { SearchResults } from "./search/SearchResults";
// import { TreatmentSelect } from "./search/TreatmentSelect";

// const mockSuggestions = {
//   practices: [
//     "Bright Smile Dental",
//     "City Dental Care",
//     "Advanced Dental Clinic",
//     "Family Dental Practice",
//     "Modern Dentistry"
//   ],
//   dentists: [
//     "Dr. Sarah Johnson",
//     "Dr. Michael Chen",
//     "Dr. Emma White",
//     "Dr. James Smith",
//     "Dr. Lisa Brown"
//   ]
// };

// const treatments = [
//   "General Dentist",
//   "Special Care Dentistry",
//   "Public Health",
//   "Dental Hygienist",
//   "Oral Medicine",
//   "Orthodontist",
//   "Endodontist",
//   "Oral and Maxillofacial Surgeon",
//   "Pediatric Dentist",
//   "Cosmetic Dentist",
//   "Periodontist",
//   "Oral Pathologist",
//   "Prosthodontist"
// ];

// export const SearchBar = () => {
//   const navigate = useNavigate();
//   const [location, setLocation] = useState("");
//   const [treatment, setTreatment] = useState("");
//   const [locationOpen, setLocationOpen] = useState(false);
//   const [allCities, setAllCities] = useState<string[]>([]);
//   const [filteredCities, setFilteredCities] = useState<string[]>([]);
//   const [filteredPractices, setFilteredPractices] = useState(mockSuggestions.practices);
//   const [filteredDentists, setFilteredDentists] = useState(mockSuggestions.dentists);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch user's location when the component mounts
//   useEffect(() => {
//     const fetchUserLocation = () => {
//       if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(
//           async (position) => {
//             const { latitude, longitude } = position.coords;

//             // Fetch city name using latitude and longitude
//             try {
//               const response = await fetch(
//                 `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
//               );
//               const data = await response.json();
//               if (data && data.address && data.address.city) {
//                 setLocation(data.address.city);
//               } else {
//                 console.error("City not found in location data.");
//               }
//             } catch (error) {
//               console.error("Error fetching city name:", error);
//             }
//           },
//           (error) => {
//             console.error("Error fetching user location:", error);
//           }
//         );
//       } else {
//         console.error("Geolocation is not supported by this browser.");
//       }
//     };

//     fetchUserLocation();
//   }, []);

//   // Fetch all cities once when component mounts
//   useEffect(() => {
//     const fetchAllCities = async () => {
//       setIsLoading(true);
//       try {
//         const { data, error } = await supabase
//           .from('citys')
//           .select('Town_City')
//           .not('Town_City', 'is', null);

//         if (error) {
//           console.error('Error fetching cities:', error);
//           return;
//         }

//         if (data) {
//           const cityNames = data
//             .map(city => city.Town_City)
//             .filter((city): city is string => city !== null);

//           setAllCities(cityNames);
//         }
//       } catch (error) {
//         console.error('Error in fetchAllCities:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchAllCities();
//   }, []);

//   // Filter cities, practices, and dentists based on input
//   useEffect(() => {
//     if (location.length > 0) {
//       const searchTerm = location.toLowerCase();

//       // Filter cities locally
//       const filtered = allCities
//         .filter(city => city.toLowerCase().includes(searchTerm))
//         .slice(0, 10);

//       setFilteredCities(filtered);

//       // Filter practices
//       setFilteredPractices(
//         mockSuggestions.practices
//           .filter(practice => practice.toLowerCase().includes(searchTerm))
//           .slice(0, 3)
//       );

//       // Filter dentists
//       setFilteredDentists(
//         mockSuggestions.dentists
//           .filter(dentist => dentist.toLowerCase().includes(searchTerm))
//           .slice(0, 3)
//       );
//     } else {
//       setFilteredCities([]);
//       setFilteredPractices(mockSuggestions.practices.slice(0, 3));
//       setFilteredDentists(mockSuggestions.dentists.slice(0, 3));
//     }
//   }, [location, allCities]);

//   const handleLocationSelect = (value: string) => {
//     setLocation(value);
//     setLocationOpen(false);
//   };

//   const handleSearch = () => {
//     navigate("/practices/search", {
//       state: { location, treatment },
//     });
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg">
//       {/* <div className="relative flex-[1.5]">
//         <Popover open={locationOpen} onOpenChange={setLocationOpen}>
//           <PopoverTrigger asChild>
//             <div className="relative">
//               <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//               <Input
//                 placeholder="Location, Practice, or Dentist"
//                 className="pl-10 h-12 w-full"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </div>
//           </PopoverTrigger>
//           <PopoverContent className="w-[300px] p-0" align="start">
//             <Command>
//               <CommandList>
//                 <SearchResults
//                   isLoading={isLoading}
//                   location={location}
//                   filteredCities={filteredCities}
//                   filteredPractices={filteredPractices}
//                   filteredDentists={filteredDentists}
//                   onSelect={handleLocationSelect}
//                 />
//               </CommandList>
//             </Command>
//           </PopoverContent>
//         </Popover>
//       </div> */}

//       <TreatmentSelect
//         value={treatment}
//         onValueChange={setTreatment}
//         treatments={treatments}
//       />

//       <Button
//         className="h-12 px-8 bg-[#4FD1C5] hover:bg-[#3BA89F] transition-all w-full lg:w-auto"
//         onClick={handleSearch}
//       >
//         Search
//       </Button>
//     </div>
//   );
// };

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

const mockSuggestions = {
  practices: [
    "Bright Smile Dental",
    "City Dental Care",
    "Advanced Dental Clinic",
    "Family Dental Practice",
    "Modern Dentistry"
  ],
  dentists: [
    "Dr. Sarah Johnson",
    "Dr. Michael Chen",
    "Dr. Emma White",
    "Dr. James Smith",
    "Dr. Lisa Brown"
  ]
};

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
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [treatment, setTreatment] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);

  // Fetch user's location when the component mounts
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
                  setLocation(data.address.city);
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

  const handleSearch = () => {
    if (latitude !== null && longitude !== null) {
      navigate("/practices/search", {
        state: { latitude, longitude, treatment },
      });
    } else {
      console.error("Location coordinates are not available.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg">
      <div className="relative flex-[1.5]">
        <Popover open={locationOpen} onOpenChange={setLocationOpen}>
          <PopoverTrigger asChild>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Location, Practice, or Dentist"
                className="pl-10 h-12 w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </PopoverTrigger>
        </Popover>
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
