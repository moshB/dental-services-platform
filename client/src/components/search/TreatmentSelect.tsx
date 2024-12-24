import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TreatmentSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  treatments: string[];
}

export const TreatmentSelect = ({ value, onValueChange, treatments }: TreatmentSelectProps) => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
      <Select value={value} onValueChange={onValueChange}>
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
  );
};