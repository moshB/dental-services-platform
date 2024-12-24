import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Scheduling = () => {
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
        <h1 className="text-3xl font-bold">Staff Scheduling</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Schedule Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">View and manage staff schedules</p>
            <Button className="w-full">View Schedule</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shift Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Create and modify staff shifts</p>
            <Button className="w-full">Manage Shifts</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Time Off Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Handle staff time off requests</p>
            <Button className="w-full">View Requests</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Scheduling;