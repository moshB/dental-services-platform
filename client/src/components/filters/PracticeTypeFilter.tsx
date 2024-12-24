import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export const PracticeTypeFilter = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const practiceTypes = [
    { id: "nhs", label: "NHS" },
    { id: "private", label: "Private" },
    { id: "mixed", label: "Mixed" }
  ];

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(current =>
      current.includes(type)
        ? current.filter(t => t !== type)
        : [...current, type]
    );
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium mb-2 block">Practice Type</label>
      <div className="space-y-2">
        {practiceTypes.map((type) => (
          <div key={type.id} className="flex items-center space-x-2">
            <Checkbox
              id={`type-${type.id}`}
              checked={selectedTypes.includes(type.id)}
              onCheckedChange={() => handleTypeToggle(type.id)}
            />
            <label
              htmlFor={`type-${type.id}`}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {type.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};