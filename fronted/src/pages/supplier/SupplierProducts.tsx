import { Card } from "@/components/ui/card";
import { ProductCatalogUpload } from "@/components/supplier/catalog/ProductCatalogUpload";

const SupplierProducts = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>
      <ProductCatalogUpload />
    </div>
  );
};

export default SupplierProducts;