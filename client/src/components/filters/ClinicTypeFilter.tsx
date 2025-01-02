import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ClinicTypeFilterProps {
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
}

export const ClinicTypeFilter = ({
  selectedTypes,
  onTypeChange,
}: ClinicTypeFilterProps) => {
  const clinicTypes = [
    { id: "private", label: "Private Practice" },
    { id: "hospital", label: "Dental Hospital" },
    { id: "orthodontic", label: "Orthodontic Clinic" },
    { id: "hygiene", label: "Dental Hygiene-Only Clinic" },
    { id: "nhs", label: "NHS Practice" },
    { id: "mixed", label: "Mixed NHS/Private Practice" },
  ];

  const handleTypeToggle = (type: string) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    onTypeChange(updatedTypes);
  };

  return (
    <div className="space-y-2">
      {clinicTypes.map((type) => (
        <div key={type.id} className="flex items-center space-x-2">
          <Checkbox
            id={`type-${type.id}`}
            checked={selectedTypes.includes(type.id)}
            onCheckedChange={() => handleTypeToggle(type.id)}
          />
          <Label htmlFor={`type-${type.id}`}>{type.label}</Label>
        </div>
      ))}
    </div>
  );
};