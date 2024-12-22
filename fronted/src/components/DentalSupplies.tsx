import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  "Instruments",
  "Consumables",
  "Equipment",
  "Infection Control",
  "Orthodontics",
];

const subCategories = {
  Instruments: ["Diagnostic", "Surgical", "Endodontic", "Periodontal"],
  Consumables: ["Restorative", "Impression Materials", "Cements", "Disposables"],
  Equipment: ["Dental Chairs", "X-Ray", "Sterilization", "Handpieces"],
  "Infection Control": ["Gloves", "Masks", "Sterilization", "Surface Disinfectants"],
  Orthodontics: ["Brackets", "Wires", "Elastics", "Instruments"],
};

const suppliers = [
  "Henry Schein",
  "Patterson Dental",
  "Dentsply Sirona",
  "3M Oral Care",
  "Hu-Friedy",
];

export const DentalSupplies = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState([0]);
  
  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Filters Section */}
        <Card className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Category</h3>
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedCategory && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Sub-Category</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select sub-category" />
                </SelectTrigger>
                <SelectContent>
                  {subCategories[selectedCategory as keyof typeof subCategories].map((subCategory) => (
                    <SelectItem key={subCategory} value={subCategory}>
                      {subCategory}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-4">Supplier</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select supplier" />
              </SelectTrigger>
              <SelectContent>
                {suppliers.map((supplier) => (
                  <SelectItem key={supplier} value={supplier}>
                    {supplier}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Price Range</h3>
            <Slider
              defaultValue={[0]}
              max={5000}
              step={100}
              value={priceRange}
              onValueChange={setPriceRange}
              className="my-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>£0</span>
              <span>£{priceRange[0]}</span>
              <span>£5000+</span>
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </Card>

        {/* Results Section */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&auto=format&fit=crop"
                  alt="Dental product"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-sm text-muted-foreground mb-2">Category - Subcategory</p>
                <p className="font-medium text-primary">£299.99</p>
                <Button variant="outline" className="w-full mt-4">View Details</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};