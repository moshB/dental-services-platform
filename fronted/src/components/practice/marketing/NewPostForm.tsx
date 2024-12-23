import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NewPostFormProps {
  onCreatePost: (newPost: {
    platform: "facebook" | "instagram" | "twitter";
    content: string;
    scheduledDate: string;
  }) => void;
}

export const NewPostForm = ({ onCreatePost }: NewPostFormProps) => {
  const [platform, setPlatform] = useState<"facebook" | "instagram" | "twitter">("facebook");
  const [content, setContent] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreatePost({ platform, content, scheduledDate });
    setPlatform("facebook");
    setContent("");
    setScheduledDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Select
          value={platform}
          onValueChange={(value: "facebook" | "instagram" | "twitter") => setPlatform(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="twitter">Twitter</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post content..."
        className="min-h-[100px]"
      />
      <Input
        type="datetime-local"
        value={scheduledDate}
        onChange={(e) => setScheduledDate(e.target.value)}
      />
      <Button type="submit">Create Post</Button>
    </form>
  );
};