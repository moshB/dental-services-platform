import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (role: string) => {
    // In a real app, you would validate and submit credentials here
    switch (role) {
      case "patient":
        navigate("/patient/dashboard");
        break;
      case "practice":
        navigate("/practice/materials");
        break;
      case "supplier":
        navigate("/materials/catalog");
        break;
    }
    
    // Set auth state in localStorage
    localStorage.setItem("isSignedIn", "true");
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("authChange"));
    
    // Show success toast
    toast({
      title: "Registration Successful",
      description: `Welcome! Your ${role} account has been created. A confirmation email has been sent.`,
    });
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        <Tabs defaultValue="patient" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="patient">Patient</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="supplier">Supplier</TabsTrigger>
          </TabsList>
          
          <TabsContent value="patient">
            <Card className="p-6">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleRegister("patient"); }}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button className="w-full">Sign Up as Patient</Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="practice">
            <Card className="p-6">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleRegister("practice"); }}>
                <div className="space-y-2">
                  <Label htmlFor="practiceName">Practice Name</Label>
                  <Input id="practiceName" placeholder="Dental Care Clinic" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="practiceEmail">Business Email</Label>
                  <Input 
                    id="practiceEmail" 
                    type="email" 
                    placeholder="contact@dentalcare.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="practicePassword">Password</Label>
                  <Input 
                    id="practicePassword" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="license">License Number</Label>
                  <Input id="license" placeholder="GDC Number" />
                </div>
                <Button className="w-full">Sign Up as Practice</Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="supplier">
            <Card className="p-6">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleRegister("supplier"); }}>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" placeholder="Dental Supplies Co." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplierEmail">Business Email</Label>
                  <Input 
                    id="supplierEmail" 
                    type="email" 
                    placeholder="contact@supplier.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplierPassword">Password</Label>
                  <Input 
                    id="supplierPassword" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessRegistration">Business Registration Number</Label>
                  <Input id="businessRegistration" placeholder="Company Registration Number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplierType">Type of Supplies</Label>
                  <Input id="supplierType" placeholder="e.g., Dental Materials, Equipment" />
                </div>
                <Button className="w-full">Sign Up as Supplier</Button>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Register;