import { Card } from "@/components/ui/card";
import { BarChart2, Users, Share2 } from "lucide-react";

interface SocialMediaStatsProps {
  totalPosts: number;
  totalEngagement: number;
  scheduledPosts: number;
}

export const SocialMediaStats = ({ totalPosts, totalEngagement, scheduledPosts }: SocialMediaStatsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <Card className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2">
          <BarChart2 className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Total Posts</h3>
        </div>
        <p className="text-2xl font-bold">{totalPosts}</p>
      </Card>
      <Card className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Total Engagement</h3>
        </div>
        <p className="text-2xl font-bold">{totalEngagement.toLocaleString()}</p>
      </Card>
      <Card className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2">
          <Share2 className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Scheduled Posts</h3>
        </div>
        <p className="text-2xl font-bold">{scheduledPosts}</p>
      </Card>
    </div>
  );
};