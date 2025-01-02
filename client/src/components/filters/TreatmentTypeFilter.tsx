import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const TREATMENTS = [
  { id: "emergency", label: "Emergency Treatment" },
  { id: "check-up", label: "Routine Check-up & Cleaning" },
  { id: "scale-polish", label: "Scale and Polish" },
  { id: "whitening", label: "Teeth Whitening" },
  { id: "implants", label: "Dental Implants" },
  { id: "root-canal", label: "Root Canal Treatment" },
  { id: "gum-disease", label: "Gum Disease Treatment" },
  { id: "braces", label: "Braces/Aligners" }
];

export const TreatmentTypeFilter = ({ 
  selectedTreatment,
  onTreatmentChange 
}: {
  selectedTreatment: string;
  onTreatmentChange: (treatment: string) => void;
}) => {
  return (
    <RadioGroup
      value={selectedTreatment}
      onValueChange={onTreatmentChange}
      className="space-y-2"
    >
      {TREATMENTS.map((treatment) => (
        <div key={treatment.id} className="flex items-center space-x-2">
          <RadioGroupItem value={treatment.id} id={treatment.id} />
          <Label htmlFor={treatment.id}>{treatment.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};