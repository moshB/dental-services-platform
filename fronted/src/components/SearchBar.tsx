import { Search, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";

// Mock data - in a real app, this would come from an API
const mockSuggestions = {
  locations: [
    "London, UK",
    "Manchester, UK",
    "Birmingham, UK",
    "Leeds, UK",
    "Liverpool, UK"
  ],
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

export const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [treatment, setTreatment] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState(mockSuggestions.locations);
  const [filteredPractices, setFilteredPractices] = useState(mockSuggestions.practices);
  const [filteredDentists, setFilteredDentists] = useState(mockSuggestions.dentists);

  const treatments = [
    "Check-ups",
    "Teeth Cleaning",
    "Fillings",
    "Root Canal",
    "Crowns",
    "Teeth Whitening",
    "Orthodontics",
    "Dental Implants",
    "Emergency Care",
    "Cosmetic Dentistry"
  ];

  useEffect(() => {
    // Filter suggestions based on input and limit to top 3
    const searchTerm = location.toLowerCase();
    setFilteredLocations(
      mockSuggestions.locations
        .filter(loc => loc.toLowerCase().includes(searchTerm))
        .slice(0, 3)
    );
    setFilteredPractices(
      mockSuggestions.practices
        .filter(practice => practice.toLowerCase().includes(searchTerm))
        .slice(0, 3)
    );
    setFilteredDentists(
      mockSuggestions.dentists
        .filter(dentist => dentist.toLowerCase().includes(searchTerm))
        .slice(0, 3)
    );
  }, [location]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-lg">
      <div className="relative flex-1">
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
          <PopoverContent className="w-[300px] p-0" align="start">
            <Command>
              <CommandList>
                {location.length > 0 ? (
                  <>
                    <CommandGroup heading="Locations">
                      {filteredLocations.length > 0 ? (
                        filteredLocations.map((loc) => (
                          <CommandItem
                            key={loc}
                            onSelect={() => {
                              setLocation(loc);
                              setLocationOpen(false);
                            }}
                          >
                            <MapPin className="mr-2 h-4 w-4" />
                            {loc}
                          </CommandItem>
                        ))
                      ) : (
                        <CommandEmpty>No locations found</CommandEmpty>
                      )}
                    </CommandGroup>
                    <CommandGroup heading="Practices">
                      {filteredPractices.map((practice) => (
                        <CommandItem
                          key={practice}
                          onSelect={() => {
                            setLocation(practice);
                            setLocationOpen(false);
                          }}
                        >
                          {practice}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    <CommandGroup heading="Dentists">
                      {filteredDentists.map((dentist) => (
                        <CommandItem
                          key={dentist}
                          onSelect={() => {
                            setLocation(dentist);
                            setLocationOpen(false);
                          }}
                        >
                          {dentist}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </>
                ) : (
                  <CommandEmpty>Start typing to see suggestions...</CommandEmpty>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
        <Select value={treatment} onValueChange={setTreatment}>
          <SelectTrigger className="h-12 pl-10 w-full">
            <SelectValue placeholder="Treatment type" />
          </SelectTrigger>
          <SelectContent>
            {treatments.map((t) => (
              <SelectItem key={t} value={t.toLowerCase()}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button className="h-12 px-8 bg-[#4FD1C5] hover:bg-[#3BA89F] transition-all w-full lg:w-auto">
        Search
      </Button>
    </div>
  );
};