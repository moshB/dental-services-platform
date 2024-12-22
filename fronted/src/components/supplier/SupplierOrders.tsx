import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";
import { TableFilter } from "./TableFilter";
import { TableDownloadButtons } from "./TableDownloadButtons";
import { useToast } from "@/hooks/use-toast";

const initialOrders = [
  {
    id: "ORD-001",
    practice: "Smile Dental Clinic",
    date: "2024-02-20",
    items: ["Dental Mirrors", "Disposable Gloves"],
    status: "Pending",
    total: 449.50,
  },
  {
    id: "ORD-002",
    practice: "Bright Dental Care",
    date: "2024-02-19",
    items: ["Composite Filling Material", "Dental Burs"],
    status: "Processing",
    total: 1169.80,
  },
];

export const SupplierOrders = () => {
  const [filterValue, setFilterValue] = useState("");
  const [orders, setOrders] = useState(initialOrders);
  const tableRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const previousOrdersLength = useRef(orders.length);

  useEffect(() => {
    // Simulate receiving a new order every 30 seconds
    const interval = setInterval(() => {
      const newOrder = {
        id: `ORD-00${orders.length + 1}`,
        practice: "New Dental Practice",
        date: new Date().toISOString().split('T')[0],
        items: ["New Item"],
        status: "Pending",
        total: 299.99,
      };
      
      setOrders(prev => [...prev, newOrder]);
      
      toast({
        title: "New Order Received",
        description: `Order ${newOrder.id} from ${newOrder.practice}`,
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [toast, orders.length]);

  const filteredOrders = orders.filter((order) =>
    Object.values(order).some((value) =>
      value.toString().toLowerCase().includes(filterValue.toLowerCase())
    )
  );

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Recent Orders</h2>
          </div>
          <TableDownloadButtons
            data={filteredOrders}
            filename="orders"
            tableRef={tableRef}
          />
        </div>

        <TableFilter
          onFilterChange={setFilterValue}
          placeholder="Search orders..."
        />

        <div ref={tableRef}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Practice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.practice}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items.join(", ")}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === "Pending" ? "secondary" : "default"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">£{order.total.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
};