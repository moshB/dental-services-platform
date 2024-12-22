import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { User, Megaphone, Package2, Settings, Users } from "lucide-react";
import { StaffingTab } from "@/components/practice/StaffingTab";
import { CatalogSection } from "@/components/practice/CatalogSection";

const MaterialsPractice = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Practice Dashboard</h1>
        <Button
          variant="outline"
          onClick={() => navigate("/practice/settings")}
          className="gap-2"
        >
          <Settings className="h-4 w-4" />
          Practice Settings
        </Button>
      </div>
      
      <Tabs defaultValue="materials" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="hr" className="gap-2">
            <User className="h-4 w-4" />
            HR
          </TabsTrigger>
          <TabsTrigger value="marketing" className="gap-2">
            <Megaphone className="h-4 w-4" />
            Marketing
          </TabsTrigger>
          <TabsTrigger value="materials" className="gap-2">
            <Package2 className="h-4 w-4" />
            Materials
          </TabsTrigger>
          <TabsTrigger value="staffing" className="gap-2">
            <Users className="h-4 w-4" />
            Staffing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="hr" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Staff Management</h2>
              <p className="text-muted-foreground mb-4">Manage your dental practice staff</p>
              <Button className="w-full" onClick={() => navigate("/practice/staff")}>View Staff</Button>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Scheduling</h2>
              <p className="text-muted-foreground mb-4">Staff schedules and shifts</p>
              <Button className="w-full" onClick={() => navigate("/practice/scheduling")}>Manage Schedule</Button>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Training</h2>
              <p className="text-muted-foreground mb-4">Staff training and development</p>
              <Button className="w-full" onClick={() => navigate("/practice/training")}>View Training</Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="marketing" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Campaigns</h2>
              <p className="text-muted-foreground mb-4">Manage marketing campaigns</p>
              <Button className="w-full">View Campaigns</Button>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Patient Reviews</h2>
              <p className="text-muted-foreground mb-4">Monitor and respond to reviews</p>
              <Button className="w-full">Manage Reviews</Button>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Social Media</h2>
              <p className="text-muted-foreground mb-4">Social media management</p>
              <Button className="w-full">View Social</Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="materials" className="space-y-6">
          <CatalogSection />
        </TabsContent>

        <TabsContent value="staffing" className="space-y-6">
          <StaffingTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MaterialsPractice;
