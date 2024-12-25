import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileUp, Plus, Package, FileSpreadsheet } from "lucide-react";
// import * as XLSX from 'xlsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  sku?: string;
  stock?: number;
  description?: string;
}

export const ProductUpload = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { toast } = useToast();

  // const handleExcelUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;

  //   try {
  //     const data = await file.arrayBuffer();
  //     const workbook = XLSX.read(data);
  //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  //     const jsonData = XLSX.utils.sheet_to_json(worksheet);

  //     const newProducts: Product[] = jsonData.map((row: any, index) => ({
  //       id: `product-${index}`,
  //       name: row.name || row.Name || '',
  //       price: parseFloat(row.price || row.Price || 0),
  //       category: row.category || row.Category || '',
  //       sku: row.sku || row.SKU || '',
  //       stock: parseInt(row.stock || row.Stock || 0),
  //       description: row.description || row.Description || '',
  //       imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&auto=format&fit=crop"
  //     }));

  //     setProducts([...products, ...newProducts]);
      
  //     toast({
  //       title: "Products imported",
  //       description: `Successfully imported ${newProducts.length} products from Excel.`,
  //     });
  //   } catch (error) {
  //     toast({
  //       title: "Import failed",
  //       description: "Failed to import products. Please check your Excel file format.",
  //       variant: "destructive",
  //     });
  //   }
  // };

  const handleCSVUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const rows = text.split('\n').slice(1); // Skip header row
      const newProducts: Product[] = rows.map((row, index) => {
        const [name, price, category] = row.split(',');
        return {
          id: `product-${index}`,
          name: name.trim(),
          price: parseFloat(price.trim()),
          category: category.trim(),
          imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&auto=format&fit=crop"
        };
      });

      setProducts([...products, ...newProducts]);
      
      toast({
        title: "Products imported",
        description: `Successfully imported ${newProducts.length} products.`,
      });
    } catch (error) {
      toast({
        title: "Import failed",
        description: "Failed to import products. Please check your file format.",
        variant: "destructive",
      });
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, productId: string) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // In a real app, this would upload to a storage service
    const imageUrl = URL.createObjectURL(file);
    setProducts(products.map(product => 
      product.id === productId ? { ...product, imageUrl } : product
    ));

    toast({
      title: "Image uploaded",
      description: "Product image has been updated successfully.",
    });
  };

  const downloadTemplate = () => {
    // const template = XLSX.utils.book_new();
    const templateData = [
      {
        Name: 'Example Product',
        SKU: 'SKU123',
        Price: 99.99,
        Category: 'Category',
        Stock: 100,
        Description: 'Product description'
      }
    ];
    
    // const ws = XLSX.utils.json_to_sheet(templateData);
    // XLSX.utils.book_append_sheet(template, ws, "Template");
    // XLSX.writeFile(template, "product_upload_template.xlsx");
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FileUp className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Import Products</h2>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="excel-upload">Upload Excel File</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="excel-upload"
                  type="file"
                  // accept=".xlsx,.xls"
                  // onChange={handleExcelUpload}
                  className="cursor-pointer"
                />
                <Button
                  variant="outline"
                  onClick={downloadTemplate}
                  className="whitespace-nowrap"
                >
                  <FileSpreadsheet className="h-4 w-4 mr-2" />
                  Download Template
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Download the template and fill it with your product data
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="csv-upload">Or Upload CSV File</Label>
              <Input
                id="csv-upload"
                type="file"
                accept=".csv"
                onChange={handleCSVUpload}
                className="cursor-pointer"
              />
              <p className="text-sm text-muted-foreground">
                CSV format: name, price, category
              </p>
            </div>
          </div>
        </div>
      </Card>

      {products.length > 0 && (
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Products</h2>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="relative w-16 h-16 group">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Label htmlFor={`image-${product.id}`} className="cursor-pointer">
                            <Upload className="h-4 w-4 text-white" />
                          </Label>
                          <Input
                            id={`image-${product.id}`}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, product.id)}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.sku}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>£{product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}
    </div>
  );
};