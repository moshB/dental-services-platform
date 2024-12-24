import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface PracticeCQCRatingProps {
  rating: string;
  lastInspection: string;
  cqcUrl: string;
}

export const PracticeCQCRating = ({ rating, lastInspection, cqcUrl }: PracticeCQCRatingProps) => {
  const getRatingColor = (rating: string) => {
    switch (rating.toLowerCase()) {
      case "outstanding":
        return "bg-green-500";
      case "good":
        return "bg-blue-500";
      case "requires improvement":
        return "bg-yellow-500";
      case "inadequate":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="font-semibold">CQC Rating</h3>
        <div className="flex items-center gap-4">
          <Badge className={`${getRatingColor(rating)} text-white`}>
            {rating}
          </Badge>
          <span className="text-sm text-muted-foreground">
            Last inspected: {new Date(lastInspection).toLocaleDateString()}
          </span>
        </div>
        <a
          href={cqcUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          View full CQC report
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </Card>
  );
};