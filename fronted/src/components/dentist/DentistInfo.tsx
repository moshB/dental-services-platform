import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import { DentistProfile } from "@/types/dentist";

interface DentistInfoProps {
  dentist: DentistProfile;
}

export const DentistInfo = ({ dentist }: DentistInfoProps) => {
  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-muted-foreground">{dentist.about}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Education & Qualifications</h2>
        <ul className="space-y-2">
          {dentist.education.map((edu, index) => (
            <li key={index} className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>{edu}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Languages</h2>
        <p>{dentist.languages.join(", ")}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p>{dentist.experience}</p>
      </section>
    </div>
  );
};