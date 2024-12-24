import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { DentistProfile } from "@/types/dentist";

interface DentistHeaderProps {
  dentist: DentistProfile;
}

export const DentistHeader = ({ dentist }: DentistHeaderProps) => {
  return (
    <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${dentist.image})` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative h-full flex items-end pb-8">
        <div className="text-white space-y-2">
          <h1 className="text-4xl font-bold">{dentist.name}</h1>
          <p className="text-lg">GDC Number: {dentist.gdcNumber}</p>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-primary/20">
              {dentist.specialty}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{dentist.rating}</span>
              <span className="text-sm">({dentist.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};