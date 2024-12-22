import { Button } from "../ui/button";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuthButtonsProps {
  isSignedIn: boolean;
  userType: string | null;
  onSignOut: () => void;
}

export const AuthButtons = ({ isSignedIn, userType, onSignOut }: AuthButtonsProps) => {
  const navigate = useNavigate();

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

  if (isSignedIn) {
    return (
      <div className="flex items-center space-x-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="p-0" 
          onClick={handleProfileClick}
        >
          <User className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Button variant="ghost" onClick={onSignOut}>
          Sign Out
        </Button>
      </div>
    );
  }

  return null;
};