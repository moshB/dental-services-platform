import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface RatingBreakdown {
  stars: number;
  count: number;
}

interface PracticeOverallRatingProps {
  averageRating: number;
  totalReviews: number;
  breakdown: RatingBreakdown[];
  googleRating?: number;
  googleReviewCount?: number;
  googleKeywords?: string[];
  lastGoogleReview?: string;
}

export const PracticeOverallRating = ({
  averageRating,
  totalReviews,
  breakdown,
  googleRating,
  googleReviewCount,
  googleKeywords,
  lastGoogleReview,
}: PracticeOverallRatingProps) => {
  const maxCount = Math.max(...breakdown.map((item) => item.count));

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold mb-1">Overall Rating</h3>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl font-bold ml-2">{averageRating.toFixed(1)}</span>
            </div>
            <span className="text-muted-foreground">({totalReviews} reviews)</span>
          </div>
        </div>
        {googleRating && (
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
              <span className="text-xl font-bold">{googleRating.toFixed(1)}</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="text-sm text-muted-foreground">
              {googleReviewCount} Google reviews
            </span>
            {lastGoogleReview && (
              <div className="text-xs text-muted-foreground mt-1">
                Last reviewed: {new Date(lastGoogleReview).toLocaleDateString()}
              </div>
            )}
          </div>
        )}
      </div>

      {googleKeywords && googleKeywords.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Common Keywords from Google Reviews:</h4>
          <div className="flex flex-wrap gap-2">
            {googleKeywords.map((keyword, index) => (
              <Badge key={index} variant="secondary">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {breakdown.map((item) => (
          <div key={item.stars} className="flex items-center gap-4">
            <div className="flex items-center gap-1 w-20">
              <span>{item.stars}</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
            <Progress
              value={(item.count / maxCount) * 100}
              className="h-2"
            />
            <span className="text-sm text-muted-foreground w-12">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};