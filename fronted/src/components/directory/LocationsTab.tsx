import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// UK cities data
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

export const LocationsTab = () => {
  return (
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
  );
};