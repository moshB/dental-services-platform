import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RatingsFilterProps {
  selectedRating: string;
  verifiedOnly: boolean;
  photosOnly: boolean;
  onRatingChange: (rating: string) => void;
  onVerifiedChange: (verified: boolean) => void;
  onPhotosChange: (photos: boolean) => void;
}

export const RatingsFilter = ({
  selectedRating,
  verifiedOnly,
  photosOnly,
  onRatingChange,
  onVerifiedChange,
  onPhotosChange,
}: RatingsFilterProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium mb-2 block">Minimum Rating</Label>
        <RadioGroup value={selectedRating} onValueChange={onRatingChange}>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="r5" />
              <Label htmlFor="r5">5★ Only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4" id="r4" />
              <Label htmlFor="r4">4★ and above</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="r3" />
              <Label htmlFor="r3">3★ and above</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="verified"
            checked={verifiedOnly}
            onCheckedChange={(checked) => onVerifiedChange(checked as boolean)}
          />
          <Label htmlFor="verified">Verified Reviews Only</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="photos"
            checked={photosOnly}
            onCheckedChange={(checked) => onPhotosChange(checked as boolean)}
          />
          <Label htmlFor="photos">Before/After Photos Available</Label>
        </div>
      </div>
    </div>
  );
};