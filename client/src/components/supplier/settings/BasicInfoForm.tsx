import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BusinessNameField } from "./business-info/BusinessNameField";
import { BusinessTypeSelect } from "./business-info/BusinessTypeSelect";
import { ContactFields } from "./business-info/ContactFields";

interface BasicInfoFormProps {
  formData: {
    business_name: string;
    business_type: string;
    website: string;
    phone: string;
    address: string;
  };
  setFormData: (data: any) => void;
}

export const BasicInfoForm = ({ formData, setFormData }: BasicInfoFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('No authenticated user found');
      }

      const { error } = await supabase
        .from('supplier_profiles')
        .upsert({
          id: user.id,
          business_name: formData.business_name,
          business_type: formData.business_type,
          website: formData.website,
          phone: formData.phone,
          address: formData.address,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'id'
        });

      if (error) throw error;

      toast({
        title: "Settings Saved",
        description: "Your business details have been updated successfully.",
      });
    } catch (error: any) {
      console.error('Error saving supplier profile:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save your business details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Business Information</h2>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BusinessNameField 
            value={formData.business_name}
            onChange={(value) => handleChange('business_name', value)}
          />

          <BusinessTypeSelect
            value={formData.business_type}
            onChange={(value) => handleChange('business_type', value)}
          />

          <ContactFields
            website={formData.website}
            phone={formData.phone}
            address={formData.address}
            onFieldChange={handleChange}
          />
        </div>

        <Button 
          onClick={handleSave} 
          className="w-full md:w-auto"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </Card>
  );
};