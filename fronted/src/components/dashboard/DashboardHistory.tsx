import { useRef } from "react";
import { ClipboardList } from "lucide-react";
import { Card } from "../ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "../ui/table";
import { Button } from "../ui/button";
import { PrintToPdfButton } from "../PrintToPdfButton";

interface Treatment {
  id: number;
  date: string;
  treatment: string;
  doctor: string;
  cost: number;
  invoice: string;
}

interface DashboardHistoryProps {
  isOpen: boolean;
  onToggle: () => void;
  treatmentHistory: Treatment[];
}

export const DashboardHistory = ({ isOpen, onToggle, treatmentHistory }: DashboardHistoryProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="p-6 w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Treatment History
          </h2>
          <p className="text-muted-foreground">Access your dental treatment records</p>
        </div>
        <PrintToPdfButton targetRef={contentRef} filename="treatment-history" />
      </div>
      <div ref={contentRef} className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Treatment</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead className="text-right">Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {treatmentHistory.map((treatment) => (
              <TableRow key={treatment.id}>
                <TableCell>{new Date(treatment.date).toLocaleDateString()}</TableCell>
                <TableCell>{treatment.treatment}</TableCell>
                <TableCell>{treatment.doctor}</TableCell>
                <TableCell>
                  <Button variant="link" className="p-0">
                    {treatment.invoice}
                  </Button>
                </TableCell>
                <TableCell className="text-right">${treatment.cost.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};