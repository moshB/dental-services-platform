import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Extended UK cities list (top cities)
const ukCities = {
  'A': ['Aberdeen', 'Ashford', 'Aylesbury', 'Aldershot', 'Altrincham', 'Andover'],
  'B': ['Bath', 'Birmingham', 'Brighton', 'Bristol', 'Blackpool', 'Bolton', 'Bournemouth', 'Bradford', 'Basingstoke', 'Bedford'],
  'C': ['Cambridge', 'Canterbury', 'Cardiff', 'Coventry', 'Chelmsford', 'Chester', 'Colchester', 'Crawley', 'Crewe'],
  'D': ['Derby', 'Durham', 'Dartford', 'Doncaster', 'Dudley'],
  'E': ['Edinburgh', 'Exeter', 'Eastbourne', 'Enfield', 'Ealing'],
  'F': ['Falmouth', 'Farnborough', 'Folkestone'],
  'G': ['Glasgow', 'Gloucester', 'Guildford', 'Grimsby'],
  'H': ['Harrogate', 'Huddersfield', 'Hull', 'Harlow', 'Hartlepool'],
  'I': ['Ipswich', 'Ilford', 'Inverness'],
  'L': ['Leeds', 'Leicester', 'Liverpool', 'London', 'Luton', 'Lancaster', 'Lincoln'],
  'M': ['Manchester', 'Milton Keynes', 'Middlesbrough', 'Maidstone'],
  'N': ['Newcastle', 'Norwich', 'Nottingham', 'Northampton', 'Newport'],
  'O': ['Oxford', 'Oldham'],
  'P': ['Plymouth', 'Portsmouth', 'Peterborough', 'Preston'],
  'R': ['Reading', 'Rochdale', 'Rugby', 'Rotherham'],
  'S': ['Sheffield', 'Southampton', 'Swindon', 'Slough', 'Stockport', 'Salisbury'],
  'T': ['Taunton', 'Telford', 'Torquay', 'Tunbridge Wells'],
  'W': ['Watford', 'Wolverhampton', 'Worcester', 'Wakefield', 'Warrington'],
  'Y': ['York', 'Yeovil']
};

// Dental specialties
const specialties = [
  'General Dentistry',
  'Orthodontics',
  'Periodontics',
  'Endodontics',
  'Prosthodontics',
  'Oral Surgery',
  'Pediatric Dentistry',
  'Cosmetic Dentistry',
  'Implant Dentistry',
  'Emergency Dental Care'
];

// Sample dentists list with IDs
const dentists = [
  { id: 1, name: 'Dr. Sarah Johnson', specialties: ['General Dentistry', 'Cosmetic Dentistry'] },
  { id: 2, name: 'Dr. James Smith', specialties: ['Orthodontics'] },
  { id: 3, name: 'Dr. Emily Brown', specialties: ['Pediatric Dentistry'] },
  { id: 4, name: 'Dr. Michael Wilson', specialties: ['Oral Surgery', 'Implant Dentistry'] },
  { id: 5, name: 'Dr. Lisa Davis', specialties: ['Periodontics'] },
].sort((a, b) => a.name.localeCompare(b.name));

const LocationDirectory = () => {
  return (
    <Tabs defaultValue="locations" className="w-full">
      <TabsList className="w-full justify-start mb-6 flex-wrap">
        <TabsTrigger value="locations">Locations</TabsTrigger>
        <TabsTrigger value="specialties">Specialties</TabsTrigger>
        <TabsTrigger value="dentists">Dentists</TabsTrigger>
      </TabsList>

      <TabsContent value="locations">
        <ScrollArea className="h-[600px] rounded-md border p-4">
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(ukCities).map(([letter, cities]) => (
              <AccordionItem key={letter} value={letter}>
                <AccordionTrigger className="text-lg font-semibold">
                  {letter}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {cities.map((city) => (
                      <Link
                        key={city}
                        to={`/practices/search?location=${encodeURIComponent(city)}`}
                        className="p-2 hover:bg-accent rounded-md transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span>{city}</span>
                          <span className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 50 + 5)} practices
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </TabsContent>

      <TabsContent value="specialties">
        <ScrollArea className="h-[600px] rounded-md border p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialties.map((specialty) => (
              <Link
                key={specialty}
                to={`/practices/search?specialty=${encodeURIComponent(specialty)}`}
                className="p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-semibold mb-2">{specialty}</h3>
                <p className="text-sm text-muted-foreground">
                  {Math.floor(Math.random() * 100 + 20)} specialists
                </p>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </TabsContent>

      <TabsContent value="dentists">
        <ScrollArea className="h-[600px] rounded-md border p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dentists.map((dentist) => (
              <Link
                key={dentist.id}
                to={`/practices/dentist/${dentist.id}`}
                className="p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="font-semibold mb-2">{dentist.name}</h3>
                <div className="flex flex-wrap gap-1">
                  {dentist.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="text-xs bg-muted px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
};

export default LocationDirectory;
