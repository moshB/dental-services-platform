import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export interface SocialPost {
  id: number;
  platform: "facebook" | "instagram" | "twitter";
  content: string;
  scheduledDate: string;
  status: "scheduled" | "published" | "draft";
  engagement: number;
}

interface PostsListProps {
  posts: SocialPost[];
}

export const PostsList = ({ posts }: PostsListProps) => {
  const PlatformIcon = ({ platform }: { platform: SocialPost["platform"] }) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-5 w-5" />;
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "twitter":
        return <Twitter className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PlatformIcon platform={post.platform} />
                <span className="font-semibold capitalize">{post.platform}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  post.status === "published"
                    ? "bg-green-100 text-green-800"
                    : post.status === "scheduled"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                </span>
              </div>
              <p className="text-sm">{post.content}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>Scheduled: {post.scheduledDate}</span>
                <span>Engagement: {post.engagement}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="self-start">
              Edit
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};