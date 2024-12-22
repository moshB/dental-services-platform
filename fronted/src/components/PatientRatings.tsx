import { Star } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Rating {
  id: number;
  date: string;
  rating: number;
  comment: string;
  dentistName?: string;
  practice: string;
  type: 'practice' | 'dentist';
}

export const PatientRatings = () => {
  // In a real app, this would come from an API
  const ratings: Rating[] = [
    {
      id: 1,
      date: "2024-03-15",
      rating: 4.5,
      comment: "Great experience with teeth cleaning",
      dentistName: "Dr. Sarah Williams",
      practice: "Bright Smile Dental",
      type: 'dentist'
    },
    {
      id: 2,
      date: "2024-02-01",
      rating: 5,
      comment: "Very professional and caring dentist",
      dentistName: "Dr. James Thompson",
      practice: "City Dental Care",
      type: 'dentist'
    },
    {
      id: 3,
      date: "2024-03-10",
      rating: 4.8,
      comment: "Modern facilities and friendly staff",
      practice: "Bright Smile Dental",
      type: 'practice'
    },
    {
      id: 4,
      date: "2024-02-15",
      rating: 4.7,
      comment: "Excellent service and clean environment",
      practice: "City Dental Care",
      type: 'practice'
    }
  ];

  const practiceRatings = ratings.filter(rating => rating.type === 'practice');
  const dentistRatings = ratings.filter(rating => rating.type === 'dentist');

  const calculateAverageRating = (ratings: Rating[]) => {
    return ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;
  };

  const RatingsList = ({ ratings }: { ratings: Rating[] }) => (
    <div className="space-y-4">
      {ratings.map((rating) => (
        <Card key={rating.id} className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-semibold">{rating.practice}</h4>
              {rating.dentistName && (
                <p className="text-sm text-muted-foreground">{rating.dentistName}</p>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{rating.rating}</span>
            </div>
          </div>
          <p className="text-sm mb-2">{rating.comment}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(rating.date).toLocaleDateString()}
          </p>
        </Card>
      ))}
    </div>
  );

  return (
    <Tabs defaultValue="practice" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="practice">
          <div className="flex flex-col items-center">
            <span>Practice Ratings</span>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{calculateAverageRating(practiceRatings).toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">({practiceRatings.length})</span>
            </div>
          </div>
        </TabsTrigger>
        <TabsTrigger value="dentist">
          <div className="flex flex-col items-center">
            <span>Dentist Ratings</span>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{calculateAverageRating(dentistRatings).toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">({dentistRatings.length})</span>
            </div>
          </div>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="practice">
        <RatingsList ratings={practiceRatings} />
      </TabsContent>

      <TabsContent value="dentist">
        <RatingsList ratings={dentistRatings} />
      </TabsContent>
    </Tabs>
  );
};