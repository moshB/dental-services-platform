import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const PracticesTab = () => {
  const { data: practices } = useQuery({
    queryKey: ['practices'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clinics')
        .select('*')
        .order('Name');
      
      if (error) throw error;
      
      const grouped = data.reduce((acc: Record<string, any[]>, practice) => {
        if (!practice.Name) return acc;
        const firstLetter = practice.Name.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(practice);
        return acc;
      }, {});

      return grouped;
    }
  });

  return (
    <ScrollArea className="h-[600px] rounded-md border p-4">
      <Accordion type="single" collapsible className="w-full">
        {practices && Object.entries(practices).sort().map(([letter, practicesList]) => (
          <AccordionItem key={letter} value={letter}>
            <AccordionTrigger className="text-lg font-semibold">
              {letter}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {practicesList.map((practice: any) => (
                  <Link
                    key={practice.id}
                    to={`/practices/${practice.id}`}
                    className="p-2 hover:bg-accent rounded-md transition-colors"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{practice.Name}</span>
                      <span className="text-sm text-muted-foreground">
                        {practice.Town_City}
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