import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { OrdersTable } from "@/components/practice/OrdersTable";
import { NewOrderDialog } from "@/components/practice/NewOrderDialog";

const Orders = () => {
  const [filterStatus, setFilterStatus] = useState<string>("all");

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/practice/materials">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Orders</h1>
        </div>
        <NewOrderDialog />
      </div>

      <OrdersTable filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
    </div>
  );
};

export default Orders;