import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import InputMask from "react-input-mask";

interface ContactSectionProps {
  contactMethod: "email" | "phone";
  setContactMethod: (method: "email" | "phone") => void;
  existingPhone?: string;
}

const isValidUKPhoneNumber = (phone: string) => {
  // UK phone number regex pattern
  const ukPhonePattern = /^(?:(?:\+44)|(?:0))(?:(?:(?:1\d{8,9})|(?:7[0-9]\d{8})|(?:2[0-9]\d{8})|(?:3[0-9]\d{8})|(?:5[0-9]\d{8})|(?:8[0-9]\d{8})|(?:9[0-9]\d{8})))$/;
  const cleanPhone = phone.replace(/\s+/g, "").replace(/[()-]/g, "");
  return ukPhonePattern.test(cleanPhone);
};

export const ContactSection = ({ contactMethod, setContactMethod, existingPhone }: ContactSectionProps) => {
  const [phoneChanged, setPhoneChanged] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value && !isValidUKPhoneNumber(value)) {
      setPhoneError("Please enter a valid UK phone number");
    } else {
      setPhoneError(null);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Preferred Contact Method</Label>
        <RadioGroup
          defaultValue="email"
          onValueChange={(value) => setContactMethod(value as "email" | "phone")}
          className="flex gap-4 mt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone" />
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> Phone
            </Label>
          </div>
        </RadioGroup>
      </div>

      {contactMethod === "email" && (
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      )}

      {contactMethod === "phone" && (
        <div className="space-y-4">
          {existingPhone && (
            <div className="space-y-2">
              <Label>Has your phone number changed?</Label>
              <RadioGroup
                defaultValue="no"
                onValueChange={(value) => setPhoneChanged(value === "yes")}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-change" />
                  <Label htmlFor="no-change">No, use {existingPhone}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-change" />
                  <Label htmlFor="yes-change">Yes, update it</Label>
                </div>
              </RadioGroup>
            </div>
          )}
          {(!existingPhone || phoneChanged) && (
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <InputMask
                mask="+44 999 999 9999"
                id="phone"
                name="phone"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="+44 ___ ___ ____"
                required
                onChange={handlePhoneChange}
              />
              {phoneError && (
                <p className="text-sm text-destructive mt-1">{phoneError}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};