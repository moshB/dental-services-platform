import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { BasicInfoForm } from "./settings/BasicInfoForm";
import { LogoUpload } from "./settings/LogoUpload";

export const SupplierSettings = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    business_name: "",
    business_type: "",
    website: "",
    phone: "",
    address: "",
    description: "",
    registration_number: "",
    logo_url: "",
  });

  useEffect(() => {
    fetchSupplierProfile();
  }, []);

  const fetchSupplierProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('supplier_profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      if (data) {
        setFormData(data);
      }
    } catch (error) {
      console.error('Error fetching supplier profile:', error);
      toast({
        title: "Error",
        description: "Failed to load your business profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLogoUpdate = (url: string) => {
    setFormData(prev => ({ ...prev, logo_url: url }));
  };

  return (
    <div className="space-y-6">
      <LogoUpload 
        logoUrl={formData.logo_url} 
        onLogoUpdate={handleLogoUpdate} 
      />
      <BasicInfoForm 
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};