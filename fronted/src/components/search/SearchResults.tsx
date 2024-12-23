import { MapPin } from "lucide-react";
import {
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

interface SearchResultsProps {
  isLoading: boolean;
  location: string;
  filteredCities: string[];
  filteredPractices: string[];
  filteredDentists: string[];
  onSelect: (value: string) => void;
}

export const SearchResults = ({
  isLoading,
  location,
  filteredCities,
  filteredPractices,
  filteredDentists,
  onSelect,
}: SearchResultsProps) => {
  if (isLoading) {
    return <CommandEmpty>Loading cities...</CommandEmpty>;
  }

  if (location.length === 0) {
    return <CommandEmpty>Start typing to see suggestions...</CommandEmpty>;
  }

  return (
    <>
      <CommandGroup heading="Cities">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <CommandItem
              key={city}
              onSelect={() => onSelect(city)}
            >
              <MapPin className="mr-2 h-4 w-4" />
              {city}
            </CommandItem>
          ))
        ) : (
          <CommandEmpty>No cities found</CommandEmpty>
        )}
      </CommandGroup>
      <CommandGroup heading="Practices">
        {filteredPractices.map((practice) => (
          <CommandItem
            key={practice}
            onSelect={() => onSelect(practice)}
          >
            {practice}
          </CommandItem>
        ))}
      </CommandGroup>
      <CommandGroup heading="Dentists">
        {filteredDentists.map((dentist) => (
          <CommandItem
            key={dentist}
            onSelect={() => onSelect(dentist)}
          >
            {dentist}
          </CommandItem>
        ))}
      </CommandGroup>
    </>
  );
};