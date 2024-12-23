import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2 } from "lucide-react";

interface BusinessNameFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export const BusinessNameField = ({ value, onChange }: BusinessNameFieldProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Building2 className="h-4 w-4 text-muted-foreground" />
        <Label htmlFor="businessName">Business Name</Label>
      </div>
      <Input 
        id="businessName" 
        value={value || ''} 
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter business name" 
      />
    </div>
  );
};