import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface InsurancePaymentFilterProps {
  selectedInsurance: string;
  paymentPlan: boolean;
  digitalPayments: boolean;
  onInsuranceChange: (insurance: string) => void;
  onPaymentPlanChange: (enabled: boolean) => void;
  onDigitalPaymentsChange: (enabled: boolean) => void;
}

export const InsurancePaymentFilter = ({
  selectedInsurance,
  paymentPlan,
  digitalPayments,
  onInsuranceChange,
  onPaymentPlanChange,
  onDigitalPaymentsChange,
}: InsurancePaymentFilterProps) => {
  const insuranceProviders = [
    { value: "axa", label: "AXA" },
    { value: "bupa", label: "BUPA" },
    { value: "vitality", label: "Vitality" },
    { value: "aviva", label: "Aviva" },
    { value: "cigna", label: "Cigna" },
  ];

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium mb-2 block">Insurance Provider</Label>
        <Select value={selectedInsurance} onValueChange={onInsuranceChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select insurance provider" />
          </SelectTrigger>
          <SelectContent>
            {insuranceProviders.map((provider) => (
              <SelectItem key={provider.value} value={provider.value}>
                {provider.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="payment-plan"
            checked={paymentPlan}
            onCheckedChange={(checked) => onPaymentPlanChange(checked as boolean)}
          />
          <Label htmlFor="payment-plan">Payment Plans Available</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="digital-payments"
            checked={digitalPayments}
            onCheckedChange={(checked) => onDigitalPaymentsChange(checked as boolean)}
          />
          <Label htmlFor="digital-payments">Digital Payments Accepted</Label>
        </div>
      </div>
    </div>
  );
};