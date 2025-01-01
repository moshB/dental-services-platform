
// import { useState, useEffect } from "react";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// // import { supabase } from "@/integrations/supabase/client";
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
//   const [latitude, setLatitude] = useState<number | null>(null);
//   const [longitude, setLongitude] = useState<number | null>(null);
//   const [treatment, setTreatment] = useState("");
//   const [locationOpen, setLocationOpen] = useState(false);
//   const [clinicName, setClinicName] = useState("");


//   // Fetch user's location when the component mounts
//   useEffect(() => {
//     const fetchUserLocation = () => {
//       if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setLatitude(latitude);
//             setLongitude(longitude);

//             // Fetch city name using latitude and longitude
//             fetch(
//               `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
//             )
//               .then((response) => response.json())
//               .then((data) => {
//                 if (data && data.address && data.address.city) {
//                   setLocation(data.address.city);
//                 }
//               })
//               .catch((error) => console.error("Error fetching city name:", error));
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

//   const handleSearch = () => {
//     if (latitude !== null && longitude !== null) {
//       navigate("/practices/search", {
//         state: { latitude, longitude, treatment, clinicName },
//       });
//     } else {
//       console.error("Location coordinates are not available.");
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg">

//       <div className="relative flex-[1.5]">
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
//         </Popover>
//       </div>
//       {/* Clinic Name Input */}
//       <div className="relative flex-1">
//         <div className="relative">
//           <Input
//             placeholder="Clinic Name"
//             className="h-12 w-full"
//             value={clinicName}
//             onChange={(e) => setClinicName(e.target.value)}
//           />
//         </div>
//       </div>

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
  const [treatment, setTreatment] = useState(""); // Selected treatment type
  const [locationOpen, setLocationOpen] = useState(false); // Popover state
  const [clinicName, setClinicName] = useState(""); // Clinic name input

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

  // Fetch coordinates based on city name
  const fetchCoordinates = async (city) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
          city
        )}&format=json`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setLatitude(parseFloat(lat));
        setLongitude(parseFloat(lon));
        console.log(`Coordinates for ${city}: Latitude: ${lat}, Longitude: ${lon}`);
      } else {
        console.error("No results found for the specified city.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handleLocationChange = (e) => {
    const city = e.target.value;
    setLocation(city);

    // Fetch coordinates for city when input length > 2
    if (city.length > 2) {
      fetchCoordinates(city);
    }
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
      <div className="relative flex-[1.5]">
        <Popover open={locationOpen} onOpenChange={setLocationOpen}>
          <PopoverTrigger asChild>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Enter city name or use GPS"
                className="pl-10 h-12 w-full"
                value={location} // Value updated automatically
                onChange={handleLocationChange}
              />
            </div>
          </PopoverTrigger>
        </Popover>
      </div>
      {/* Clinic Name Input */}
      <div className="relative flex-1">
        <div className="relative">
          <Input
            placeholder="Clinic Name"
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



// export const SearchBar = () => {
  // const navigate = useNavigate();
  // const [location, setLocation] = useState("");
  // const [latitude, setLatitude] = useState<number | null>(null);
  // const [longitude, setLongitude] = useState<number | null>(null);
  // const [treatment, setTreatment] = useState("");
  // const [locationOpen, setLocationOpen] = useState(false);
  // const [clinicName, setClinicName] = useState("");

  // // Fetch user's location when the component mounts (GPS)
  // useEffect(() => {
  //   const fetchUserLocation = () => {
  //     if ("geolocation" in navigator) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const { latitude, longitude } = position.coords;
  //           setLatitude(latitude);
  //           setLongitude(longitude);

  //           // Fetch city name using latitude and longitude
  //           fetch(
  //             `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  //           )
  //             .then((response) => response.json())
  //             .then((data) => {
  //               if (data && data.address && data.address.city) {
  //                 setLocation(data.address.city);
  //               }
  //             })
  //             .catch((error) => console.error("Error fetching city name:", error));
  //         },
  //         (error) => {
  //           console.error("Error fetching user location:", error);
  //         }
  //       );
  //     } else {
  //       console.error("Geolocation is not supported by this browser.");
  //     }
  //   };

  //   fetchUserLocation();
  // }, []);

  // // Fetch coordinates based on city name
  // const fetchCoordinates = async (city) => {
  //   try {
  //     const response = await fetch(
  //       `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
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

  // const handleSearch = () => {
  //   if (latitude !== null && longitude !== null) {
  //     navigate("/practices/search", {
  //       state: { latitude, longitude, treatment, clinicName },
  //     });
  //   } else {
  //     console.error("Location coordinates are not available.");
  //   }
  // };

  // return (
  //   <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg">
  //     {/* Location Input */}
  //     <div className="relative flex-[1.5]">
  //       <Popover open={locationOpen} onOpenChange={setLocationOpen}>
  //         <PopoverTrigger asChild>
  //           <div className="relative">
  //             <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
  //             <Input
  //               placeholder="Location, Practice, or Dentist"
  //               className="pl-10 h-12 w-full"
  //               value={location}
  //               onChange={(e) => setLocation(e.target.value)}
  //             />
  //           </div>
  //         </PopoverTrigger>
  //       </Popover>
  //     </div>
  //     <div className="relative flex-[1.5]">
  //       <Popover open={locationOpen} onOpenChange={setLocationOpen}>
  //         <PopoverTrigger asChild>
  //           <div className="relative">
  //             <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
  //             <Input
  //               placeholder="Enter city name or use GPS"
  //               className="pl-10 h-12 w-full"
  //               value={location}
  //               onChange={handleLocationChange}
  //             />
  //           </div>
  //         </PopoverTrigger>
  //       </Popover>
  //     </div>
  //     {/* Clinic Name Input */}
  //     <div className="relative flex-1">
  //       <div className="relative">
  //         <Input
  //           placeholder="Clinic Name"
  //           className="h-12 w-full"
  //           value={clinicName}
  //           onChange={(e) => setClinicName(e.target.value)}
  //         />
  //       </div>
  //     </div>

  //     <TreatmentSelect
  //       value={treatment}
  //       onValueChange={setTreatment}
  //       treatments={treatments}
  //     />

  //     <Button
  //       className="h-12 px-8 bg-[#4FD1C5] hover:bg-[#3BA89F] transition-all w-full lg:w-auto"
  //       onClick={handleSearch}
  //     >
  //       Search
  //     </Button>
  //   </div>
  // );
// };

// export const SearchBar = () => {
//   const navigate = useNavigate();
//   const [location, setLocation] = useState("");
//   const [latitude, setLatitude] = useState<number | null>(null);
//   const [longitude, setLongitude] = useState<number | null>(null);
//   const [treatment, setTreatment] = useState("");
//   const [locationOpen, setLocationOpen] = useState(false);
//   const [clinicName, setClinicName] = useState("");

//   // Fetch coordinates based on city name
//   const fetchCoordinates = async (city) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
//           city
//         )}&format=json`
//       );
//       const data = await response.json();
//       if (data && data.length > 0) {
//         const { lat, lon } = data[0];
//         setLatitude(parseFloat(lat));
//         setLongitude(parseFloat(lon));
//         console.log(`Coordinates for ${city}: Latitude: ${lat}, Longitude: ${lon}`);
//       } else {
//         console.error("No results found for the specified city.");
//       }
//     } catch (error) {
//       console.error("Error fetching coordinates:", error);
//     }
//   };

//   const handleLocationChange = (e) => {
//     const city = e.target.value;
//     setLocation(city);

//     // Fetch coordinates for city when input length > 2
//     if (city.length > 2) {
//       fetchCoordinates(city);
//     }
//   };

//   const handleSearch = () => {
//     if (latitude !== null && longitude !== null) {
//       navigate("/practices/search", {
//         state: { latitude, longitude, treatment, clinicName },
//       });
//     } else {
//       console.error("Location coordinates are not available.");
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg">
//       {/* Location Input */}
//       <div className="relative flex-[1.5]">
//         <Popover open={locationOpen} onOpenChange={setLocationOpen}>
//           <PopoverTrigger asChild>
//             <div className="relative">
//               <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//               <Input
//                 placeholder="Enter city name"
//                 className="pl-10 h-12 w-full"
//                 value={location}
//                 onChange={handleLocationChange}
//               />
//             </div>
//           </PopoverTrigger>
//         </Popover>
//       </div>
//       {/* Clinic Name Input */}
//       <div className="relative flex-1">
//         <div className="relative">
//           <Input
//             placeholder="Clinic Name"
//             className="h-12 w-full"
//             value={clinicName}
//             onChange={(e) => setClinicName(e.target.value)}
//           />
//         </div>
//       </div>

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
