import { Share2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SocialMediaStats } from "@/components/practice/marketing/SocialMediaStats";
import { NewPostForm } from "@/components/practice/marketing/NewPostForm";
import { PostsList, SocialPost } from "@/components/practice/marketing/PostsList";

const SocialMedia = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<SocialPost[]>([
    {
      id: 1,
      platform: "facebook",
      content: "Join us for our Spring Dental Health Campaign! Book your appointment today.",
      scheduledDate: "2024-03-20",
      status: "scheduled",
      engagement: 245,
    },
    {
      id: 2,
      platform: "instagram",
      content: "Transform your smile with our professional whitening services! ✨",
      scheduledDate: "2024-03-18",
      status: "published",
      engagement: 532,
    },
  ]);

  const handleCreatePost = (newPost: {
    platform: "facebook" | "instagram" | "twitter";
    content: string;
    scheduledDate: string;
  }) => {
    if (!newPost.content.trim()) {
      toast({
        title: "Error",
        description: "Please enter post content",
        variant: "destructive",
      });
      return;
    }

    const post: SocialPost = {
      id: posts.length + 1,
      ...newPost,
      status: "draft",
      engagement: 0,
    };

    setPosts([post, ...posts]);
    toast({
      title: "Success",
      description: "Post created successfully",
    });
  };

  return (
    <div className="container mx-auto py-4 sm:py-8 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/practice/materials")}
            className="shrink-0"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Share2 className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Social Media Management</h1>
          </div>
        </div>
      </div>

      <SocialMediaStats
        totalPosts={posts.length}
        totalEngagement={posts.reduce((acc, curr) => acc + curr.engagement, 0)}
        scheduledPosts={posts.filter(p => p.status === "scheduled").length}
      />

      <NewPostForm onCreatePost={handleCreatePost} />

      <PostsList posts={posts} />
    </div>
  );
};

export default SocialMedia;