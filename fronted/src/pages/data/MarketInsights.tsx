import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MarketTrends } from "@/components/MarketTrends";
import { PopularityMetrics } from "@/components/PopularityMetrics";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Users, Activity, Star, MapPin, Building, UserPlus, Home } from "lucide-react";

// Mock data - in a real app, this would come from your database
const practices = [
  {
    id: 1,
    name: "Bright Smile Dental",
    location: "London",
    area: "Central London",
    rating: 4.8,
    patients: 1200,
    joinedDate: "2023-01-15",
  },
  {
    id: 2,
    name: "City Dental Care",
    location: "Manchester",
    area: "City Centre",
    rating: 4.6,
    patients: 800,
    joinedDate: "2023-03-20",
  },
  {
    id: 3,
    name: "Dental Excellence",
    location: "Birmingham",
    area: "Edgbaston",
    rating: 4.9,
    patients: 1500,
    joinedDate: "2023-02-10",
  },
];

// Mock national statistics
const nationalStats = {
  totalPopulation: 67_220_000,
  urbanPopulation: 56_564_800,
  citiesWithPractices: 43,
  marketPenetration: "84%",
  averageCityPopulation: 825_000,
};

const MarketInsights = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedPractice, setSelectedPractice] = useState<string>("");

  const totalPatients = practices.reduce((sum, practice) => sum + practice.patients, 0);
  const averageRating = (practices.reduce((sum, practice) => sum + practice.rating, 0) / practices.length).toFixed(1);

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* National Level Insights */}
      <div>
        <h2 className="text-2xl font-bold mb-4">National Overview</h2>
        <Separator className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Population</p>
                <p className="text-2xl font-bold">{nationalStats.totalPopulation.toLocaleString()}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Building className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Urban Population</p>
                <p className="text-2xl font-bold">{nationalStats.urbanPopulation.toLocaleString()}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Home className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Cities with Practices</p>
                <p className="text-2xl font-bold">{nationalStats.citiesWithPractices}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <UserPlus className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Market Penetration</p>
                <p className="text-2xl font-bold">{nationalStats.marketPenetration}</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Practices</p>
                <p className="text-2xl font-bold">{practices.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Patients</p>
                <p className="text-2xl font-bold">{totalPatients}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Average Rating</p>
                <p className="text-2xl font-bold">{averageRating}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Avg City Population</p>
                <p className="text-2xl font-bold">{nationalStats.averageCityPopulation.toLocaleString()}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* City Level Insights */}
      <div>
        <h2 className="text-2xl font-bold mb-4">City Analysis</h2>
        <Separator className="mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MarketTrends 
            city={selectedCity}
            practice={selectedPractice}
          />
          <PopularityMetrics 
            city={selectedCity}
            practice={selectedPractice}
          />
        </div>
      </div>

      {/* Area Level Insights */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Area Breakdown</h2>
        <Separator className="mb-6" />
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Registered Practices by Area</h3>
          <ScrollArea className="h-[300px] rounded-md">
            <div className="space-y-4">
              {practices.map((practice) => (
                <Card key={practice.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{practice.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {practice.location} - {practice.area}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{practice.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">{practice.patients} patients</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};

export default MarketInsights;