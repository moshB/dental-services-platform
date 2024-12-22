import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

interface MobileMenuProps {
  isSignedIn: boolean;
  userType: string | null;
  onSignOut: () => void;
  onClose: () => void;
}

export const MobileMenu = ({ isSignedIn, userType, onSignOut, onClose }: MobileMenuProps) => {
  const handleSignOut = () => {
    onSignOut();
    onClose();
  };

  const getDashboardLink = () => {
    switch(userType) {
      case 'practice':
        return '/practice/materials';
      case 'patient':
        return '/patient/dashboard';
      case 'supplier':
        return '/supplier/dashboard';
      default:
        return '/auth/login';
    }
  };

  return (
    <div className="fixed inset-0 top-16 bg-background z-40 md:hidden">
      <div className="flex flex-col p-4 space-y-4">
        {isSignedIn && (
          <Link to={getDashboardLink()} onClick={onClose}>
            <Button variant="ghost" className="w-full justify-start">
              <User className="h-5 w-5 mr-2" />
              Dashboard
            </Button>
          </Link>
        )}
        <Link to="/practices/search" onClick={onClose}>
          <Button variant="ghost" className="w-full justify-start">
            Advanced Search
          </Button>
        </Link>
        <Link to="/practices/directory" onClick={onClose}>
          <Button variant="ghost" className="w-full justify-start">
            Directory
          </Button>
        </Link>
        {isSignedIn && (
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        )}
      </div>
    </div>
  );
};