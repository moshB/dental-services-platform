import { useParams } from "react-router-dom";
import { DentistHeader } from "@/components/dentist/DentistHeader";
import { DentistInfo } from "@/components/dentist/DentistInfo";
import { DentistContact } from "@/components/dentist/DentistContact";
import { PatientRatings } from "@/components/PatientRatings";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DentistProfile = () => {
  const { id } = useParams();
  
  // Mock data for demonstration - in a real app, this would come from an API
  const dentist = {
    id: id || "",
    name: "Dr. Sarah Williams",
    gdcNumber: "123456",
    specialty: "Cosmetic Dentistry",
    rating: 4.9,
    reviews: 127,
    location: "123 Harley Street, London, W1G 7JU",
    phone: "+44 20 7123 4567",
    email: "dr.williams@example.com",
    website: "www.drwilliams.com",
    about: "Dr. Sarah Williams is a highly experienced cosmetic dentist with over 15 years of practice. She specializes in smile makeovers, veneers, and teeth whitening procedures.",
    education: [
      "King's College London Dental School - BDS",
      "American Academy of Cosmetic Dentistry - Accredited Member"
    ],
    services: [
      "Teeth Whitening",
      "Porcelain Veneers",
      "Dental Implants",
      "Invisalign",
      "Smile Makeovers"
    ],
    workingHours: {
      "Monday-Friday": "9:00 AM - 5:00 PM",
      "Saturday": "10:00 AM - 2:00 PM",
      "Sunday": "Closed"
    },
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2000&auto=format&fit=crop",
    languages: ["English", "Spanish"],
    experience: "15+ years in Cosmetic Dentistry"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-4">
        <Link to="/practices/directory">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4 font-bold" />
            Back to Directory
          </Button>
        </Link>
      </div>
      
      <DentistHeader dentist={dentist} />
      
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DentistInfo dentist={dentist} />
            <PatientRatings />
          </div>
          <div>
            <DentistContact dentist={dentist} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistProfile;