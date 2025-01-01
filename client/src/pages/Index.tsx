import { SearchBar } from "@/components/SearchBar";
import { FeaturedDentists } from "@/components/FeaturedDentists";
import { PopularProcedures } from "@/components/PopularProcedures";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Query for practices
  const { data: practices } = useQuery({
    queryKey: ['popularPractices'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clinics')
        .select('*')
        .limit(3);
      
      if (error) throw error;
      return data;
    }
  });

  // New query for city with id=1
  useQuery({
    queryKey: ['cityOne'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('citys')
        .select('*')
        .eq('id', 1)
        .single();
      
      if (error) {
        console.error('Error fetching city:', error);
        return null;
      }
      
      console.log('City with id=1:', data);
      return data;
    }
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#243949] to-[#517fa4] py-20 px-6">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto text-center space-y-6 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Find Your Perfect Dental Care
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Search through thousands of trusted dental practices and procedures to find the perfect match for your needs in the UK
          </p>
          <div className="max-w-4xl mx-auto bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Popular Practices Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Practices in your Area
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover highly-rated dental practices near you, trusted by thousands of patients across the UK
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practices?.map((practice) => (
              <Link key={practice.id} to={`/practices/${practice.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-video relative">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Dental Practice"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-semibold text-lg text-white">
                        {practice.Name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{practice.Address_1}, {practice.Town_City}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">4.8</span>
                        <span className="text-gray-500">(120 reviews)</span>
                      </div>
                      {practice.Phone_Number && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{practice.Phone_Number}</span>
                        </div>
                      )}
                    </div>
                    {practice.Website && (
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <Globe className="w-4 h-4" />
                        <span className="truncate">{practice.Website}</span>
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Procedures Section */}
        <div className="mt-20 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Procedures
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most sought-after dental procedures and find the right treatment for you
            </p>
          </div>
          <PopularProcedures />
        </div>
      </div>
    </div>
  );
};

export default Index;