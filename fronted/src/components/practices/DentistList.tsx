import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Dentist {
  name: string;
  specialties: string[];
  experience: string;
  education: string;
  languages: string[];
}

interface DentistListProps {
  dentists: Dentist[];
  practiceId: number;
}

export const DentistList = ({ dentists, practiceId }: DentistListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dentists.map((dentist, index) => (
        <Card key={index} className="p-4">
          <Link to={`/practices/dentist/${index + 1}`}>
            <h4 className="font-semibold hover:text-primary">{dentist.name}</h4>
          </Link>
          <p className="text-sm text-muted-foreground mb-2">
            {dentist.experience} experience
          </p>
          <div className="space-y-2">
            <div>
              <span className="text-sm font-medium">Specialties:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {dentist.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm font-medium">Education:</span>
              <p className="text-sm text-muted-foreground">{dentist.education}</p>
            </div>
            <div>
              <span className="text-sm font-medium">Languages:</span>
              <p className="text-sm text-muted-foreground">
                {dentist.languages.join(", ")}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};