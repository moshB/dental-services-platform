// import { useParams } from "react-router-dom";
// import { PracticeCarousel } from "@/components/practices/PracticeCarousel";
// import { DentistList } from "@/components/practices/DentistList";
// import { PracticeRatings } from "@/components/practices/PracticeRatings";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { getPracticeDetails } from "@/data/practiceDetails";
// import { PracticeHeader } from "@/components/practices/PracticeHeader";
// import { PracticeOverview } from "@/components/practices/PracticeOverview";
// import { PracticeSidebar } from "@/components/practices/PracticeSidebar";
// import { PracticeOverallRating } from "@/components/practices/PracticeOverallRating";
// import { useQuery } from "@tanstack/react-query";
// import { searchClinicsWithRadius } from '../../../controllers/clinicsController'; // נתיב ל-clinicsController


// const PracticeDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   console.log("id: ", id);
//   const { data: practice } = useQuery({
//     queryKey: ['practice', id],
//     queryFn: () => getPracticeDetails(id || "1"),
//     refetchInterval: 5000,
//   });

//   if (!practice) return null;

//   // Mock rating breakdown data - in a real app this would come from the API
//   const ratingBreakdown = [
//     { stars: 5, count: 150 },
//     { stars: 4, count: 50 },
//     { stars: 3, count: 20 },
//     { stars: 2, count: 5 },
//     { stars: 1, count: 2 },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto py-8 space-y-8">
//         <PracticeHeader
//           // name={"yosi"}
//           name={practice.name}
//           address={practice.address}
//           distance={practice.distance}
//           website={practice.website}
//           tags={practice.tags}
//         />

//         <PracticeCarousel images={practice.images} />

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <Tabs defaultValue="overview" className="space-y-8">
//               <TabsList>
//                 <TabsTrigger value="overview">Overview</TabsTrigger>
//                 <TabsTrigger value="dentists">Dentists</TabsTrigger>
//                 <TabsTrigger value="reviews">Reviews</TabsTrigger>
//                 <TabsTrigger value="pricing">Pricing</TabsTrigger>
//               </TabsList>

//               <TabsContent value="overview">
//                 <div className="space-y-6">
//                   <PracticeOverallRating
//                     averageRating={practice.rating}
//                     totalReviews={practice.reviewCount}
//                     breakdown={ratingBreakdown}
//                     googleRating={practice.googleRating}
//                     googleReviewCount={practice.googleReviewCount}
//                     googleKeywords={practice.googleKeywords}
//                     lastGoogleReview={practice.lastGoogleReview}
//                   />
//                   <PracticeOverview
//                     description={practice.description}
//                     facilities={practice.facilities}
//                     hygiene={practice.hygiene}
//                   />
//                 </div>
//               </TabsContent>

//               <TabsContent value="dentists">
//                 <DentistList dentists={practice.dentists} practiceId={practice.id} />
//               </TabsContent>

//               <TabsContent value="reviews">
//                 <PracticeRatings
//                   practiceRatings={[
//                     {
//                       id: 1,
//                       date: "2024-03-15",
//                       rating: 4.8,
//                       comment: "Excellent facilities and professional staff"
//                     }
//                   ]}
//                   dentists={[
//                     {
//                       id: "1",
//                       name: "Dr. Sarah Johnson",
//                       ratings: [
//                         {
//                           id: 2,
//                           date: "2024-03-12",
//                           rating: 5.0,
//                           comment: "Very professional and caring",
//                           dentistName: "Dr. Sarah Johnson"
//                         }
//                       ]
//                     }
//                   ]}
//                 />
//               </TabsContent>

//               <TabsContent value="pricing">
//                 <div className="space-y-4">
//                   {Object.entries(practice.pricing).map(([service, price]) => (
//                     <div key={service} className="flex justify-between items-center p-4 border rounded-lg">
//                       <span className="capitalize">{service.replace(/([A-Z])/g, ' $1').trim()}</span>
//                       <span className="font-semibold">{price}</span>
//                     </div>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>

//           <PracticeSidebar
//             address={practice.address}
//             phone={practice.phone}
//             openingTime={practice.openingTime}
//             paymentMethods={practice.paymentMethods}
//             emergencyServices={practice.emergencyServices}
//             cqc={practice.cqc}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PracticeDetails;
// import { useParams } from "react-router-dom";
// import { PracticeCarousel } from "@/components/practices/PracticeCarousel";
// import { DentistList } from "@/components/practices/DentistList";
// import { PracticeRatings } from "@/components/practices/PracticeRatings";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { PracticeHeader } from "@/components/practices/PracticeHeader";
// import { PracticeOverview } from "@/components/practices/PracticeOverview";
// import { PracticeSidebar } from "@/components/practices/PracticeSidebar";
// import { PracticeOverallRating } from "@/components/practices/PracticeOverallRating";
// import { useQuery } from "@tanstack/react-query";
// // import { getClinicById } from "../../../controllers/clinicsController";

// const PracticeDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const { data: fetchedData, isLoading, isError } = useQuery({
//     queryKey: ["practice", id],
//     queryFn: () => getClinicById(id || "1"),
//     refetchInterval: 5000,
//   });

//   if (isLoading) return <p>Loading practice details...</p>;
//   if (isError) return <p>Failed to load practice details. Please try again later.</p>;

//   const practice = {
//     name: fetchedData?.Name || "Unnamed Clinic",
//     address: `${fetchedData?.Address_1 || "Unknown Address"}, ${fetchedData?.Town_City || "Unknown City"}`,
//     website: fetchedData?.Website || "https://defaultclinicwebsite.com",
//     tags: (fetchedData?.Specialisms_services || "General Dentistry").split(" ## "),
//     rating: fetchedData?.Rating || 3.0,
//     reviewCount: fetchedData?.ReviewCount || 10,
//     pricing: fetchedData?.Pricing || { "General Checkup": "$50", "Teeth Cleaning": "$70" },
//     phone: fetchedData?.Phone_Number || "Not Available",
//     openingTime: fetchedData?.Report_Publication_Date || "No Opening Hours Available",
//     emergencyServices: fetchedData?.Caring || false,
//     images: fetchedData?.Images || ["https://images.unsplash.com/photo-1629909613654-28e377c37b09"],
//     dentists: fetchedData?.Dentists || [{ name: "Dr. Default Name", specialties: ["General Dentistry"], experience: "5 years" }],
//     reviews: fetchedData?.Reviews || [{ date: "2024-01-01", rating: 4.5, comment: "Great service!" }],
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto py-8 space-y-8">
//         <PracticeHeader
//           name={practice.name}
//           address={practice.address}
//           website={practice.website}
//           tags={practice.tags}
//         />
//         <PracticeCarousel images={practice.images} />
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <Tabs defaultValue="overview" className="space-y-8">
//               <TabsList>
//                 <TabsTrigger value="overview">Overview</TabsTrigger>
//                 <TabsTrigger value="dentists">Dentists</TabsTrigger>
//                 <TabsTrigger value="reviews">Reviews</TabsTrigger>
//                 <TabsTrigger value="pricing">Pricing</TabsTrigger>
//               </TabsList>
//               <TabsContent value="overview">
//                 <PracticeOverallRating
//                   averageRating={practice.rating}
//                   totalReviews={practice.reviewCount}
//                   breakdown={[
//                     { stars: 5, count: 70 },
//                     { stars: 4, count: 20 },
//                     { stars: 3, count: 10 },
//                     { stars: 2, count: 5 },
//                     { stars: 1, count: 2 },
//                   ]}
//                 />
//                 <PracticeOverview description={practice.tags.join(", ")} facilities={["Wheelchair Access", "Free Parking"]} />
//               </TabsContent>
//               <TabsContent value="dentists">
//                 <DentistList dentists={practice.dentists} />
//               </TabsContent>
//               <TabsContent value="reviews">
//                 <PracticeRatings reviews={practice.reviews} />
//               </TabsContent>
//               <TabsContent value="pricing">
//                 <div className="space-y-4">
//                   {Object.entries(practice.pricing).map(([service, price]) => (
//                     <div key={service} className="flex justify-between items-center p-4 border rounded-lg">
//                       <span className="capitalize">{service}</span>
//                       <span className="font-semibold">{price}</span>
//                     </div>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//           <PracticeSidebar
//             address={practice.address}
//             phone={practice.phone}
//             openingTime={practice.openingTime}
//             emergencyServices={practice.emergencyServices}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PracticeDetails;
import { useParams } from "react-router-dom";
import { PracticeCarousel } from "@/components/practices/PracticeCarousel";
import { DentistList } from "@/components/practices/DentistList";
import { PracticeRatings } from "@/components/practices/PracticeRatings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PracticeHeader } from "@/components/practices/PracticeHeader";
import { PracticeOverview } from "@/components/practices/PracticeOverview";
import { PracticeSidebar } from "@/components/practices/PracticeSidebar";
import { PracticeOverallRating } from "@/components/practices/PracticeOverallRating";
import { useQuery } from "@tanstack/react-query";


// const getClinicById = async (id) => {
//   // setLoading(true);
//   // console.log(treatment, userLatitude, userLongitude);
//   // const API_URL = process.env.API_URL;
//   const API_URL = import.meta.env.VITE_API_URL;
//   console.log(API_URL);
//   try {
//     const response = await fetch(`${API_URL}/clinics/details`, {
//       // const response = await fetch(`${process.env.REACT_APP_API_URL}/clinics/search`, {
//       //   const response = await fetch("https://dental-services-platform.netlify.app:5000/api/clinics/search", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id }),
//     });


//     if (!response.ok) {
//       throw new Error("Failed to fetch clinics");
//     }

//     const data = await response.json();
//     return data;
//     // if (data.length === 0) {
//     //   console.warn("No clinics found");
//     // }
//     // const processedData = createDentalPracticesArray(data, latitude, longitude);
//     //   setPractices(processedData);
//     // } catch (error) {
//     //   console.error("Error fetching clinics:", error.message);
//     // } finally {
//     //   setLoading(false);

//     } catch (error) {
//       console.error("Error fetching clinic details:", error);
//       throw error;
//     }
//   };
  // פונקציה לשליפת פרטי מרפאה
  const getClinicById = async (id) => {
    console.log("id: ", id);
    const API_URL = import.meta.env.VITE_API_URL //|| "http://localhost:5000/api";

    const response = await fetch(`${API_URL}/clinics/details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id:id }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch clinic details");
    }

    const data = await response.json();
    return data;
  };

  const PracticeDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: fetchedData, isLoading, isError } = useQuery({
      queryKey: ["practice", id],
      queryFn: () => getClinicById(id || "1"),
      refetchInterval: 5000,
    });

    if (isLoading) return <p>Loading practice details...</p>;
    if (isError) return <p>Failed to load practice details. Please try again later.</p>;

    const practice = {
      name: fetchedData?.Name || "Unnamed Clinic",
      address: `${fetchedData?.Address_1 || "Unknown Address"}, ${fetchedData?.Town_City || "Unknown City"}`,
      website: fetchedData?.Website || "https://defaultclinicwebsite.com",
      tags: (fetchedData?.Specialisms_services || "General Dentistry").split(" ## "),
      rating: fetchedData?.Rating || 3.0,
      reviewCount: fetchedData?.ReviewCount || 10,
      pricing: fetchedData?.Pricing || { "General Checkup": "$50", "Teeth Cleaning": "$70" },
      phone: fetchedData?.Phone_Number || "Not Available",
      openingTime: fetchedData?.Report_Publication_Date || "No Opening Hours Available",
      emergencyServices: fetchedData?.Caring || false,
      images: fetchedData?.Images || ["https://images.unsplash.com/photo-1629909613654-28e377c37b09"],
      dentists: fetchedData?.Dentists || [{ name: "Dr. Default Name", specialties: ["General Dentistry"], experience: "5 years" }],
      reviews: fetchedData?.Reviews || [{ date: "2024-01-01", rating: 4.5, comment: "Great service!" }],
    };

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8 space-y-8">
          <PracticeHeader
            name={practice.name}
            address={practice.address}
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
                  <PracticeOverallRating
                    averageRating={practice.rating}
                    totalReviews={practice.reviewCount}
                    breakdown={[
                      { stars: 5, count: 70 },
                      { stars: 4, count: 20 },
                      { stars: 3, count: 10 },
                      { stars: 2, count: 5 },
                      { stars: 1, count: 2 },
                    ]}
                  />
                  <PracticeOverview description={practice.tags.join(", ")} facilities={["Wheelchair Access", "Free Parking"]} />
                </TabsContent>
                <TabsContent value="dentists">
                  <DentistList dentists={practice.dentists} />
                </TabsContent>
                <TabsContent value="reviews">
                  <PracticeRatings reviews={practice.reviews} />
                </TabsContent>
                <TabsContent value="pricing">
                  <div className="space-y-4">
                    {Object.entries(practice.pricing).map(([service, price]) => (
                      <div key={service} className="flex justify-between items-center p-4 border rounded-lg">
                        <span className="capitalize">{service}</span>
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
              emergencyServices={practice.emergencyServices}
            />
          </div>
        </div>
      </div>
    );
  };

  export default PracticeDetails;
