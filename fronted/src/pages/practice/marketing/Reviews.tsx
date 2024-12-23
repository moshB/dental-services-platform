import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare, ThumbsUp, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  platform: "google" | "facebook" | "website";
  responded: boolean;
}

const Reviews = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      author: "John D.",
      rating: 5,
      comment: "Excellent service and very professional staff!",
      date: "2024-03-15",
      platform: "google",
      responded: true,
    },
    {
      id: 2,
      author: "Sarah M.",
      rating: 4,
      comment: "Good experience overall, but waiting time was a bit long.",
      date: "2024-03-14",
      platform: "facebook",
      responded: false,
    },
  ]);

  const handleRespond = (reviewId: number) => {
    toast({
      title: "Response Added",
      description: "Your response has been saved and will be published.",
    });
    setReviews(reviews.map(review => 
      review.id === reviewId ? {...review, responded: true} : review
    ));
  };

  const calculateAverageRating = () => {
    return (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Review Management</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <h3 className="font-semibold">Average Rating</h3>
          </div>
          <p className="text-2xl font-bold">{calculateAverageRating()}</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Total Reviews</h3>
          </div>
          <p className="text-2xl font-bold">{reviews.length}</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Response Rate</h3>
          </div>
          <p className="text-2xl font-bold">
            {Math.round((reviews.filter(r => r.responded).length / reviews.length) * 100)}%
          </p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Pending Responses</h3>
          </div>
          <p className="text-2xl font-bold">
            {reviews.filter(r => !r.responded).length}
          </p>
        </Card>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{review.author}</h3>
                  <span className="text-sm text-muted-foreground">via {review.platform}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm">{review.comment}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
              {!review.responded && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRespond(review.id)}
                >
                  Respond
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;