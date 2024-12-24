import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, Plus, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Campaign {
  id: number;
  name: string;
  status: "active" | "draft" | "completed";
  startDate: string;
  endDate: string;
  reach: number;
  budget: number;
}

const Campaigns = () => {
  const { toast } = useToast();
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: "Spring Cleaning Special",
      status: "active",
      startDate: "2024-03-01",
      endDate: "2024-04-30",
      reach: 5000,
      budget: 1000,
    },
    {
      id: 2,
      name: "Family Dental Package",
      status: "draft",
      startDate: "2024-05-01",
      endDate: "2024-06-30",
      reach: 3000,
      budget: 750,
    },
  ]);

  const handleCreateCampaign = () => {
    toast({
      title: "Create Campaign",
      description: "This would open a form to create a new campaign",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Marketing Campaigns</h1>
        </div>
        <Button onClick={handleCreateCampaign} className="gap-2">
          <Plus className="h-4 w-4" />
          New Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Active Campaigns</h3>
          </div>
          <p className="text-2xl font-bold">
            {campaigns.filter((c) => c.status === "active").length}
          </p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Scheduled</h3>
          </div>
          <p className="text-2xl font-bold">
            {campaigns.filter((c) => c.status === "draft").length}
          </p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Total Reach</h3>
          </div>
          <p className="text-2xl font-bold">
            {campaigns.reduce((acc, curr) => acc + curr.reach, 0).toLocaleString()}
          </p>
        </Card>
      </div>

      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg mb-2">{campaign.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Start Date: {campaign.startDate}</p>
                  <p>End Date: {campaign.endDate}</p>
                  <p>Expected Reach: {campaign.reach.toLocaleString()}</p>
                  <p>Budget: ${campaign.budget}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  campaign.status === "active"
                    ? "bg-green-100 text-green-800"
                    : campaign.status === "draft"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;