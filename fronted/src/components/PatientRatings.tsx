import { useState } from "react";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { RatingsList } from "./ratings/RatingsList";

interface Rating {
  id: string;
  date: string;
  rating: number;
  comment: string;
  dentistName?: string;
  practice: string;
  type: 'practice' | 'dentist';
}

export const PatientRatings = () => {
  const { toast } = useToast();
  const [ratings, setRatings] = useState<Rating[]>([]);

  const practiceRatings = ratings.filter(rating => rating.type === 'practice');
  const dentistRatings = ratings.filter(rating => rating.type === 'dentist');

  const calculateAverageRating = (ratings: Rating[]) => {
    if (ratings.length === 0) return 0;
    return ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;
  };

  const handleSaveRating = async (id: string, rating: number, comment: string) => {
    try {
      const { error } = await supabase
        .from('ratings')
        .update({
          rating,
          comment,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id);

      if (error) throw error;

      setRatings(ratings.map(r => 
        r.id === id 
          ? { ...r, rating, comment }
          : r
      ));
      
      toast({
        title: "Rating updated",
        description: "Your rating has been successfully updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update rating. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Tabs defaultValue="practice" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="practice">
          <div className="flex items-center gap-2">
            <span>Practice Ratings</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">
                {calculateAverageRating(practiceRatings).toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">
                ({practiceRatings.length})
              </span>
            </div>
          </div>
        </TabsTrigger>
        <TabsTrigger value="dentist">
          <div className="flex items-center gap-2">
            <span>Dentist Ratings</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">
                {calculateAverageRating(dentistRatings).toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">
                ({dentistRatings.length})
              </span>
            </div>
          </div>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="practice">
        <RatingsList ratings={practiceRatings} onSaveRating={handleSaveRating} />
      </TabsContent>

      <TabsContent value="dentist">
        <RatingsList ratings={dentistRatings} onSaveRating={handleSaveRating} />
      </TabsContent>
    </Tabs>
  );
};