import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface Rating {
  id: number;
  date: string;
  rating: number;
  comment: string;
  dentistId?: string;
  dentistName?: string;
}

interface DentistRatings {
  id: string;
  name: string;
  ratings: Rating[];
}

interface PracticeRatingsProps {
  practiceRatings: Rating[];
  dentists: DentistRatings[];
}

const calculateAverageRating = (ratings: Rating[]) => {
  if (ratings.length === 0) return 0;
  return ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;
};

const RatingsList = ({ ratings }: { ratings: Rating[] }) => (
  <div className="space-y-4">
    {ratings.map((rating) => (
      <Card key={rating.id} className="p-4">
        <div className="flex justify-between items-start">
          <div>
            {rating.dentistName && (
              <p className="text-sm text-muted-foreground">{rating.dentistName}</p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating.rating}</span>
          </div>
        </div>
        <p className="text-sm mt-2">{rating.comment}</p>
        <p className="text-xs text-muted-foreground mt-2">
          {new Date(rating.date).toLocaleDateString()}
        </p>
      </Card>
    ))}
  </div>
);

export const PracticeRatings = ({ practiceRatings, dentists }: PracticeRatingsProps) => {
  const practiceAverage = calculateAverageRating(practiceRatings);

  return (
    <Tabs defaultValue="practice" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="practice" className="flex-1">
          Practice ({practiceAverage.toFixed(1)} ★)
        </TabsTrigger>
        {dentists.map((dentist) => (
          <TabsTrigger key={dentist.id} value={dentist.id} className="flex-1">
            {dentist.name} ({calculateAverageRating(dentist.ratings).toFixed(1)} ★)
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="practice">
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-4">Practice Reviews</h3>
          <RatingsList ratings={practiceRatings} />
        </div>
      </TabsContent>

      {dentists.map((dentist) => (
        <TabsContent key={dentist.id} value={dentist.id}>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-4">{dentist.name}'s Reviews</h3>
            <RatingsList ratings={dentist.ratings} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};