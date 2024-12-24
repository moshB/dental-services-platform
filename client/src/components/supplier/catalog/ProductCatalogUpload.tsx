import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SingleProductUpload } from "./SingleProductUpload";
import { BulkProductUpload } from "./BulkProductUpload";

export const ProductCatalogUpload = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="single">Single Product</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
        </TabsList>
        <TabsContent value="single">
          <SingleProductUpload />
        </TabsContent>
        <TabsContent value="bulk">
          <BulkProductUpload />
        </TabsContent>
      </Tabs>
    </div>
  );
};