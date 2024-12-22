import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Package, TrendingUp, ClipboardList, Settings, Bell } from "lucide-react";
import { SupplierOverview } from "@/components/supplier/SupplierOverview";
import { SupplierInventory } from "@/components/supplier/SupplierInventory";
import { SupplierOrders } from "@/components/supplier/SupplierOrders";
import { SupplierAnalytics } from "@/components/supplier/SupplierAnalytics";

const SupplierDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notifications, setNotifications] = useState(2); // Example notification count

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Supplier Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="relative"
            onClick={() => toast({
              title: "Notifications",
              description: "You have new order requests.",
            })}
          >
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/supplier/settings")}
            className="gap-2"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="overview" className="gap-2">
            <Package className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="inventory" className="gap-2">
            <ClipboardList className="h-4 w-4" />
            Inventory
          </TabsTrigger>
          <TabsTrigger value="orders" className="gap-2">
            <Package className="h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="analytics" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <SupplierOverview />
        </TabsContent>

        <TabsContent value="inventory">
          <SupplierInventory />
        </TabsContent>

        <TabsContent value="orders">
          <SupplierOrders />
        </TabsContent>

        <TabsContent value="analytics">
          <SupplierAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupplierDashboard;