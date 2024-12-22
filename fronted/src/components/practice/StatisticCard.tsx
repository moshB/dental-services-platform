import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatisticCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend: number;
}

export const StatisticCard = ({ title, value, icon: Icon, trend }: StatisticCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value.toLocaleString()}</h3>
        </div>
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {trend > 0 ? '+' : ''}{trend}% from last period
        </span>
      </div>
    </Card>
  );
};