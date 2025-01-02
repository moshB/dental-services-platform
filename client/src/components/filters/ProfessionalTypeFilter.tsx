import { Checkbox } from "@/components/ui/checkbox";

const PROFESSIONAL_TYPES = [
  { id: "general-dentist", label: "General Dentist" },
  { id: "dental-hygienist", label: "Dental Hygienist" },
  { id: "orthodontist", label: "Orthodontist" },
  { id: "pediatric-dentist", label: "Pediatric Dentist" },
  { id: "periodontist", label: "Periodontist" },
  { id: "prosthodontist", label: "Prosthodontist" },
  { id: "oral-surgeon", label: "Oral Surgeon" },
];

export const ProfessionalTypeFilter = ({ 
  selectedTypes, 
  onTypeChange 
}: {
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
}) => {
  const handleTypeToggle = (type: string) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    onTypeChange(updatedTypes);
  };

  return (
    <div className="space-y-2">
      {PROFESSIONAL_TYPES.map((type) => (
        <div key={type.id} className="flex items-center space-x-2">
          <Checkbox
            id={type.id}
            checked={selectedTypes.includes(type.id)}
            onCheckedChange={() => handleTypeToggle(type.id)}
          />
          <label
            htmlFor={type.id}
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {type.label}
          </label>
        </div>
      ))}
    </div>
  );
};