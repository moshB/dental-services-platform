import { SearchBar } from "@/components/SearchBar";
import { FeaturedPractices } from "@/components/FeaturedPractices";
import { PopularProcedures } from "@/components/PopularProcedures";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-clip-text">
            Find Your Perfect Dental Practice
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-12 max-w-2xl mx-auto px-4">
            Compare trusted dental practices and book appointments with ease
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Featured Practices */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Practices</h2>
            <p className="text-gray-600">Top-rated dental practices in your area</p>
          </div>
          <FeaturedPractices />
        </div>
      </section>

      {/* Popular Procedures */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Popular Procedures</h2>
            <p className="text-gray-600">Explore our most sought-after dental treatments at better discount prices</p>
          </div>
          <PopularProcedures />
        </div>
      </section>
    </div>
  );
};

export default Index;