import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { InventoryStats } from "@/components/practice/InventoryStats";
import { InventoryTable } from "@/components/practice/InventoryTable";
import { NewInventoryDialog } from "@/components/practice/NewInventoryDialog";

const InventoryManagement = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link to="/practice/materials">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Inventory Management</h1>
        </div>
        <NewInventoryDialog open={open} setOpen={setOpen} />
      </div>

      <InventoryStats />
      <InventoryTable />
    </div>
  );
};

export default InventoryManagement;