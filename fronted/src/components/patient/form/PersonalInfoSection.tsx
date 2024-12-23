import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoSectionProps {
  profile: {
    full_name: string;
    date_of_birth: string;
    email: string;
    phone: string;
    address: string;
    nhs_number: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean;
}

export const PersonalInfoSection = ({ profile, handleChange, isEditing }: PersonalInfoSectionProps) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="full_name">Full Name</Label>
        <Input
          id="full_name"
          name="full_name"
          value={profile.full_name || ""}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="John Doe"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="date_of_birth">Date of Birth</Label>
        <Input
          id="date_of_birth"
          name="date_of_birth"
          type="date"
          value={profile.date_of_birth || ""}
          onChange={handleChange}
          disabled={!isEditing}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={profile.email || ""}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="john.doe@example.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          value={profile.phone || ""}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="07123456789"
          pattern="[0-9]{11}"
          title="Please enter a valid UK phone number"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={profile.address || ""}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="123 Main St, City, Postcode"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="nhs_number">NHS Number</Label>
        <Input
          id="nhs_number"
          name="nhs_number"
          value={profile.nhs_number || ""}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="123 456 7890"
          pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
          title="Please enter a valid NHS number (format: XXX XXX XXXX)"
        />
      </div>
    </div>
  );
};