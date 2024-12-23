import { RatingCard } from "./RatingCard";

interface Rating {
  id: string;
  date: string;
  rating: number;
  comment: string;
  dentistName?: string;
  practice: string;
  type: 'practice' | 'dentist';
}

interface RatingsListProps {
  ratings: Rating[];
  onSaveRating: (id: string, rating: number, comment: string) => Promise<void>;
}

export const RatingsList = ({ ratings, onSaveRating }: RatingsListProps) => (
  <div className="space-y-4">
    {ratings.map((rating) => (
      <RatingCard
        key={rating.id}
        id={rating.id}
        date={rating.date}
        rating={rating.rating}
        comment={rating.comment}
        practice={rating.practice}
        dentistName={rating.dentistName}
        onSave={onSaveRating}
      />
    ))}
  </div>
);