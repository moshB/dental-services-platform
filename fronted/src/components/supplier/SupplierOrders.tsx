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
import { Package, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableFilter } from "./TableFilter";
import { TableDownloadButtons } from "./TableDownloadButtons";
import { useToast } from "@/hooks/use-toast";
import { OrderDetailsModal } from "./OrderDetailsModal";

const initialOrders = [
  {
    id: "ORD-001",
    practice: "Smile Dental Clinic",
    practiceAddress: "123 Dental Street, London",
    dentistName: "Dr. Sarah Smith",
    date: "2024-02-20",
    items: ["Dental Mirrors", "Disposable Gloves"],
    status: "Pending",
    total: 449.50,
  },
  {
    id: "ORD-002",
    practice: "Bright Dental Care",
    practiceAddress: "456 Bright Avenue, Manchester",
    dentistName: "Dr. John Brown",
    date: "2024-02-19",
    items: ["Composite Filling Material", "Dental Burs"],
    status: "Processing",
    total: 1169.80,
  },
];

export const SupplierOrders = () => {
  const [filterValue, setFilterValue] = useState("");
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState<typeof initialOrders[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate receiving a new order every 30 seconds
    const interval = setInterval(() => {
      const newOrder = {
        id: `ORD-00${orders.length + 1}`,
        practice: "New Dental Practice",
        practiceAddress: "789 New Street, Birmingham",
        dentistName: "Dr. New Doctor",
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

  const handleViewDetails = (order: typeof initialOrders[0]) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

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
                <TableHead>Address</TableHead>
                <TableHead>Dentist</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.practice}</TableCell>
                  <TableCell>{order.practiceAddress}</TableCell>
                  <TableCell>{order.dentistName}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items.join(", ")}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === "Pending" ? "secondary" : "default"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">£{order.total.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewDetails(order)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <OrderDetailsModal
        order={selectedOrder}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </Card>
  );
};