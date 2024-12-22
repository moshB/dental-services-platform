import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  schedule: string;
}

interface StaffCardProps {
  staff: StaffMember;
  onEdit: (staff: StaffMember) => void;
  onDelete: (id: number) => void;
}

export const StaffCard = ({ staff, onEdit, onDelete }: StaffCardProps) => {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg">{staff.name}</h3>
          <p className="text-sm text-muted-foreground">{staff.role}</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(staff)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(staff.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm">
          <span className="font-medium">Email:</span> {staff.email}
        </p>
        <p className="text-sm">
          <span className="font-medium">Phone:</span> {staff.phone}
        </p>
        <p className="text-sm">
          <span className="font-medium">Schedule:</span> {staff.schedule}
        </p>
      </div>
    </Card>
  );
};