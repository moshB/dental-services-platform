import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Settings, MapPin, Phone, Globe, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SupplierSettings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your business details have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Settings className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Business Information</h2>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="businessName">Business Name</Label>
              </div>
              <Input id="businessName" placeholder="Enter business name" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="website">Website</Label>
              </div>
              <Input id="website" type="url" placeholder="https://example.com" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="phone">Business Phone</Label>
              </div>
              <Input id="phone" type="tel" placeholder="+44 (0) 123 456 7890" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="address">Business Address</Label>
              </div>
              <Input id="address" placeholder="Enter business address" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Business Description</Label>
            <Textarea 
              id="description" 
              placeholder="Tell us about your business..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="registrationNumber">Company Registration Number</Label>
            <Input id="registrationNumber" placeholder="Enter registration number" />
          </div>

          <Button onClick={handleSave} className="w-full md:w-auto">
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
};