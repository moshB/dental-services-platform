import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { FileSpreadsheet, Download } from "lucide-react";
// import * as XLSX from 'xlsx';
import { supabase } from "@/integrations/supabase/client";

export const BulkProductUpload = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  // const downloadTemplate = () => {
  //   const template = XLSX.utils.book_new();
  //   const templateData = [
  //     {
  //       Name: 'Example Product',
  //       SKU: 'SKU123',
  //       Price: 99.99,
  //       Category: 'Dental Supplies',
  //       Stock: 100,
  //       Description: 'Product description'
  //     }
  //   ];
    
  //   const ws = XLSX.utils.json_to_sheet(templateData);
  //   XLSX.utils.book_append_sheet(template, ws, "Template");
  //   XLSX.writeFile(template, "product_upload_template.xlsx");
  // };

  // const handleBulkUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;

  //   try {
  //     setUploading(true);
  //     const data = await file.arrayBuffer();
  //     // const workbook = XLSX.read(data);
  //     // const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  //     // const jsonData = XLSX.utils.sheet_to_json(worksheet);

  //     const products = jsonData.map((item: any) => ({
  //       name: item.Name || item.name,
  //       sku: item.SKU || item.sku,
  //       price: Number(item.Price || item.price),
  //       category: item.Category || item.category,
  //       stock: Number(item.Stock || item.stock),
  //       description: item.Description || item.description,
  //     }));

  //     const { error } = await supabase
  //       .from('supplier_products')
  //       .insert(products);

  //     if (error) throw error;

  //     toast({
  //       title: "Products imported",
  //       description: `Successfully imported ${products.length} products.`,
  //     });
  //   } catch (error) {
  //     toast({
  //       title: "Import failed",
  //       description: "Failed to import products. Please check your file format.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="bulk-upload">Bulk Upload Products</Label>
          <div className="flex items-center gap-4 mt-2">
            <Input
              id="bulk-upload"
              type="file"
              // accept=".xlsx,.xls"
              // onChange={handleBulkUpload}
              disabled={uploading}
            />
            <Button
              variant="outline"
              // onClick={downloadTemplate}
              className="whitespace-nowrap"
            >
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Download Template
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Download the template and fill it with your product data
          </p>
        </div>
      </div>
    </Card>
  );
};