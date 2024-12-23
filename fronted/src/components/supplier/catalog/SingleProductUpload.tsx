import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { ProductForm } from "./ProductForm";
import { ProductImageUpload } from "./ProductImageUpload";

interface Product {
  name: string;
  sku: string;
  price: number;
  description: string;
  imageUrl?: string;
  category: string;
  stock: number;
}

export const SingleProductUpload = () => {
  const { toast } = useToast();
  const [product, setProduct] = useState<Product>({
    name: "",
    sku: "",
    price: 0,
    description: "",
    category: "",
    stock: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('supplier_products')
        .insert({
          ...product,
          image_url: product.imageUrl,
        });

      if (error) throw error;

      toast({
        title: "Product added",
        description: "Product has been added to your catalog successfully.",
      });
      
      setProduct({
        name: "",
        sku: "",
        price: 0,
        description: "",
        category: "",
        stock: 0,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add product to catalog.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <ProductForm 
          product={product}
          setProduct={setProduct}
        />
        <ProductImageUpload
          imageUrl={product.imageUrl}
          onImageUpload={(url) => setProduct({ ...product, imageUrl: url })}
        />
        <Button type="submit" className="w-full">
          Add Product
        </Button>
      </form>
    </Card>
  );
};