// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Clock, MapPin, Phone } from "lucide-react";
// import { PracticeCQCRating } from "./PracticeCQCRating";

// interface PracticeSidebarProps {
//   address: string;
//   phone: string;
//   openingTime: string;
//   paymentMethods: string[];
//   emergencyServices: boolean;
//   cqc: {
//     rating: string;
//     lastInspection: string;
//     reportUrl: string;
//   };
// }

// export const PracticeSidebar = ({ 
//   address, 
//   phone, 
//   openingTime, 
//   paymentMethods, 
//   emergencyServices,
//   cqc 
// }: PracticeSidebarProps) => {
//   return (
//     <div className="space-y-6">
//       <PracticeCQCRating
//         rating={cqc.rating}
//         lastInspection={cqc.lastInspection}
//         cqcUrl={cqc.reportUrl}
//       />

//       <Card className="p-6 space-y-4">
//         <h3 className="font-semibold">Contact Information</h3>
//         <div className="space-y-3">
//           <div className="flex items-center gap-2">
//             <MapPin className="h-5 w-5 text-primary" />
//             <span>{address}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Phone className="h-5 w-5 text-primary" />
//             <span>{phone}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock className="h-5 w-5 text-primary" />
//             <span>Opens {openingTime}</span>
//           </div>
//         </div>
//       </Card>

//       <Card className="p-6">
//         <div className="space-y-4">
//           <h3 className="font-semibold">Payment Methods</h3>
//           <div className="flex flex-wrap gap-2">
//             {paymentMethods.map((method) => (
//               <Badge key={method} variant="outline">
//                 {method}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </Card>

//       {emergencyServices && (
//         <Card className="p-6 bg-red-50 border-red-200">
//           <h3 className="font-semibold text-red-800">Emergency Services Available</h3>
//           <p className="text-red-700 mt-2">
//             24/7 emergency dental care for urgent cases
//           </p>
//         </Card>
//       )}
//     </div>
//   );
// };
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";
import { PracticeCQCRating } from "./PracticeCQCRating";

interface PracticeSidebarProps {
  address?: string;
  phone?: string;
  openingTime?: string;
  paymentMethods?: string[];
  emergencyServices?: boolean;
  cqc?: {
    rating?: string;
    lastInspection?: string;
    reportUrl?: string;
  };
}

export const PracticeSidebar = ({
  address = "No address available",
  phone = "No phone number available",
  openingTime = "Opening time not specified",
  paymentMethods = ["Cash", "Credit Card"],
  emergencyServices = false,
  cqc = { rating: "Not Rated", lastInspection: "No date available", reportUrl: "#" },
}: PracticeSidebarProps) => {
  return (
    <div className="space-y-6">
      {cqc && (
        <PracticeCQCRating
          rating={cqc.rating || "Not Rated"}
          lastInspection={cqc.lastInspection || "No date available"}
          cqcUrl={cqc.reportUrl || "#"}
        />
      )}

      <Card className="p-6 space-y-4">
        <h3 className="font-semibold">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Opens {openingTime}</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="font-semibold">Payment Methods</h3>
          <div className="flex flex-wrap gap-2">
            {paymentMethods.length > 0 ? (
              paymentMethods.map((method) => (
                <Badge key={method} variant="outline">
                  {method}
                </Badge>
              ))
            ) : (
              <p>No payment methods specified.</p>
            )}
          </div>
        </div>
      </Card>

      {emergencyServices && (
        <Card className="p-6 bg-red-50 border-red-200">
          <h3 className="font-semibold text-red-800">Emergency Services Available</h3>
          <p className="text-red-700 mt-2">
            24/7 emergency dental care for urgent cases
          </p>
        </Card>
      )}
    </div>
  );
};
