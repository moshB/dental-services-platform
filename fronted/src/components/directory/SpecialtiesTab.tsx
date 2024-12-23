import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const specialties = [
  'General Dentistry',
  'Orthodontics',
  'Periodontics',
  'Endodontics',
  'Prosthodontics',
  'Oral Surgery',
  'Pediatric Dentistry',
  'Cosmetic Dentistry',
  'Implant Dentistry',
  'Emergency Dental Care'
];

export const SpecialtiesTab = () => {
  return (
    <ScrollArea className="h-[600px] rounded-md border p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {specialties.map((specialty) => (
          <Link
            key={specialty}
            to={`/practices/search?specialty=${encodeURIComponent(specialty)}`}
            className="p-4 border rounded-lg hover:bg-accent transition-colors"
          >
            <h3 className="font-semibold mb-2">{specialty}</h3>
            <p className="text-sm text-muted-foreground">
              {Math.floor(Math.random() * 100 + 20)} specialists
            </p>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
};