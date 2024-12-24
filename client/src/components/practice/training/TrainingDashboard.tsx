import { useState } from "react";
import { Card } from "@/components/ui/card";
import { TableFilter } from "@/components/supplier/TableFilter";
import { TableDownloadButtons } from "@/components/supplier/TableDownloadButtons";
import { useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Book, CheckCircle, XCircle } from "lucide-react";

interface TrainingStatus {
  id: number;
  staffName: string;
  role: string;
  training: string;
  dueDate: string;
  status: "completed" | "pending" | "overdue";
}

const initialTrainings: TrainingStatus[] = [
  {
    id: 1,
    staffName: "Dr. Sarah Johnson",
    role: "Dentist",
    training: "Annual HIPAA Compliance",
    dueDate: "2024-04-15",
    status: "pending",
  },
  {
    id: 2,
    staffName: "James Smith",
    role: "Dental Hygienist",
    training: "Infection Control Update",
    dueDate: "2024-03-30",
    status: "completed",
  },
  {
    id: 3,
    staffName: "Dr. Sarah Johnson",
    role: "Dentist",
    training: "CPR Recertification",
    dueDate: "2024-02-28",
    status: "overdue",
  },
];

export const TrainingDashboard = () => {
  const [trainings, setTrainings] = useState<TrainingStatus[]>(initialTrainings);
  const [filteredTrainings, setFilteredTrainings] = useState<TrainingStatus[]>(trainings);
  const tableRef = useRef<HTMLDivElement>(null);

  const handleFilter = (searchTerm: string) => {
    const filtered = trainings.filter(
      (training) =>
        training.staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        training.training.toLowerCase().includes(searchTerm.toLowerCase()) ||
        training.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrainings(filtered);
  };

  const getStatusBadge = (status: TrainingStatus["status"]) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500"><CheckCircle className="w-4 h-4 mr-1" /> Completed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500"><Book className="w-4 h-4 mr-1" /> Pending</Badge>;
      case "overdue":
        return <Badge className="bg-red-500"><XCircle className="w-4 h-4 mr-1" /> Overdue</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Training Status Dashboard</h2>
        <div className="flex gap-4">
          <TableFilter
            onFilterChange={handleFilter}
            placeholder="Search staff, training, or role..."
          />
          <TableDownloadButtons
            data={filteredTrainings}
            filename="training-status"
            tableRef={tableRef}
          />
        </div>
      </div>

      <div ref={tableRef}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Staff Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Training</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTrainings.map((training) => (
              <TableRow key={training.id}>
                <TableCell>{training.staffName}</TableCell>
                <TableCell>{training.role}</TableCell>
                <TableCell>{training.training}</TableCell>
                <TableCell>{training.dueDate}</TableCell>
                <TableCell>{getStatusBadge(training.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};