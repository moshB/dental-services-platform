import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const PAYMENT_METHODS = {
  "Cards": ["Visa", "Mastercard", "American Express", "Debit Cards"],
  "Digital": ["Apple Pay", "Google Pay", "PayPal", "Bank Transfer"],
  "Insurance": ["NHS", "Private Insurance", "Corporate Plans"],
  "Financing": ["Payment Plans", "Care Credit", "0% Finance"],
  "Other": ["Cash", "Cheque", "Gift Cards"]
};

export const PaymentMethodsSettings = ({ form }: { form: any }) => {
  return (
    <div className="space-y-6">
      {Object.entries(PAYMENT_METHODS).map(([category, methods]) => (
        <FormField
          key={category}
          control={form.control}
          name={`paymentMethods.${category}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{category}</FormLabel>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {methods.map((method) => (
                  <div key={method} className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value?.includes(method)}
                      onCheckedChange={(checked) => {
                        const updatedMethods = checked
                          ? [...(field.value || []), method]
                          : (field.value || []).filter((m: string) => m !== method);
                        field.onChange(updatedMethods);
                      }}
                    />
                    <label className="text-sm">{method}</label>
                  </div>
                ))}
              </div>
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};