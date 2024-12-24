import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { StatisticCard } from "@/components/practice/StatisticCard";
import { AnalyticsChart } from "@/components/practice/AnalyticsChart";
import { Users, Stethoscope, Calendar } from "lucide-react";

const PracticeAnalytics = () => {
  const [timeRange, setTimeRange] = useState("month");

  // Mock data - in a real app this would come from your backend
  const stats = {
    totalPatients: 1250,
    totalProcedures: 3456,
    appointmentsThisMonth: 145
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/practice/materials?tab=analytics">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      </div>

      <div className="flex justify-end mb-6">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Daily</SelectItem>
            <SelectItem value="month">Monthly</SelectItem>
            <SelectItem value="year">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatisticCard
          title="Total Patients"
          value={stats.totalPatients}
          icon={Users}
          trend={+12}
        />
        <StatisticCard
          title="Total Procedures"
          value={stats.totalProcedures}
          icon={Stethoscope}
          trend={+8}
        />
        <StatisticCard
          title="Appointments"
          value={stats.appointmentsThisMonth}
          icon={Calendar}
          trend={+15}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart
          title="Patient Growth"
          timeRange={timeRange}
          type="patients"
        />
        <AnalyticsChart
          title="Procedures Performed"
          timeRange={timeRange}
          type="procedures"
        />
      </div>
    </div>
  );
};

export default PracticeAnalytics;