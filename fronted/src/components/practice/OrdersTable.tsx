import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Package, Clock, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const orders = [
  {
    id: "ORD-001",
    date: "2024-02-20",
    supplier: "Henry Schein",
    items: [
      { name: "Dental Mirrors", quantity: 50, price: 5.99 },
      { name: "Disposable Gloves", quantity: 1000, price: 0.15 },
    ],
    status: "Pending",
    total: 449.50,
  },
  {
    id: "ORD-002",
    date: "2024-02-19",
    supplier: "Patterson Dental",
    items: [
      { name: "Composite Filling Material", quantity: 20, price: 45.99 },
      { name: "Dental Burs", quantity: 100, price: 2.50 },
    ],
    status: "Delivered",
    total: 1169.80,
  },
  {
    id: "ORD-003",
    date: "2024-02-18",
    supplier: "3M Oral Care",
    items: [
      { name: "Impression Material", quantity: 10, price: 89.99 },
      { name: "Temporary Crown Material", quantity: 5, price: 65.00 },
    ],
    status: "Processing",
    total: 1224.90,
  },
];

interface OrdersTableProps {
  filterStatus: string;
  setFilterStatus: (status: string) => void;
}

export const OrdersTable = ({ filterStatus, setFilterStatus }: OrdersTableProps) => {
  const { toast } = useToast();
  
  const filteredOrders = filterStatus === "all" 
    ? orders 
    : orders.filter(order => order.status.toLowerCase() === filterStatus.toLowerCase());

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "text-green-500";
      case "pending":
        return "text-yellow-500";
      case "processing":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "processing":
        return <Package className="w-4 h-4" />;
      default:
        return <XCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Select
            value={filterStatus}
            onValueChange={setFilterStatus}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Supplier</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.supplier}</TableCell>
              <TableCell>{order.items.length} items</TableCell>
              <TableCell>£{order.total.toFixed(2)}</TableCell>
              <TableCell>
                <div className={`flex items-center gap-2 ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  {order.status}
                </div>
              </TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => toast({ title: "Feature coming soon!", description: "Order details will be available in the next update." })}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
