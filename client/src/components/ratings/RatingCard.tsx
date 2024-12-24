import { useState } from "react";
import { Edit2, Save, X } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { StarRating } from "./StarRating";

interface RatingCardProps {
  id: string;
  date: string;
  rating: number;
  comment: string;
  practice: string;
  dentistName?: string;
  onSave: (id: string, rating: number, comment: string) => Promise<void>;
}

export const RatingCard = ({
  id,
  date,
  rating,
  comment,
  practice,
  dentistName,
  onSave,
}: RatingCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRating, setEditedRating] = useState(rating);
  const [editedComment, setEditedComment] = useState(comment);

  const handleSave = async () => {
    await onSave(id, editedRating, editedComment);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedRating(rating);
    setEditedComment(comment);
    setIsEditing(false);
  };

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-semibold">{practice}</h4>
          {dentistName && (
            <p className="text-sm text-muted-foreground">{dentistName}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleSave}>
                <Save className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleCancel}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <StarRating rating={rating} readonly />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsEditing(true)}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
      {isEditing ? (
        <div className="space-y-2">
          <StarRating
            rating={editedRating}
            onRatingChange={setEditedRating}
            size="md"
          />
          <Textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            placeholder="Add your comment..."
            className="mt-2"
          />
        </div>
      ) : (
        <p className="text-sm mt-2">{comment}</p>
      )}
      <p className="text-xs text-muted-foreground mt-2">
        {new Date(date).toLocaleDateString()}
      </p>
    </Card>
  );
};