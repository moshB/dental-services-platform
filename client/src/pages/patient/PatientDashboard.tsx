import { PatientDetailsForm } from "@/components/patient/PatientDetailsForm";
import { DashboardRatings } from "@/components/dashboard/DashboardRatings";
import { DashboardAppointments } from "@/components/dashboard/DashboardAppointments";
import { DashboardHistory } from "@/components/dashboard/DashboardHistory";
import { DashboardDocuments } from "@/components/dashboard/DashboardDocuments";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Star, Calendar, ClipboardList, FileText } from "lucide-react";

const mockTreatmentHistory = [
  {
    id: 1,
    date: "2024-01-15",
    treatment: "Dental Cleaning",
    doctor: "Dr. Smith",
    cost: 75.00,
    invoice: "INV-2024-001"
  },
  {
    id: 2,
    date: "2023-12-01",
    treatment: "Cavity Filling",
    doctor: "Dr. Johnson",
    cost: 150.00,
    invoice: "INV-2023-089"
  }
];

const mockDocuments = [
  {
    id: 1,
    name: "Dental X-Ray Results",
    date: "2024-01-15",
    type: "Medical Record"
  },
  {
    id: 2,
    name: "Treatment Plan",
    date: "2023-12-01",
    type: "Clinical Document"
  }
];

const PatientDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
        
        <Tabs defaultValue="details" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="details" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Patient Details
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Appointments
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              Treatment History
            </TabsTrigger>
            <TabsTrigger value="ratings" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              My Ratings
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <PatientDetailsForm />
          </TabsContent>

          <TabsContent value="appointments">
            <DashboardAppointments isOpen={true} onToggle={() => {}} />
          </TabsContent>

          <TabsContent value="history">
            <DashboardHistory 
              isOpen={true} 
              onToggle={() => {}} 
              treatmentHistory={mockTreatmentHistory} 
            />
          </TabsContent>

          <TabsContent value="ratings">
            <DashboardRatings isOpen={true} onToggle={() => {}} />
          </TabsContent>

          <TabsContent value="documents">
            <DashboardDocuments 
              isOpen={true} 
              onToggle={() => {}} 
              documents={mockDocuments} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientDashboard;