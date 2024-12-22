import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrainingDashboard } from "@/components/practice/training/TrainingDashboard";

const Training = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/practice/materials")}
          className="mr-4 font-bold"
        >
          <ArrowLeft className="h-6 w-6 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-3xl font-bold">Staff Training Management</h1>
      </div>

      <TrainingDashboard />
    </div>
  );
};

export default Training;