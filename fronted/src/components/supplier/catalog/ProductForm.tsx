import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface Product {
  name: string;
  sku: string;
  price: number;
  description: string;
  imageUrl?: string;
  category: string;
  stock: number;
}

interface ProductFormProps {
  product: Product;
  setProduct: (product: Product) => void;
}

export const ProductForm = ({ product, setProduct }: ProductFormProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="sku">SKU</Label>
          <Input
            id="sku"
            value={product.sku}
            onChange={(e) => setProduct({ ...product, sku: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
            required
          />
        </div>
        <div>
          <Label htmlFor="stock">Stock</Label>
          <Input
            id="stock"
            type="number"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: Number(e.target.value) })}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          required
        />
      </div>
    </div>
  );
};