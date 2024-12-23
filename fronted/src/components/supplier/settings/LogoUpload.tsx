import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface LogoUploadProps {
  logoUrl: string;
  onLogoUpdate: (url: string) => void;
}

export const LogoUpload = ({ logoUrl, onLogoUpdate }: LogoUploadProps) => {
  const { toast } = useToast();
  const [uploadingLogo, setUploadingLogo] = useState(false);

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      setUploadingLogo(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('supplier-logos')
        .upload(filePath, file, {
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('supplier-logos')
        .getPublicUrl(filePath);

      onLogoUpdate(publicUrl);

      toast({
        title: "Logo uploaded",
        description: "Your business logo has been updated successfully.",
      });
    } catch (error) {
      console.error('Error uploading logo:', error);
      toast({
        title: "Error",
        description: "Failed to upload logo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploadingLogo(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Upload className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Business Logo</h2>
      </div>
      
      <div className="space-y-4">
        <Label>Business Logo</Label>
        <div className="flex items-center gap-4">
          {logoUrl && (
            <img 
              src={logoUrl} 
              alt="Business Logo" 
              className="w-24 h-24 object-cover rounded-lg"
            />
          )}
          <div className="flex-1">
            <Input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              disabled={uploadingLogo}
              className="cursor-pointer"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Upload a square image for best results. Maximum size: 2MB
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};