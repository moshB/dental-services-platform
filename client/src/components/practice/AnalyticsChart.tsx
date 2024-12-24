import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

interface AnalyticsChartProps {
  title: string;
  timeRange: string;
  type: "patients" | "procedures";
}

const generateMockData = (timeRange: string, type: string) => {
  // This would be replaced with real data from your backend
  const baseData = {
    day: [
      { name: "00:00", value: 4 },
      { name: "06:00", value: 3 },
      { name: "12:00", value: 8 },
      { name: "18:00", value: 6 },
    ],
    month: [
      { name: "Week 1", value: 40 },
      { name: "Week 2", value: 35 },
      { name: "Week 3", value: 50 },
      { name: "Week 4", value: 45 },
    ],
    year: [
      { name: "Jan", value: 150 },
      { name: "Feb", value: 180 },
      { name: "Mar", value: 200 },
      { name: "Apr", value: 220 },
    ],
  };

  return baseData[timeRange as keyof typeof baseData];
};

export const AnalyticsChart = ({ title, timeRange, type }: AnalyticsChartProps) => {
  const data = generateMockData(timeRange, type);
  
  const config = {
    chart: { color: "#4FD1C5" },
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-[300px]">
        <ChartContainer config={config}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <ChartTooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke={config.chart.color}
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </Card>
  );
};