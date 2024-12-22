import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Menu, X } from "lucide-react";
import { NavLinks } from "./nav/NavLinks";
import { AuthButtons } from "./nav/AuthButtons";
import { MobileMenu } from "./nav/MobileMenu";

export const MainNav = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleSignOut = () => {
    localStorage.removeItem("isSignedIn");
    localStorage.removeItem("userType");
    setIsSignedIn(false);
    setUserType(null);
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
    });
    window.dispatchEvent(new Event("authChange"));
  };

  return (
    <div className="border-b sticky top-0 bg-background z-50">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link to="/" className="mr-6 relative z-50">
          <img src="/lovable-uploads/db0226bc-8c42-4c6a-90a4-477f2aef6434.png" alt="AlldentZ" className="h-8" />
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        <div className="hidden md:flex ml-auto items-center space-x-4">
          <NavLinks />
          <AuthButtons 
            isSignedIn={isSignedIn} 
            userType={userType}
            onSignOut={handleSignOut}
          />
        </div>

        {isMobileMenuOpen && (
          <MobileMenu
            isSignedIn={isSignedIn}
            userType={userType}
            onSignOut={handleSignOut}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
};