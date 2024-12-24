import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, TrendingUp, Users, AlertCircle } from "lucide-react";

export const SupplierOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Package className="h-5 w-5" />
            Products Overview
          </h2>
          <p className="text-muted-foreground mb-4">Manage your product catalog and inventory</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Total Products</span>
              <span className="font-semibold">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Low Stock Items</span>
              <span className="text-red-500 font-semibold">12</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Sales Overview
          </h2>
          <p className="text-muted-foreground mb-4">Track your sales performance</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Monthly Sales</span>
              <span className="font-semibold">$45,678</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Growth</span>
              <span className="text-green-500 font-semibold">+15%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Users className="h-5 w-5" />
            Customer Overview
          </h2>
          <p className="text-muted-foreground mb-4">Monitor your customer base</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Active Customers</span>
              <span className="font-semibold">89</span>
            </div>
            <div className="flex justify-between items-center">
              <span>New This Month</span>
              <span className="text-blue-500 font-semibold">+7</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
            <AlertCircle className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="font-medium">Low Stock Alert</p>
              <p className="text-sm text-muted-foreground">Dental Implant Kit (SKU: DI-123) is running low</p>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              View
            </Button>
          </div>
          <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
            <Package className="h-5 w-5 text-green-500" />
            <div>
              <p className="font-medium">New Order Received</p>
              <p className="text-sm text-muted-foreground">Order #12345 from Dental Care Clinic</p>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              Process
            </Button>
          </div>
          <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            <div>
              <p className="font-medium">Sales Milestone</p>
              <p className="text-sm text-muted-foreground">Monthly sales target achieved</p>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};