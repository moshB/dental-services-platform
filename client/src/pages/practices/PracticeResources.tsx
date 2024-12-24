import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  FileText, 
  GraduationCap, 
  BarChart3, 
  Users, 
  ClipboardList 
} from "lucide-react";

const PracticeResources = () => {
  const navigate = useNavigate();

  const resources = [
    {
      title: "Practice Management Guides",
      description: "Comprehensive guides on running an efficient dental practice",
      icon: <BookOpen className="h-6 w-6" />,
      action: () => navigate("/materials/catalog")
    },
    {
      title: "Regulatory Compliance",
      description: "Stay up-to-date with dental practice regulations and requirements",
      icon: <FileText className="h-6 w-6" />,
      action: () => navigate("/legal/terms")
    },
    {
      title: "Training Resources",
      description: "Professional development materials for your dental team",
      icon: <GraduationCap className="h-6 w-6" />,
      action: () => navigate("/practice/materials")
    },
    {
      title: "Market Analysis",
      description: "Insights and trends in the dental industry",
      icon: <BarChart3 className="h-6 w-6" />,
      action: () => navigate("/data/insights")
    },
    {
      title: "Staff Management",
      description: "Tools and tips for managing your dental practice team",
      icon: <Users className="h-6 w-6" />,
      action: () => navigate("/practice/settings")
    },
    {
      title: "Best Practices",
      description: "Industry-leading practices and protocols",
      icon: <ClipboardList className="h-6 w-6" />,
      action: () => navigate("/practices/directory")
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Practice Resources</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access comprehensive resources and tools to help your dental practice thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </div>
                <p className="text-muted-foreground">{resource.description}</p>
                <Button 
                  onClick={resource.action}
                  className="w-full"
                  variant="outline"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeResources;