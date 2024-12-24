import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

interface PopularityMetricsProps {
  city?: string;
  practice?: string;
  procedure?: string;
}

// Sample data - in a real app, this would be filtered based on props
const generateData = (city?: string, practice?: string, procedure?: string) => {
  // This is just sample data - in a real app, you'd filter based on the props
  return [
    { name: "London", value: 400 },
    { name: "Manchester", value: 300 },
    { name: "Birmingham", value: 280 },
    { name: "Leeds", value: 250 },
    { name: "Liverpool", value: 220 },
    { name: "Bristol", value: 210 },
  ].slice(0, 5); // Show fewer items when filtered
};

const config = {
  practices: { color: "#4FD1C5" },
};

export const PopularityMetrics = ({ city, practice, procedure }: PopularityMetricsProps) => {
  const data = generateData(city, practice, procedure);
  
  const title = [
    city || "All Cities",
    practice || "All Practices",
    procedure || "All Procedures"
  ].join(" - ");

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Practice Popularity: {title}</h2>
      <div className="h-[300px]">
        <ChartContainer config={config}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <ChartTooltip />
            <Bar
              dataKey="value"
              fill={config.practices.color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </Card>
  );
};