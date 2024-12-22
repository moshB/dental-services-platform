import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Filter, ChevronDown, ChevronUp, ShoppingCart, Plus, Minus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  vendor: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const vendors = [
  "Henry Schein",
  "Patterson Dental",
  "3M Oral Care",
  "Dentsply Sirona",
];

const categories = {
  "Restorative Materials": ["Composites", "Cements", "Amalgams"],
  "Preventive Products": ["Fluorides", "Sealants", "Prophylaxis"],
  "Endodontic Supplies": ["Files", "Sealers", "Obturation"],
  "Impression Materials": ["PVS", "Alginates", "Bite Registration"],
};

// Sample products data
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Composite Resin",
    price: 299.99,
    category: "Restorative Materials",
    vendor: "3M Oral Care",
    description: "High-quality dental composite for anterior and posterior restorations",
  },
  {
    id: "2",
    name: "Fluoride Varnish",
    price: 149.99,
    category: "Preventive Products",
    vendor: "Henry Schein",
    description: "5% sodium fluoride white varnish with tri-calcium phosphate",
  },
  // ... Add more sample products as needed
];

export const CatalogSection = () => {
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const toggleVendor = (vendor: string) => {
    setSelectedVendors(prev =>
      prev.includes(vendor)
        ? prev.filter(v => v !== vendor)
        : [...prev, vendor]
    );
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSubCategory = (subCategory: string) => {
    setSelectedCategories(prev =>
      prev.includes(subCategory)
        ? prev.filter(c => c !== subCategory)
        : [...prev, subCategory]
    );
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success("Added to cart");
  };

  const updateQuantity = (productId: string, change: number) => {
    setCart(prev => {
      const newCart = prev.map(item => {
        if (item.id === productId) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0);
      return newCart;
    });
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    // Implement payment processing here
    toast.success("Proceeding to checkout...");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Filters Section */}
      <Card className="md:col-span-1 h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          <CardDescription>
            Filter products by vendor and category
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Vendors Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Vendors</h3>
            {vendors.map((vendor) => (
              <div key={vendor} className="flex items-center space-x-2">
                <Checkbox
                  id={vendor}
                  checked={selectedVendors.includes(vendor)}
                  onCheckedChange={() => toggleVendor(vendor)}
                />
                <label
                  htmlFor={vendor}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {vendor}
                </label>
              </div>
            ))}
          </div>

          <Separator />

          {/* Categories Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categories</h3>
            {Object.entries(categories).map(([category, subCategories]) => (
              <div key={category} className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-2 h-auto"
                  onClick={() => toggleCategory(category)}
                >
                  <span className="text-sm font-medium">{category}</span>
                  {expandedCategories.includes(category) ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                {expandedCategories.includes(category) && (
                  <div className="ml-4 space-y-2">
                    {subCategories.map((subCategory) => (
                      <div key={subCategory} className="flex items-center space-x-2">
                        <Checkbox
                          id={subCategory}
                          checked={selectedCategories.includes(subCategory)}
                          onCheckedChange={() => toggleSubCategory(subCategory)}
                        />
                        <label
                          htmlFor={subCategory}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {subCategory}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Products Grid and Cart */}
      <div className="md:col-span-3 space-y-4">
        {/* Shopping Cart Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="ml-auto flex gap-2">
              <ShoppingCart className="h-4 w-4" />
              Cart
              {cartItemCount > 0 && (
                <Badge variant="secondary">{cartItemCount}</Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
              <SheetDescription>
                Review your items and proceed to checkout
              </SheetDescription>
            </SheetHeader>
            <div className="mt-8 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">£{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <SheetFooter className="mt-8">
              <div className="w-full space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">£{cartTotal.toFixed(2)}</span>
                </div>
                <Button
                  className="w-full"
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                >
                  Checkout (£{cartTotal.toFixed(2)})
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.vendor}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">£{product.price}</p>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <p className="text-sm mt-2">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};