import { useParams } from "react-router-dom";
import { PracticeCarousel } from "@/components/practices/PracticeCarousel";
import { DentistList } from "@/components/practices/DentistList";
import { PracticeRatings } from "@/components/practices/PracticeRatings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPracticeDetails } from "@/data/practiceDetails";
import { PracticeHeader } from "@/components/practices/PracticeHeader";
import { PracticeOverview } from "@/components/practices/PracticeOverview";
import { PracticeSidebar } from "@/components/practices/PracticeSidebar";
import { PracticeOverallRating } from "@/components/practices/PracticeOverallRating";
import { useQuery } from "@tanstack/react-query";

const PracticeDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data: practice } = useQuery({
    queryKey: ['practice', id],
    queryFn: () => getPracticeDetails(id || "1"),
    refetchInterval: 5000,
  });

  if (!practice) return null;

  // Mock rating breakdown data - in a real app this would come from the API
  const ratingBreakdown = [
    { stars: 5, count: 150 },
    { stars: 4, count: 50 },
    { stars: 3, count: 20 },
    { stars: 2, count: 5 },
    { stars: 1, count: 2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 space-y-8">
        <PracticeHeader
          name={practice.name}
          address={practice.address}
          distance={practice.distance}
          website={practice.website}
          tags={practice.tags}
        />

        <PracticeCarousel images={practice.images} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="dentists">Dentists</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="space-y-6">
                  <PracticeOverallRating
                    averageRating={practice.rating}
                    totalReviews={practice.reviewCount}
                    breakdown={ratingBreakdown}
                    googleRating={practice.googleRating}
                    googleReviewCount={practice.googleReviewCount}
                    googleKeywords={practice.googleKeywords}
                    lastGoogleReview={practice.lastGoogleReview}
                  />
                  <PracticeOverview
                    description={practice.description}
                    facilities={practice.facilities}
                    hygiene={practice.hygiene}
                  />
                </div>
              </TabsContent>

              <TabsContent value="dentists">
                <DentistList dentists={practice.dentists} practiceId={practice.id} />
              </TabsContent>

              <TabsContent value="reviews">
                <PracticeRatings
                  practiceRatings={[
                    {
                      id: 1,
                      date: "2024-03-15",
                      rating: 4.8,
                      comment: "Excellent facilities and professional staff"
                    }
                  ]}
                  dentists={[
                    {
                      id: "1",
                      name: "Dr. Sarah Johnson",
                      ratings: [
                        {
                          id: 2,
                          date: "2024-03-12",
                          rating: 5.0,
                          comment: "Very professional and caring",
                          dentistName: "Dr. Sarah Johnson"
                        }
                      ]
                    }
                  ]}
                />
              </TabsContent>

              <TabsContent value="pricing">
                <div className="space-y-4">
                  {Object.entries(practice.pricing).map(([service, price]) => (
                    <div key={service} className="flex justify-between items-center p-4 border rounded-lg">
                      <span className="capitalize">{service.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold">{price}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <PracticeSidebar
            address={practice.address}
            phone={practice.phone}
            openingTime={practice.openingTime}
            paymentMethods={practice.paymentMethods}
            emergencyServices={practice.emergencyServices}
            cqc={practice.cqc}
          />
        </div>
      </div>
    </div>
  );
};

export default PracticeDetails;