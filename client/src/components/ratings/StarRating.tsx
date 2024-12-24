import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md";
}

export const StarRating = ({ rating, onRatingChange, readonly = false, size = "sm" }: StarRatingProps) => {
  const starSize = size === "sm" ? "h-4 w-4" : "h-6 w-6";
  
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${starSize} ${
            readonly ? "" : "cursor-pointer"
          } ${
            rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => !readonly && onRatingChange?.(star)}
        />
      ))}
      {!readonly && <span className="ml-1">{rating}</span>}
    </div>
  );
};