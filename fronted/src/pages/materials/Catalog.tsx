import { DentalSupplies } from "@/components/DentalSupplies";

const Catalog = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dental Supplies Catalog</h1>
      <DentalSupplies />
    </div>
  );
};

export default Catalog;