import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const PROCEDURES = {
  "Consultation": 50,
  "Check-up": 75,
  "Cleaning": 100,
  "X-Ray": 80,
  "Filling": 150,
  "Root Canal": 800,
  "Crown": 1000,
  "Extraction": 200,
  "Whitening": 400,
  "Implant": 2500,
  "Braces": 5000,
  "Dentures": 1500
};

export const PricingSettings = ({ form }: { form: any }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {Object.entries(PROCEDURES).map(([procedure, suggestedPrice]) => (
        <FormField
          key={procedure}
          control={form.control}
          name={`pricing.${procedure}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{procedure}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  placeholder={`Suggested: £${suggestedPrice}`}
                />
              </FormControl>
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};