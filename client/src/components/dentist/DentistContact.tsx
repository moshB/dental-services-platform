import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import { DentistProfile } from "@/types/dentist";

interface DentistContactProps {
  dentist: DentistProfile;
}

export const DentistContact = ({ dentist }: DentistContactProps) => {
  const formatWebsiteUrl = (website: string) => {
    return website.startsWith('http') ? website : `https://${website}`;
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 space-y-4">
        <h3 className="font-semibold">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{dentist.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <a href={`tel:${dentist.phone}`} className="hover:text-primary transition-colors">
              {dentist.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a href={`mailto:${dentist.email}`} className="hover:text-primary transition-colors">
              {dentist.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <a 
              href={formatWebsiteUrl(dentist.website)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {dentist.website}
            </a>
          </div>
        </div>
      </Card>

      <Card className="p-6 space-y-4">
        <h3 className="font-semibold">Working Hours</h3>
        <div className="space-y-2">
          {Object.entries(dentist.workingHours).map(([day, hours]) => (
            <div key={day} className="flex items-center justify-between">
              <span>{day}</span>
              <span>{hours}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};