// import { useNavigate } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// interface RegisterProps {
//   userType: "patient" | "practice" | "supplier";
// }

// const Register = ({ userType }: RegisterProps) => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, you would validate and submit credentials here
//     localStorage.setItem("userType", userType);
//     localStorage.setItem("isSignedIn", "true");
    
//     // Dispatch custom event to notify other components
//     window.dispatchEvent(new Event("authChange"));
    
//     // Show success toast
//     toast({
//       title: "Registration Successful",
//       description: `Welcome! Your ${userType} account has been created.`,
//     });

//     // Redirect based on role
//     switch (userType) {
//       case "supplier":
//         navigate("/supplier/dashboard");
//         break;
//       case "practice":
//         navigate("/practice/materials");
//         break;
//       case "patient":
//         navigate("/patient/dashboard");
//         break;
//     }
//   };

//   const getTitleText = () => {
//     switch (userType) {
//       case "patient":
//         return "Patient Registration";
//       case "practice":
//         return "Dental Practice Registration";
//       case "supplier":
//         return "Supplier Registration";
//       default:
//         return "Sign Up";
//     }
//   };

//   const getAdditionalFields = () => {
//     switch (userType) {
//       case "practice":
//         return (
//           <>
//             <div className="space-y-2">
//               <Label htmlFor="practiceName">Practice Name</Label>
//               <Input id="practiceName" placeholder="Dental Care Clinic" />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="license">License Number</Label>
//               <Input id="license" placeholder="GDC Number" />
//             </div>
//           </>
//         );
//       case "supplier":
//         return (
//           <>
//             <div className="space-y-2">
//               <Label htmlFor="companyName">Company Name</Label>
//               <Input id="companyName" placeholder="Dental Supplies Co." />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="businessRegistration">Business Registration Number</Label>
//               <Input id="businessRegistration" placeholder="Company Registration Number" />
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="container mx-auto py-10">
//       <div className="max-w-md mx-auto">
//         <h1 className="text-2xl font-bold text-center mb-6">{getTitleText()}</h1>
//         <Card className="p-6">
//           <form className="space-y-4" onSubmit={handleRegister}>
//             {userType === "patient" && (
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input id="name" placeholder="John Doe" />
//               </div>
//             )}
//             <div className="space-y-2">
//               <Label htmlFor="email">
//                 {userType === "patient" ? "Email" : "Business Email"}
//               </Label>
//               <Input 
//                 id="email" 
//                 type="email" 
//                 placeholder={userType === "patient" ? "john@example.com" : "contact@business.com"}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input 
//                 id="password" 
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             {getAdditionalFields()}
//             <Button type="submit" className="w-full">
//               Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
//             </Button>
//           </form>
//         </Card>
//         <p className="text-center mt-4 text-sm text-muted-foreground">
//           Already have an account?{" "}
//           <Link 
//             to={`/auth/${userType}/login`} 
//             className="text-primary hover:underline"
//           >
//             Sign In
//           </Link>
//         </p>
//         {userType !== "patient" && (
//           <p className="text-center mt-2 text-sm text-muted-foreground">
//             Are you a patient?{" "}
//             <Link to="/auth/patient/register" className="text-primary hover:underline">
//               Sign up as Patient
//             </Link>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

interface RegisterProps {
  userType: "patient" | "practice" | "supplier";
}

const Register = ({ userType }: RegisterProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    practiceName: "",
    license: "",
    companyName: "",
    businessRegistration: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_API_URL);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          full_name: formData.fullName,
          // practice_name: userType === "practice" ? formData.practiceName : undefined,
          // license: userType === "practice" ? formData.license : undefined,
          // company_name: userType === "supplier" ? formData.companyName : undefined,
          // business_registration: userType === "supplier" ? formData.businessRegistration : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      toast({
        title: "Registration Successful",
        description: `Welcome! Your ${userType} account has been created.`,
      });

      // Redirect based on role
      switch (userType) {
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
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error while creating your account. Please try again.",
      });
    }
  };

  const getTitleText = () => {
    switch (userType) {
      case "patient":
        return "Patient Registration";
      case "practice":
        return "Dental Practice Registration";
      case "supplier":
        return "Supplier Registration";
      default:
        return "Sign Up";
    }
  };

  const getAdditionalFields = () => {
    switch (userType) {
      case "practice":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="practiceName">Practice Name</Label>
              <Input id="practiceName" placeholder="Dental Care Clinic" value={formData.practiceName} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="license">License Number</Label>
              <Input id="license" placeholder="GDC Number" value={formData.license} onChange={handleInputChange} />
            </div>
          </>
        );
      case "supplier":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" placeholder="Dental Supplies Co." value={formData.companyName} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessRegistration">Business Registration Number</Label>
              <Input id="businessRegistration" placeholder="Company Registration Number" value={formData.businessRegistration} onChange={handleInputChange} />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">{getTitleText()}</h1>
        <Card className="p-6">
          <form className="space-y-4" onSubmit={handleRegister}>
            {userType === "patient" && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleInputChange} />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">
                {userType === "patient" ? "Email" : "Business Email"}
              </Label>
              <Input id="email" type="email" placeholder={userType === "patient" ? "john@example.com" : "contact@business.com"} value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={formData.password} onChange={handleInputChange} />
            </div>
            {getAdditionalFields()}
            <Button type="submit" className="w-full">
              Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
            </Button>
          </form>
        </Card>
        <p className="text-center mt-4 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to={`/auth/${userType}/login`} className="text-primary hover:underline">
            Sign In
          </Link>
        </p>
        {userType !== "patient" && (
          <p className="text-center mt-2 text-sm text-muted-foreground">
            Are you a patient?{" "}
            <Link to="/auth/patient/register" className="text-primary hover:underline">
              Sign up as Patient
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
