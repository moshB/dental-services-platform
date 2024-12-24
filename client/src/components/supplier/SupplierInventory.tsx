import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Package, AlertTriangle } from "lucide-react";
import { NewItemDialog } from "./NewItemDialog";
import { TableFilter } from "./TableFilter";
import { TableDownloadButtons } from "./TableDownloadButtons";

const inventory = [
  {
    id: "1",
    name: "Dental Mirrors",
    sku: "DM-001",
    inStock: 150,
    minStock: 50,
    price: 5.99,
  },
  {
    id: "2",
    name: "Disposable Gloves",
    sku: "DG-001",
    inStock: 2000,
    minStock: 1000,
    price: 0.15,
  },
];

export const SupplierInventory = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const tableRef = useRef<HTMLDivElement>(null);

  const filteredInventory = inventory.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filterValue.toLowerCase())
    )
  );

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Inventory Management</h2>
          </div>
          <div className="flex items-center gap-2">
            <TableDownloadButtons
              data={filteredInventory}
              filename="inventory"
              tableRef={tableRef}
            />
            <Button onClick={() => setIsDialogOpen(true)}>Add New Item</Button>
          </div>
        </div>

        <TableFilter
          onFilterChange={setFilterValue}
          placeholder="Search inventory..."
        />

        <div ref={tableRef}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>In Stock</TableHead>
                <TableHead>Min Stock</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.inStock}</TableCell>
                  <TableCell>{item.minStock}</TableCell>
                  <TableCell>£{item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    {item.inStock <= item.minStock && (
                      <div className="flex items-center text-yellow-500">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        Low Stock
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <NewItemDialog open={isDialogOpen} setOpen={setIsDialogOpen} />
    </Card>
  );
};