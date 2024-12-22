import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const dummyInventory = [
  {
    id: 1,
    name: "Dental Composite",
    category: "Restorative Materials",
    quantity: 45,
    unit: "units",
    minStock: 20,
    supplier: "3M Oral Care",
    lastOrdered: "2024-02-15",
    status: "In Stock"
  },
  {
    id: 2,
    name: "Disposable Gloves",
    category: "PPE",
    quantity: 15,
    unit: "boxes",
    minStock: 25,
    supplier: "Henry Schein",
    lastOrdered: "2024-02-10",
    status: "Low Stock"
  },
  {
    id: 3,
    name: "Local Anesthetic",
    category: "Medications",
    quantity: 50,
    unit: "cartridges",
    minStock: 30,
    supplier: "Patterson Dental",
    lastOrdered: "2024-02-01",
    status: "In Stock"
  },
  {
    id: 4,
    name: "Dental Burs",
    category: "Instruments",
    quantity: 8,
    unit: "packs",
    minStock: 10,
    supplier: "Dentsply Sirona",
    lastOrdered: "2024-02-05",
    status: "Low Stock"
  }
];

export const InventoryTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Inventory</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Last Ordered</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyInventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>
                  {item.quantity} {item.unit}
                </TableCell>
                <TableCell>{item.supplier}</TableCell>
                <TableCell>{item.lastOrdered}</TableCell>
                <TableCell>
                  <Badge 
                    variant={item.status === "In Stock" ? "default" : "destructive"}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Update Stock
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
