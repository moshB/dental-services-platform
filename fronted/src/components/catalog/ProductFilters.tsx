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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSubCategory: string;
  setSelectedSubCategory: (subCategory: string) => void;
  selectedSupplier: string;
  setSelectedSupplier: (supplier: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onApplyFilters: () => void;
}

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

export const ProductFilters = ({
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  selectedSupplier,
  setSelectedSupplier,
  priceRange,
  setPriceRange,
  searchQuery,
  setSearchQuery,
  onApplyFilters,
}: ProductFiltersProps) => {
  return (
    <Card className="p-6 space-y-6">
      <div>
        <Label htmlFor="search">Search Products</Label>
        <Input
          id="search"
          type="search"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-2"
        />
      </div>

      <div>
        <Label>Category</Label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="mt-2">
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
          <Label>Sub-Category</Label>
          <Select value={selectedSubCategory} onValueChange={setSelectedSubCategory}>
            <SelectTrigger className="mt-2">
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
        <Label>Supplier</Label>
        <Select value={selectedSupplier} onValueChange={setSelectedSupplier}>
          <SelectTrigger className="mt-2">
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
        <Label>Price Range</Label>
        <Slider
          defaultValue={[0]}
          max={5000}
          step={100}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mt-4"
        />
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>£0</span>
          <span>£{priceRange[0]}</span>
          <span>£5000+</span>
        </div>
      </div>

      <Button className="w-full" onClick={onApplyFilters}>
        Apply Filters
      </Button>
    </Card>
  );
};