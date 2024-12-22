import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/db0226bc-8c42-4c6a-90a4-477f2aef6434.png" 
              alt="AlldentZ Logo" 
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              A better Dental Market for patients and practitioners
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Practices</h4>
            <ul className="space-y-2">
              <li><Link to="/practices/search" className="text-sm text-muted-foreground hover:text-primary">Advanced Search</Link></li>
              <li><Link to="/practices/directory" className="text-sm text-muted-foreground hover:text-primary">Directory</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/data/insights" className="text-sm text-muted-foreground hover:text-primary">Dental Data</Link></li>
              <li><Link to="/faqs" className="text-sm text-muted-foreground hover:text-primary">FAQs</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground order-2 sm:order-1">
            © AlldentZ 2024. All rights reserved.
          </div>
          <div className="flex gap-6 order-1 sm:order-2">
            <Link to="/legal/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link to="/legal/cookie" className="text-sm text-muted-foreground hover:text-primary">Cookie Policy</Link>
            <Link to="/legal/terms" className="text-sm text-muted-foreground hover:text-primary">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};