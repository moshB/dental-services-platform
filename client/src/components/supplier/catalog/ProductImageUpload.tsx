import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Upload } from "lucide-react";

interface ProductImageUploadProps {
  imageUrl?: string;
  onImageUpload: (url: string) => void;
}

export const ProductImageUpload = ({ imageUrl, onImageUpload }: ProductImageUploadProps) => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("File size must be less than 5MB");
      }

      // Check file type
      if (!file.type.startsWith("image/")) {
        throw new Error("File must be an image");
      }

      const fileExt = file.name.split(".").pop();
      const filePath = `${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError, data } = await supabase.storage
        .from("supplier-products")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("supplier-products")
        .getPublicUrl(filePath);

      onImageUpload(publicUrl);
      
      toast({
        title: "Image uploaded",
        description: "Product image has been uploaded successfully.",
      });
    } catch (error: any) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload product image.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Label htmlFor="image">Product Image</Label>
      <div className="mt-2 flex items-center gap-4">
        <div className="relative">
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="cursor-pointer"
          />
          {uploading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
              <div className="animate-spin text-white">
                <Upload className="h-4 w-4" />
              </div>
            </div>
          )}
        </div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Product preview"
            className="h-20 w-20 object-cover rounded"
          />
        )}
      </div>
      <p className="text-sm text-muted-foreground">
        Supported formats: JPG, PNG, GIF. Max file size: 5MB
      </p>
    </div>
  );
};