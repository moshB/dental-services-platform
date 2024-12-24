import { useRef } from "react";
import { Calendar } from "lucide-react";
import { Card } from "../ui/card";
import { BookingForm } from "../BookingForm";
import { PrintToPdfButton } from "../PrintToPdfButton";

interface DashboardAppointmentsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const DashboardAppointments = ({ isOpen, onToggle }: DashboardAppointmentsProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="p-6 w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Schedule an Appointment
          </h2>
          <p className="text-muted-foreground">Schedule and manage your dental appointments</p>
        </div>
        <PrintToPdfButton targetRef={contentRef} filename="appointments" />
      </div>
      <div ref={contentRef}>
        <BookingForm />
      </div>
    </Card>
  );
};