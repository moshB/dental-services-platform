import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface PracticeTypeFilterProps {
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
}

export const PracticeTypeFilter = ({
  selectedTypes,
  onTypeChange,
}: PracticeTypeFilterProps) => {
  return (
    <ToggleGroup
      type="multiple"
      value={selectedTypes}
      onValueChange={onTypeChange}
      className="flex justify-start gap-2"
    >
      <ToggleGroupItem value="nhs" aria-label="Toggle NHS">
        NHS
      </ToggleGroupItem>
      <ToggleGroupItem value="private" aria-label="Toggle Private">
        Private
      </ToggleGroupItem>
      <ToggleGroupItem value="mixed" aria-label="Toggle Mixed">
        Mixed
      </ToggleGroupItem>
    </ToggleGroup>
  );
};