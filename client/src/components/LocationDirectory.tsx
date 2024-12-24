import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LocationsTab } from "./directory/LocationsTab";
import { PracticesTab } from "./directory/PracticesTab";
import { SpecialtiesTab } from "./directory/SpecialtiesTab";
import { DentistsTab } from "./directory/DentistsTab";

const LocationDirectory = () => {
  return (
    <Tabs defaultValue="locations" className="w-full">
      <TabsList className="w-full justify-start mb-6 flex-wrap">
        <TabsTrigger value="locations">Locations</TabsTrigger>
        <TabsTrigger value="practices">Practices</TabsTrigger>
        <TabsTrigger value="specialties">Specialties</TabsTrigger>
        <TabsTrigger value="dentists">Dentists</TabsTrigger>
      </TabsList>

      <TabsContent value="locations">
        <LocationsTab />
      </TabsContent>

      <TabsContent value="practices">
        <PracticesTab />
      </TabsContent>

      <TabsContent value="specialties">
        <SpecialtiesTab />
      </TabsContent>

      <TabsContent value="dentists">
        <DentistsTab />
      </TabsContent>
    </Tabs>
  );
};

export default LocationDirectory;