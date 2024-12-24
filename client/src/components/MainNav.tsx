import { Button } from "./ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./nav/DesktopNav";
import { MobileNav } from "./nav/MobileNav";

export const MainNav = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem("isSignedIn") === "true";
      const type = localStorage.getItem("userType");
      setIsSignedIn(authStatus);
      setUserType(type);
    };

    checkAuthStatus();
    window.addEventListener("storage", checkAuthStatus);
    window.addEventListener("authChange", checkAuthStatus);

    return () => {
      window.removeEventListener("storage", checkAuthStatus);
      window.removeEventListener("authChange", checkAuthStatus);
    };
  }, []);

  const handleAuthAction = () => {
    if (isSignedIn) {
      localStorage.removeItem("isSignedIn");
      localStorage.removeItem("userType");
      setIsSignedIn(false);
      setUserType(null);
      navigate("/");
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out.",
      });
      window.dispatchEvent(new Event("authChange"));
    } else {
      // Default to patient login if no user type is set
      const defaultUserType = location.pathname.includes('supplier') ? 'supplier' : 'patient';
      navigate(`/auth/${defaultUserType}/login`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleProfileClick = () => {
    switch(userType) {
      case 'practice':
        navigate('/practice/materials');
        break;
      case 'patient':
        navigate('/patient/dashboard');
        break;
      case 'supplier':
        navigate('/supplier/dashboard');
        break;
      default:
        navigate('/auth/login');
    }
  };

  return (
    <div className="border-b sticky top-0 bg-background z-50">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link to="/" className="mr-auto md:mr-6 flex-shrink-0">
          <img 
            src="/lovable-uploads/db0226bc-8c42-4c6a-90a4-477f2aef6434.png" 
            alt="AlldentZ" 
            className="h-8 w-auto"
          />
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="ml-2 md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        <DesktopNav 
          isSignedIn={isSignedIn}
          handleAuthAction={handleAuthAction}
          handleProfileClick={handleProfileClick}
        />

        {isMobileMenuOpen && (
          <MobileNav 
            isSignedIn={isSignedIn}
            handleAuthAction={handleAuthAction}
            handleProfileClick={handleProfileClick}
            toggleMobileMenu={toggleMobileMenu}
          />
        )}
      </div>
    </div>
  );
};