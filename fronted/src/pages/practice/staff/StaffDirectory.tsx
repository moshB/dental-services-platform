import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StaffingTab } from "@/components/practice/StaffingTab";

const StaffDirectory = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/practice/staff")}
          className="mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Staff Management
        </Button>
        <h1 className="text-2xl font-bold">Staff Directory</h1>
      </div>

      <StaffingTab />
    </div>
  );
};

export default StaffDirectory;