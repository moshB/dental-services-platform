import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { DashboardRatings } from "@/components/dashboard/DashboardRatings";
import { DashboardAppointments } from "@/components/dashboard/DashboardAppointments";
import { DashboardHistory } from "@/components/dashboard/DashboardHistory";
import { DashboardDocuments } from "@/components/dashboard/DashboardDocuments";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Calendar, ClipboardList, FileText } from "lucide-react";

const treatmentHistory = [
  {
    id: 1,
    date: "2024-03-15",
    treatment: "Regular Checkup",
    doctor: "Dr. Sarah Smith",
    cost: 150.00,
    invoice: "INV-2024-001"
  },
  {
    id: 2,
    date: "2024-02-01",
    treatment: "Cavity Filling",
    doctor: "Dr. John Davis",
    cost: 300.00,
    invoice: "INV-2024-002"
  },
  {
    id: 3,
    date: "2024-01-10",
    treatment: "Teeth Cleaning",
    doctor: "Dr. Sarah Smith",
    cost: 120.00,
    invoice: "INV-2024-003"
  }
];

const documents = [
  {
    id: 1,
    name: "Treatment Plan - March 2024",
    date: "2024-03-15",
    type: "Treatment Plan"
  },
  {
    id: 2,
    name: "X-Ray Results",
    date: "2024-02-01",
    type: "Medical Record"
  },
  {
    id: 3,
    name: "Invoice - February 2024",
    date: "2024-02-01",
    type: "Invoice"
  }
];

const PatientDashboard = () => {
  const { toast } = useToast();

  const handleAppointmentSection = () => {
    console.log('Sending email confirmation...');
    toast({
      title: "Confirmation Email Sent",
      description: "Check your inbox for appointment details.",
    });
  };

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
        
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
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

          <TabsContent value="appointments" className="mt-6">
            <DashboardAppointments 
              isOpen={true} 
              onToggle={handleAppointmentSection} 
            />
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <DashboardHistory 
              isOpen={true} 
              onToggle={() => {}} 
              treatmentHistory={treatmentHistory}
            />
          </TabsContent>

          <TabsContent value="ratings" className="mt-6">
            <DashboardRatings 
              isOpen={true} 
              onToggle={() => {}} 
            />
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <DashboardDocuments 
              isOpen={true} 
              onToggle={() => {}} 
              documents={documents}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientDashboard;
