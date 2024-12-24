import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const InventoryStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Total Items</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">118</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Low Stock Items</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-yellow-500">8</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Out of Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-red-500">2</p>
        </CardContent>
      </Card>
    </div>
  );
};