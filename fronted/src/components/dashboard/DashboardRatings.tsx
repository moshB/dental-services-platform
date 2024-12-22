import { useRef } from "react";
import { Star } from "lucide-react";
import { Card } from "../ui/card";
import { PatientRatings } from "../PatientRatings";
import { PrintToPdfButton } from "../PrintToPdfButton";

interface DashboardRatingsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const DashboardRatings = ({ isOpen, onToggle }: DashboardRatingsProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="p-6 w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Star className="h-5 w-5" />
            My Ratings
          </h2>
          <p className="text-muted-foreground">View your ratings and reviews</p>
        </div>
        <PrintToPdfButton targetRef={contentRef} filename="ratings" />
      </div>
      <div ref={contentRef}>
        <PatientRatings />
      </div>
    </Card>
  );
};