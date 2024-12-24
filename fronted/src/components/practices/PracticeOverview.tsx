// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Shield } from "lucide-react";

// interface PracticeOverviewProps {
//   description: string;
//   facilities: string[];
//   hygiene: {
//     certifications: string[];
//   };
// }

// export const PracticeOverview = ({ description, facilities, hygiene }: PracticeOverviewProps) => {
//   return (
//     <div className="space-y-8">
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">About</h2>
//         <p className="text-muted-foreground">{description}</p>
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {facilities.map((facility) => (
//             <div key={facility} className="flex items-center gap-2">
//               <Badge variant="outline">{facility}</Badge>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Hygiene & Safety</h2>
//         <Card className="p-6">
//           <div className="flex items-center gap-2 mb-4">
//             <Shield className="h-5 w-5 text-green-500" />
//             <span className="font-semibold">Enhanced Cleaning Protocols</span>
//           </div>
//           <div className="space-y-2">
//             {hygiene.certifications.map((cert) => (
//               <div key={cert} className="flex items-center gap-2">
//                 <Badge variant="secondary">{cert}</Badge>
//               </div>
//             ))}
//           </div>
//         </Card>
//       </section>
//     </div>
//   );
// };
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface PracticeOverviewProps {
  description?: string;
  facilities?: string[];
  hygiene?: {
    certifications?: string[];
  };
}

export const PracticeOverview = ({
  description = "No description available.",
  facilities = [],
  hygiene = { certifications: [] },
}: PracticeOverviewProps) => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-muted-foreground">{description}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
        {facilities.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {facilities.map((facility) => (
              <div key={facility} className="flex items-center gap-2">
                <Badge variant="outline">{facility}</Badge>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No facilities listed.</p>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Hygiene & Safety</h2>
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-green-500" />
            <span className="font-semibold">Enhanced Cleaning Protocols</span>
          </div>
          {hygiene.certifications && hygiene.certifications.length > 0 ? (
            <div className="space-y-2">
              {hygiene.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2">
                  <Badge variant="secondary">{cert}</Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No certifications available.</p>
          )}
        </Card>
      </section>
    </div>
  );
};
