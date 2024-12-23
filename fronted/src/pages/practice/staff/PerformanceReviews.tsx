import { ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PerformanceReviews = () => {
  const navigate = useNavigate();

  const mockReviews = [
    {
      id: 1,
      staffName: "Dr. Sarah Johnson",
      role: "Dentist",
      rating: 4.8,
      lastReview: "2024-02-15",
      nextReview: "2024-08-15",
      notes: "Excellent patient care and team collaboration.",
    },
    {
      id: 2,
      staffName: "James Smith",
      role: "Dental Hygienist",
      rating: 4.5,
      lastReview: "2024-01-20",
      nextReview: "2024-07-20",
      notes: "Strong technical skills and patient communication.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/practice/staff")}
          className="mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Staff Management
        </Button>
        <h1 className="text-2xl font-bold">Performance Reviews</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockReviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{review.staffName}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{review.rating}</span>
                </div>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{review.role}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">Last Review</p>
                  <p className="text-sm text-muted-foreground">{review.lastReview}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Next Review</p>
                  <p className="text-sm text-muted-foreground">{review.nextReview}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Notes</p>
                  <p className="text-sm text-muted-foreground">{review.notes}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PerformanceReviews;