import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface BusinessTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const BusinessTypeSelect = ({ value, onChange }: BusinessTypeSelectProps) => {
  return (
    <div className="space-y-2">
      <Label>Business Type</Label>
      <RadioGroup 
        value={value || ''} 
        onValueChange={onChange}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="laboratory" id="laboratory" />
          <Label htmlFor="laboratory">Laboratory</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="material_provider" id="material_provider" />
          <Label htmlFor="material_provider">Material Provider</Label>
        </div>
      </RadioGroup>
    </div>
  );
};