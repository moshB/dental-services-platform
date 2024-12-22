import { Card } from "@/components/ui/card";
import { ProductUpload } from "@/components/supplier/ProductUpload";

const SupplierProducts = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>
      <ProductUpload />
    </div>
  );
};

export default SupplierProducts;