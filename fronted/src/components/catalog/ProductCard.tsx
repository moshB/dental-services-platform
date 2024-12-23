import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory?: string;
  imageUrl: string;
  description?: string;
  manufacturer?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Card className="p-4">
        <img
          src={product.imageUrl || "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&auto=format&fit=crop"}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          {product.category} {product.subcategory ? `- ${product.subcategory}` : ''}
        </p>
        <p className="font-medium text-primary">£{product.price.toFixed(2)}</p>
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={() => setShowDetails(true)}
        >
          View Details
        </Button>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={product.imageUrl || "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&auto=format&fit=crop"}
                alt={product.name}
                className="w-full rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-muted-foreground">{product.description || "No description available"}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Details</h4>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-muted-foreground">Category</dt>
                    <dd>{product.category}</dd>
                  </div>
                  {product.subcategory && (
                    <div>
                      <dt className="text-sm text-muted-foreground">Subcategory</dt>
                      <dd>{product.subcategory}</dd>
                    </div>
                  )}
                  {product.manufacturer && (
                    <div>
                      <dt className="text-sm text-muted-foreground">Manufacturer</dt>
                      <dd>{product.manufacturer}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-sm text-muted-foreground">Price</dt>
                    <dd className="text-xl font-bold text-primary">£{product.price.toFixed(2)}</dd>
                  </div>
                </dl>
              </div>
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};