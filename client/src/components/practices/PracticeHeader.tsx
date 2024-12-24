// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Globe, MapPin } from "lucide-react";
// import { BookingForm } from "@/components/BookingForm";

// interface PracticeHeaderProps {
//   name: string;
//   address: string;
//   distance: number;
//   website: string;
//   tags: string[];
// }

// export const PracticeHeader = ({ name, address, distance, website, tags }: PracticeHeaderProps) => {
//   const formatWebsiteUrl = (url: string) => {
//     return url.startsWith('http') ? url : `https://${url}`;
//   };

//   return (
//     <div className="space-y-4">
//       <div className="flex justify-between items-start">
//         <div>
//           <h1 className="text-3xl font-bold">{name}</h1>
//           <div className="flex items-center gap-4 text-muted-foreground mt-2">
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4" />
//               <span>{address} ({distance} miles away)</span>
//             </div>
//             <a 
//               href={formatWebsiteUrl(website)}
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-primary hover:underline"
//             >
//               <Globe className="h-4 w-4" />
//               <span>{website}</span>
//             </a>
//           </div>
//         </div>
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button size="lg">Book Appointment</Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-4xl">
//             <BookingForm />
//           </DialogContent>
//         </Dialog>
//       </div>
//       <div className="flex flex-wrap gap-2">
//         {tags.map((tag) => (
//           <Badge key={tag} variant="secondary">
//             {tag}
//           </Badge>
//         ))}
//       </div>
//     </div>
//   );
// };
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Globe, MapPin } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";

interface PracticeHeaderProps {
  name?: string; // שם המרפאה
  address?: string; // כתובת
  distance?: number; // מרחק
  website?: string; // אתר
  tags?: string[]; // תגיות
}

export const PracticeHeader = ({
  name = "Unknown Clinic",
  address = "No address available",
  distance = 0,
  website = "No website available",
  tags = ["General"],
}: PracticeHeaderProps) => {
  const formatWebsiteUrl = (url: string) => {
    return url.startsWith("http") ? url : `https://${url}`;
  };

  const formattedDistance = distance > 0 ? `${distance} miles away` : "Distance not available";

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mt-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{address} ({formattedDistance})</span>
            </div>
            {website !== "No website available" && (
              <a
                href={formatWebsiteUrl(website)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Globe className="h-4 w-4" />
                <span>{website}</span>
              </a>
            )}
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Book Appointment</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <BookingForm />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};
