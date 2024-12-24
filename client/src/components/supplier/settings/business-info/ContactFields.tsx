import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe, Phone, MapPin } from "lucide-react";

interface ContactFieldsProps {
  website: string;
  phone: string;
  address: string;
  onFieldChange: (field: string, value: string) => void;
}

export const ContactFields = ({ website, phone, address, onFieldChange }: ContactFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="website">Website</Label>
        </div>
        <Input 
          id="website" 
          type="url" 
          value={website || ''} 
          onChange={(e) => onFieldChange('website', e.target.value)}
          placeholder="https://example.com" 
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="phone">Business Phone</Label>
        </div>
        <Input 
          id="phone" 
          type="tel" 
          value={phone || ''} 
          onChange={(e) => onFieldChange('phone', e.target.value)}
          placeholder="+44 (0) 123 456 7890" 
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="address">Business Address</Label>
        </div>
        <Input 
          id="address" 
          value={address || ''} 
          onChange={(e) => onFieldChange('address', e.target.value)}
          placeholder="Enter business address" 
        />
      </div>
    </>
  );
};