import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const dentists = [
  { id: 1, name: 'Dr. Sarah Johnson', specialties: ['General Dentistry', 'Cosmetic Dentistry'] },
  { id: 2, name: 'Dr. James Smith', specialties: ['Orthodontics'] },
  { id: 3, name: 'Dr. Emily Brown', specialties: ['Pediatric Dentistry'] },
  { id: 4, name: 'Dr. Michael Wilson', specialties: ['Oral Surgery', 'Implant Dentistry'] },
  { id: 5, name: 'Dr. Lisa Davis', specialties: ['Periodontics'] },
].sort((a, b) => a.name.localeCompare(b.name));

export const DentistsTab = () => {
  return (
    <ScrollArea className="h-[600px] rounded-md border p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dentists.map((dentist) => (
          <Link
            key={dentist.id}
            to={`/practices/dentist/${dentist.id}`}
            className="p-4 border rounded-lg hover:bg-accent transition-colors"
          >
            <h3 className="font-semibold mb-2">{dentist.name}</h3>
            <div className="flex flex-wrap gap-1">
              {dentist.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="text-xs bg-muted px-2 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
};