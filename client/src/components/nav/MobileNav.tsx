import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

interface MobileNavProps {
  isSignedIn: boolean;
  handleAuthAction: () => void;
  handleProfileClick: () => void;
  toggleMobileMenu: () => void;
}

export const MobileNav = ({ isSignedIn, handleAuthAction, handleProfileClick, toggleMobileMenu }: MobileNavProps) => {
  return (
    <div className="fixed inset-0 top-16 bg-background z-40 md:hidden">
      <div className="flex flex-col p-4 space-y-4">
        <Link to="/practices/search" onClick={toggleMobileMenu}>
          <Button variant="ghost" className="w-full justify-start">
            Advanced Search
          </Button>
        </Link>
        <Link to="/practices/directory" onClick={toggleMobileMenu}>
          <Button variant="ghost" className="w-full justify-start">
            Directory
          </Button>
        </Link>
        {isSignedIn ? (
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => {
              handleAuthAction();
              toggleMobileMenu();
            }}
          >
            <User className="h-5 w-5 mr-2" />
            Sign Out
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                handleAuthAction();
                toggleMobileMenu();
              }}
            >
              Sign In
            </Button>
            <Link to="/auth/patient/register" onClick={toggleMobileMenu}>
              <Button className="w-full">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};