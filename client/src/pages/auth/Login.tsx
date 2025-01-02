// import { useNavigate } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";
// import { LoginForm } from "@/components/auth/LoginForm";
// import { Link } from "react-router-dom";

// interface LoginProps {
//   userType: "patient" | "practice" | "supplier";
// }

// const Login = ({ userType }: LoginProps) => {
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const handleLogin = (email: string, password: string) => {
//     // In a real app, you would validate credentials here
//     localStorage.setItem("userType", userType);
//     localStorage.setItem("isSignedIn", "true");
    
//     // Dispatch custom event to notify other components
//     window.dispatchEvent(new Event("authChange"));
    
//     // Show success toast
//     toast({
//       title: "Signed In Successfully",
//       description: `Welcome back! You are now signed in as a ${userType}.`,
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
//         return "Patient Sign In";
//       case "practice":
//         return "Dental Practice Sign In";
//       case "supplier":
//         return "Supplier Sign In";
//       default:
//         return "Sign In";
//     }
//   };

//   return (
//     <div className="container mx-auto py-10">
//       <div className="max-w-md mx-auto">
//         <h1 className="text-2xl font-bold text-center mb-6">{getTitleText()}</h1>
//         <LoginForm role={userType} onSubmit={handleLogin} />
//         <p className="text-center mt-4 text-sm text-muted-foreground">
//           Don't have an account?{" "}
//           <Link 
//             to={`/auth/${userType}/register`} 
//             className="text-primary hover:underline"
//           >
//             Sign Up
//           </Link>
//         </p>
//         {userType !== "patient" && (
//           <p className="text-center mt-2 text-sm text-muted-foreground">
//             Are you a patient?{" "}
//             <Link to="/auth/patient/login" className="text-primary hover:underline">
//               Sign in as Patient
//             </Link>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { LoginForm } from "@/components/auth/LoginForm";
import { Link } from "react-router-dom";

interface LoginProps {
  userType: "patient" | "practice" | "supplier";
}

const Login = ({ userType }: LoginProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Login failed');
      }

      // Save user type and session state
      localStorage.setItem("userType", userType);
      localStorage.setItem("isSignedIn", "true");
      
      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event("authChange"));

      // Show success toast
      toast({
        title: "Signed In Successfully",
        description: `Welcome back! You are now signed in as a ${userType}.`,
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
    } catch (error: any) {
      // Show error toast
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getTitleText = () => {
    switch (userType) {
      case "patient":
        return "Patient Sign In";
      case "practice":
        return "Dental Practice Sign In";
      case "supplier":
        return "Supplier Sign In";
      default:
        return "Sign In";
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">{getTitleText()}</h1>
        <LoginForm role={userType} onSubmit={handleLogin} />
        <p className="text-center mt-4 text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link 
            to={`/auth/${userType}/register`} 
            className="text-primary hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {userType !== "patient" && (
          <p className="text-center mt-2 text-sm text-muted-foreground">
            Are you a patient?{" "}
            <Link to="/auth/patient/login" className="text-primary hover:underline">
              Sign in as Patient
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
