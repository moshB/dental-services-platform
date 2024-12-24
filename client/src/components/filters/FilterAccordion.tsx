import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PracticeTypeFilter } from "./PracticeTypeFilter";
import { OpeningHoursFilter } from "./OpeningHoursFilter";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface FilterAccordionProps {
  onRatingChange: (rating: number[]) => void;
}

export const FilterAccordion = ({ onRatingChange }: FilterAccordionProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [ratingFilter, setRatingFilter] = useState([0]); // Changed default to 0

  const handleRatingChange = (newValue: number[]) => {
    setRatingFilter(newValue);
    onRatingChange(newValue);
  };

  return (
    <div className="space-y-6 p-4 border rounded-lg bg-card h-fit">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Filters</h3>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            {isFiltersOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
        
        <div className={`space-y-4 ${isFiltersOpen ? '' : 'hidden'}`}>
          {/* Rating Filter at the top */}
          <div className="mb-4 pb-4 border-b">
            <label className="text-sm font-medium mb-4 block">Minimum Rating</label>
            <div className="space-y-4">
              <Slider
                defaultValue={[0]}
                max={5}
                min={0}
                step={0.5}
                value={ratingFilter}
                onValueChange={handleRatingChange}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{ratingFilter[0]}</span>
                </div>
                <span>and above</span>
              </div>
            </div>
          </div>

          {/* Practice Type filter */}
          <div className="mb-4 pb-4 border-b">
            <PracticeTypeFilter />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="opening-hours">
              <AccordionTrigger>Opening Hours</AccordionTrigger>
              <AccordionContent>
                <OpeningHoursFilter />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dentist-staff">
              <AccordionTrigger>Dentist & Staff</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Specialisations</label>
                    <div className="space-y-2">
                      {['Orthodontics', 'Periodontics', 'Cosmetic Dentistry', 'Endodontics'].map((spec) => (
                        <div key={spec} className="flex items-center">
                          <Checkbox id={`spec-${spec}`} />
                          <label htmlFor={`spec-${spec}`} className="ml-2 text-sm">
                            {spec}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Experience</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        {['5+ years', '10+ years', '15+ years', '20+ years'].map((years) => (
                          <SelectItem key={years} value={years}>
                            {years}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Dentist Gender</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">No Preference</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="treatment">
              <AccordionTrigger>Treatment Type</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    {[
                      'Check-ups',
                      'Fillings',
                      'Teeth Whitening',
                      'Veneers',
                      'Implants',
                      'Root Canal',
                      'Orthodontics',
                      'Emergency Care'
                    ].map((treatment) => (
                      <div key={treatment} className="flex items-center">
                        <Checkbox id={`treatment-${treatment}`} />
                        <label htmlFor={`treatment-${treatment}`} className="ml-2 text-sm">
                          {treatment}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pricing">
              <AccordionTrigger>Pricing and Payment</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                    <Slider defaultValue={[0]} max={1000} step={10} className="my-4" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>£0</span>
                      <span>£1000+</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      'Payment Plans Available',
                      'Interest-free Options',
                      'NHS Pricing'
                    ].map((option) => (
                      <div key={option} className="flex items-center">
                        <Checkbox id={`payment-${option}`} />
                        <label htmlFor={`payment-${option}`} className="ml-2 text-sm">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="facilities">
              <AccordionTrigger>Facilities & Technology</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {[
                    'Digital X-rays',
                    '3D Scanning',
                    'Sedation Available',
                    'Virtual Consultations',
                    'Child-Friendly',
                    'Special Needs Support',
                    'Elderly Care'
                  ].map((facility) => (
                    <div key={facility} className="flex items-center">
                      <Checkbox id={`facility-${facility}`} />
                      <label htmlFor={`facility-${facility}`} className="ml-2 text-sm">
                        {facility}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};