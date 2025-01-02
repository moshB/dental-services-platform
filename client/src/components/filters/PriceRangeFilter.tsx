import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PRICE_OPTIONS = Array.from({ length: 61 }, (_, i) => i * 50); // 0 to 3000 in steps of 50

interface PriceRange {
  min: number;
  max: number;
  paymentPlan: boolean;
  freeConsultation: boolean;
}

export const PriceRangeFilter = ({ 
  priceRange,
  onPriceRangeChange 
}: {
  priceRange: PriceRange;
  onPriceRangeChange: (priceRange: PriceRange) => void;
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-medium mb-2 block">Minimum Price (£)</Label>
          <Select
            value={priceRange.min.toString()}
            onValueChange={(value) => 
              onPriceRangeChange({ 
                ...priceRange, 
                min: Number(value),
                max: Math.max(Number(value), priceRange.max)
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select minimum price" />
            </SelectTrigger>
            <SelectContent>
              {PRICE_OPTIONS.map((price) => (
                <SelectItem key={price} value={price.toString()}>
                  £{price}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-sm font-medium mb-2 block">Maximum Price (£)</Label>
          <Select
            value={priceRange.max.toString()}
            onValueChange={(value) => 
              onPriceRangeChange({ 
                ...priceRange, 
                max: Number(value),
                min: Math.min(Number(value), priceRange.min)
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select maximum price" />
            </SelectTrigger>
            <SelectContent>
              {PRICE_OPTIONS.map((price) => (
                <SelectItem key={price} value={price.toString()}>
                  £{price}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm">Payment Plans Available</Label>
          <Switch
            checked={priceRange.paymentPlan}
            onCheckedChange={(checked) => 
              onPriceRangeChange({ ...priceRange, paymentPlan: checked })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <Label className="text-sm">Free Initial Consultation</Label>
          <Switch
            checked={priceRange.freeConsultation}
            onCheckedChange={(checked) => 
              onPriceRangeChange({ ...priceRange, freeConsultation: checked })
            }
          />
        </div>
      </div>
    </div>
  );
};