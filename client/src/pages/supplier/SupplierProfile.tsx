import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ProductUpload } from "@/components/supplier/ProductUpload";
import { SupplierSettings } from "@/components/supplier/SupplierSettings";

const SupplierProfile = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Supplier Profile</h1>
      
      <Tabs defaultValue="products" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="space-y-4">
          <ProductUpload />
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <SupplierSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupplierProfile;