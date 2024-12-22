import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (email: string, password: string, role: string) => {
    // In a real app, you would validate credentials here
    localStorage.setItem("userType", role);
    localStorage.setItem("isSignedIn", "true");
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("authChange"));
    
    // Show success toast
    toast({
      title: "Signed In Successfully",
      description: `Welcome back! You are now signed in as a ${role}.`,
    });

    // Redirect based on role
    switch (role) {
      case "supplier":
        navigate("/supplier/dashboard");
        break;
      case "practice":
        navigate("/practice/materials");
        break;
      case "patient":
        navigate("/patient/dashboard");
        break;
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
        <Tabs defaultValue="patient" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="patient">Patient</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="supplier">Supplier</TabsTrigger>
          </TabsList>
          
          <TabsContent value="patient">
            <LoginForm 
              role="patient"
              onSubmit={(email, password) => handleLogin(email, password, "patient")}
            />
          </TabsContent>

          <TabsContent value="practice">
            <LoginForm 
              role="practice"
              onSubmit={(email, password) => handleLogin(email, password, "practice")}
            />
          </TabsContent>

          <TabsContent value="supplier">
            <LoginForm 
              role="supplier"
              onSubmit={(email, password) => handleLogin(email, password, "supplier")}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;