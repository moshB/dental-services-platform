import { useState, useEffect } from "react";
import { ProductCard } from "./catalog/ProductCard";
import { ProductFilters } from "./catalog/ProductFilters";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const DentalSupplies = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [selectedSupplier, setSelectedSupplier] = useState<string>("");
  const [priceRange, setPriceRange] = useState([0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('supplier_products')
        .select('*');

      if (searchQuery) {
        query = query.ilike('name', `%${searchQuery}%`);
      }

      if (selectedCategory) {
        query = query.eq('category', selectedCategory);
      }

      if (selectedSubCategory) {
        query = query.eq('subcategory', selectedSubCategory);
      }

      if (priceRange[0] > 0) {
        query = query.lte('price', priceRange[0]);
      }

      const { data, error } = await query;

      if (error) throw error;

      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Initial load

  const handleApplyFilters = () => {
    fetchProducts();
  };

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <ProductFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
            selectedSupplier={selectedSupplier}
            setSelectedSupplier={setSelectedSupplier}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onApplyFilters={handleApplyFilters}
          />
        </div>

        <div className="md:col-span-2">
          {loading ? (
            <div className="text-center">Loading products...</div>
          ) : products.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No products found matching your criteria
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};