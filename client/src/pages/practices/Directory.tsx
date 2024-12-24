import LocationDirectory from "@/components/LocationDirectory";

const Directory = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Dental Practices</h1>
        <p className="text-muted-foreground">
          Browse dental practices by location, specialty, or dentist
        </p>
      </div>
      <LocationDirectory />
    </div>
  );
};

export default Directory;