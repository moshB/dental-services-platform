import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StaffForm } from "./StaffForm";
import { StaffCard } from "./StaffCard";
import { RolesPermissionsTable } from "./RolesPermissionsTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  schedule: string;
}

export const StaffingTab = () => {
  const { toast } = useToast();
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Dentist",
      email: "sarah.j@example.com",
      phone: "+44 123 456 7890",
      schedule: "Mon-Fri",
    },
    {
      id: 2,
      name: "James Smith",
      role: "Dental Hygienist",
      email: "james.s@example.com",
      phone: "+44 123 456 7891",
      schedule: "Mon-Wed",
    },
  ]);
  const [editingStaff, setEditingStaff] = useState<StaffMember | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSave = (staff: StaffMember) => {
    if (editingStaff) {
      setStaffMembers(members =>
        members.map(m => (m.id === staff.id ? staff : m))
      );
      toast({
        title: "Staff Updated",
        description: `${staff.name}'s information has been updated.`,
      });
    } else {
      setStaffMembers(members => [...members, { ...staff, id: members.length + 1 }]);
      toast({
        title: "Staff Added",
        description: `${staff.name} has been added to the team.`,
      });
    }
    setIsDialogOpen(false);
    setEditingStaff(null);
  };

  const handleDelete = (id: number) => {
    const staff = staffMembers.find(m => m.id === id);
    setStaffMembers(members => members.filter(m => m.id !== id));
    toast({
      title: "Staff Removed",
      description: `${staff?.name} has been removed from the team.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Staff Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingStaff(null)} className="gap-2">
              <UserPlus className="h-4 w-4" />
              Add Staff Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingStaff ? "Edit Staff Member" : "Add New Staff Member"}
              </DialogTitle>
            </DialogHeader>
            <StaffForm
              initialData={editingStaff}
              onSave={handleSave}
              onCancel={() => {
                setIsDialogOpen(false);
                setEditingStaff(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="roles">
          <AccordionTrigger className="text-lg font-semibold">
            Roles & Permissions
          </AccordionTrigger>
          <AccordionContent>
            <div className="mt-4">
              <RolesPermissionsTable />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {staffMembers.map(staff => (
          <StaffCard
            key={staff.id}
            staff={staff}
            onEdit={(staff) => {
              setEditingStaff(staff);
              setIsDialogOpen(true);
            }}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};