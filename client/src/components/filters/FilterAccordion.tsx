import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { LocationFilter } from "./LocationFilter";
import { ProfessionalTypeFilter } from "./ProfessionalTypeFilter";
import { AvailabilityFilter } from "./AvailabilityFilter";
import { TreatmentTypeFilter } from "./TreatmentTypeFilter";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { RatingsFilter } from "./RatingsFilter";
import { ClinicTypeFilter } from "./ClinicTypeFilter";
import { InsurancePaymentFilter } from "./InsurancePaymentFilter";
import { PracticeTypeFilter } from "./PracticeTypeFilter";
import { SocialMediaFilter } from "./SocialMediaFilter";

interface FilterAccordionProps {
  onFiltersChange: (filters: any) => void;
  defaultOpen?: boolean;
}

export const FilterAccordion = ({ onFiltersChange, defaultOpen = true }: FilterAccordionProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [filters, setFilters] = useState({
    practiceTypes: ["nhs"],
    location: {
      radius: 10
    },
    professionalTypes: ["general-dentist", "dental-hygienist"],
    treatmentType: "check-up",
    availability: {
      nextAvailable: "7d",
      weekend: false,
      evening: false,
      emergency: false,
      timeSlots: ["9:00"]
    },
    priceRange: {
      min: 50,
      max: 3000,
      paymentPlan: false,
      freeConsultation: false
    },
    ratings: {
      minRating: "4",
      verifiedOnly: false,
      photosOnly: false
    },
    clinicTypes: ["private"],
    insurance: {
      provider: "",
      paymentPlan: false,
      digitalPayments: false
    },
    socialMedia: {
      hasBeforeAfter: false
    }
  });

  const handleFiltersChange = (newFilters: any) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  return (
    <div className="space-y-6 p-4 border rounded-lg bg-card h-fit">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Filters</h3>
        </div>
        
        <div className={`space-y-4 ${isFiltersOpen ? '' : 'hidden'}`}>
          <div className="mb-4">
            <PracticeTypeFilter
              selectedTypes={filters.practiceTypes}
              onTypeChange={(types) => handleFiltersChange({ practiceTypes: types })}
            />
          </div>

          <Accordion 
            type="multiple" 
            defaultValue={defaultOpen ? [
              "location", 
              "professional-type", 
              "treatment", 
              "availability", 
              "price",
              "ratings",
              "clinic-type",
              "insurance",
              "social-media"
            ] : undefined} 
            className="w-full"
          >
            <AccordionItem value="location">
              <AccordionTrigger>Location</AccordionTrigger>
              <AccordionContent>
                <LocationFilter 
                  onLocationChange={(location) => handleFiltersChange({ location })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="professional-type">
              <AccordionTrigger>Professional Type</AccordionTrigger>
              <AccordionContent>
                <ProfessionalTypeFilter
                  selectedTypes={filters.professionalTypes}
                  onTypeChange={(types) => handleFiltersChange({ professionalTypes: types })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="treatment">
              <AccordionTrigger>Treatment Type</AccordionTrigger>
              <AccordionContent>
                <TreatmentTypeFilter
                  selectedTreatment={filters.treatmentType}
                  onTreatmentChange={(treatment) => handleFiltersChange({ treatmentType: treatment })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="availability">
              <AccordionTrigger>Availability</AccordionTrigger>
              <AccordionContent>
                <AvailabilityFilter
                  availability={filters.availability}
                  onAvailabilityChange={(availability) => handleFiltersChange({ availability })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="price">
              <AccordionTrigger>Price Range</AccordionTrigger>
              <AccordionContent>
                <PriceRangeFilter
                  priceRange={filters.priceRange}
                  onPriceRangeChange={(priceRange) => handleFiltersChange({ priceRange })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ratings">
              <AccordionTrigger>Ratings & Reviews</AccordionTrigger>
              <AccordionContent>
                <RatingsFilter
                  selectedRating={filters.ratings.minRating}
                  verifiedOnly={filters.ratings.verifiedOnly}
                  photosOnly={filters.ratings.photosOnly}
                  onRatingChange={(rating) => 
                    handleFiltersChange({ 
                      ratings: { ...filters.ratings, minRating: rating } 
                    })
                  }
                  onVerifiedChange={(verified) =>
                    handleFiltersChange({
                      ratings: { ...filters.ratings, verifiedOnly: verified }
                    })
                  }
                  onPhotosChange={(photos) =>
                    handleFiltersChange({
                      ratings: { ...filters.ratings, photosOnly: photos }
                    })
                  }
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="clinic-type">
              <AccordionTrigger>Clinic Type</AccordionTrigger>
              <AccordionContent>
                <ClinicTypeFilter
                  selectedTypes={filters.clinicTypes}
                  onTypeChange={(types) => handleFiltersChange({ clinicTypes: types })}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="insurance">
              <AccordionTrigger>Insurance & Payment</AccordionTrigger>
              <AccordionContent>
                <InsurancePaymentFilter
                  selectedInsurance={filters.insurance.provider}
                  paymentPlan={filters.insurance.paymentPlan}
                  digitalPayments={filters.insurance.digitalPayments}
                  onInsuranceChange={(provider) =>
                    handleFiltersChange({
                      insurance: { ...filters.insurance, provider }
                    })
                  }
                  onPaymentPlanChange={(enabled) =>
                    handleFiltersChange({
                      insurance: { ...filters.insurance, paymentPlan: enabled }
                    })
                  }
                  onDigitalPaymentsChange={(enabled) =>
                    handleFiltersChange({
                      insurance: { ...filters.insurance, digitalPayments: enabled }
                    })
                  }
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="social-media">
              <AccordionTrigger>Social Media Presence</AccordionTrigger>
              <AccordionContent>
                <SocialMediaFilter
                  hasBeforeAfter={filters.socialMedia.hasBeforeAfter}
                  onBeforeAfterChange={(value) =>
                    handleFiltersChange({
                      socialMedia: { ...filters.socialMedia, hasBeforeAfter: value }
                    })
                  }
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="pt-4 flex justify-end">
            <Button 
              variant="outline" 
              onClick={() => {
                setFilters({
                  practiceTypes: ["nhs"],
                  location: { radius: 10 },
                  professionalTypes: ["general-dentist", "dental-hygienist"],
                  treatmentType: "check-up",
                  availability: {
                    nextAvailable: "7d",
                    weekend: false,
                    evening: false,
                    emergency: false,
                    timeSlots: ["9:00"]
                  },
                  priceRange: {
                    min: 50,
                    max: 3000,
                    paymentPlan: false,
                    freeConsultation: false
                  },
                  ratings: {
                    minRating: "4",
                    verifiedOnly: false,
                    photosOnly: false
                  },
                  clinicTypes: ["private"],
                  insurance: {
                    provider: "",
                    paymentPlan: false,
                    digitalPayments: false
                  },
                  socialMedia: {
                    hasBeforeAfter: false
                  }
                });
              }}
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
