import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RolesPermissionsTable } from "@/components/practice/RolesPermissionsTable";

const RolesManagement = () => {
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
        <h1 className="text-2xl font-bold">Roles & Permissions</h1>
      </div>

      <div className="mt-6">
        <RolesPermissionsTable />
      </div>
    </div>
  );
};

export default RolesManagement;