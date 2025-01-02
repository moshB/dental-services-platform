import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SocialMediaFilterProps {
  hasBeforeAfter: boolean;
  onBeforeAfterChange: (value: boolean) => void;
}

export const SocialMediaFilter = ({
  hasBeforeAfter,
  onBeforeAfterChange,
}: SocialMediaFilterProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm">Before/After Photos Available</Label>
        <Switch
          checked={hasBeforeAfter}
          onCheckedChange={onBeforeAfterChange}
        />
      </div>
    </div>
  );
};