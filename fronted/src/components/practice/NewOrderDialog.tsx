import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const providerTemplates = {
  "Henry Schein": [
    { name: "Dental Mirrors", unit: "piece", defaultQuantity: 50 },
    { name: "Disposable Gloves", unit: "box", defaultQuantity: 10 },
    { name: "Dental Burs", unit: "pack", defaultQuantity: 5 },
  ],
  "Patterson Dental": [
    { name: "Composite Filling Material", unit: "syringe", defaultQuantity: 20 },
    { name: "Impression Material", unit: "kit", defaultQuantity: 5 },
    { name: "Temporary Crown Material", unit: "pack", defaultQuantity: 3 },
  ],
  "3M Oral Care": [
    { name: "Orthodontic Brackets", unit: "pack", defaultQuantity: 10 },
    { name: "Bonding Agent", unit: "bottle", defaultQuantity: 5 },
    { name: "Polishing Discs", unit: "pack", defaultQuantity: 8 },
  ],
};

export const NewOrderDialog = () => {
  const [open, setOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      items: [],
    },
  });

  const handleProviderSelect = (provider: string) => {
    setSelectedProvider(provider);
    const templateItems = providerTemplates[provider as keyof typeof providerTemplates];
    form.reset({
      items: templateItems.map(item => ({
        name: item.name,
        quantity: item.defaultQuantity,
        unit: item.unit,
      })),
    });
  };

  const onSubmit = (data: any) => {
    toast({
      title: "Order Created",
      description: `New order created with ${selectedProvider}`,
    });
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>New Order</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Order</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Select onValueChange={handleProviderSelect}>
            <SelectTrigger>
              <SelectValue placeholder="Select a provider" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(providerTemplates).map((provider) => (
                <SelectItem key={provider} value={provider}>
                  {provider}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedProvider && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                {providerTemplates[selectedProvider as keyof typeof providerTemplates].map((item, index) => (
                  <FormField
                    key={item.name}
                    control={form.control}
                    name={`items.${index}.quantity`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{item.name}</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              {...field}
                              defaultValue={item.defaultQuantity}
                            />
                            <span className="text-sm text-gray-500">{item.unit}</span>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
                <Button type="submit" className="w-full">
                  Place Order
                </Button>
              </form>
            </Form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
