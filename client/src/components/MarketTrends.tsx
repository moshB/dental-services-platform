import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

interface MarketTrendsProps {
  city?: string;
  practice?: string;
  procedure?: string;
}

// Sample data - in a real app, this would be filtered based on props
const generateData = (city?: string, practice?: string, procedure?: string) => {
  // This is just sample data - in a real app, you'd filter based on the props
  return [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 3000 },
    { month: "Mar", value: 2000 },
    { month: "Apr", value: 2780 },
    { month: "May", value: 1890 },
    { month: "Jun", value: 2390 },
  ];
};

const config = {
  trend: { color: "#4FD1C5" },
};

export const MarketTrends = ({ city, practice, procedure }: MarketTrendsProps) => {
  const data = generateData(city, practice, procedure);
  
  const title = [
    city || "All Cities",
    practice || "All Practices",
    procedure || "All Procedures"
  ].join(" - ");

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Treatment Trends: {title}</h2>
      <div className="h-[300px]">
        <ChartContainer config={config}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke={config.trend.color}
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </Card>
  );
};