import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

interface DesktopNavProps {
  isSignedIn: boolean;
  handleAuthAction: () => void;
  handleProfileClick: () => void;
}

export const DesktopNav = ({ isSignedIn, handleAuthAction, handleProfileClick }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex ml-auto items-center space-x-4">
      <Link to="/practices/search">
        <Button variant="ghost">Advanced Search</Button>
      </Link>
      <Link to="/practices/directory">
        <Button variant="ghost">Directory</Button>
      </Link>
      {isSignedIn ? (
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="p-0" 
            onClick={handleProfileClick}
          >
            <User className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button variant="ghost" onClick={handleAuthAction}>
            Sign Out
          </Button>
        </div>
      ) : (
        <>
          <Button variant="ghost" onClick={handleAuthAction}>
            Sign In
          </Button>
          <Link to="/auth/patient/register">
            <Button>Sign Up</Button>
          </Link>
        </>
      )}
    </div>
  );
};