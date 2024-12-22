import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CreditCard } from "lucide-react";
import { useToast } from "./ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ContactSection } from "./booking/ContactSection";
import { ReminderSection } from "./booking/ReminderSection";
import { DateTimeSection } from "./booking/DateTimeSection";

const treatments = [
  { id: "cleaning", name: "Teeth Cleaning", price: 150 },
  { id: "checkup", name: "Regular Checkup", price: 100 },
  { id: "filling", name: "Cavity Filling", price: 200 },
  { id: "whitening", name: "Teeth Whitening", price: 300 },
  { id: "extraction", name: "Tooth Extraction", price: 250 },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

// In a real app, these would come from the practice's data and user's profile
const dentists = [
  { id: "default", name: "Dr. Sarah Williams (Practice's Primary Dentist)", type: "default" },
  { id: "usual", name: "Dr. James Thompson (Your Regular Dentist)", type: "usual" },
  { id: "other", name: "Request Different Dentist", type: "other" }
];

const sendConfirmationEmail = async (bookingDetails: any) => {
  // In a real application, this would connect to your email service
  // For now, we'll simulate the email sending
  console.log("Sending confirmation email with details:", bookingDetails);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const BookingForm = () => {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedTreatment, setSelectedTreatment] = useState<string>();
  const [selectedDentist, setSelectedDentist] = useState<string>("default");
  const [reminders, setReminders] = useState({
    sms: false,
    whatsapp: false,
    email: false
  });
  const { toast } = useToast();

  const handlePayment = async () => {
    // In a real application, this would integrate with a payment provider like Stripe
    toast({
      title: "Processing payment...",
      description: "This is a mock payment process. In a real application, this would connect to a payment gateway.",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const bookingDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      treatment: selectedTreatment,
      dentist: selectedDentist,
      appointmentDate: date,
      appointmentTime: selectedTime,
      contactMethod,
      reminders
    };

    try {
      await handlePayment();
      await sendConfirmationEmail(bookingDetails);
      
      toast({
        title: "Booking Confirmed!",
        description: "A confirmation email has been sent to your email address.",
      });
      
      console.log("Booking details:", bookingDetails);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    }
  };

  const selectedTreatmentDetails = treatments.find(t => t.id === selectedTreatment);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">Book an Appointment</h2>
        <p className="text-muted-foreground text-center">Fill in your details and we'll get back to you</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required />
        </div>

        <ContactSection 
          contactMethod={contactMethod} 
          setContactMethod={setContactMethod}
          existingPhone="123-456-7890" // This would come from user profile in a real app
        />

        <div>
          <Label htmlFor="dentist">Select Dentist</Label>
          <Select value={selectedDentist} onValueChange={setSelectedDentist}>
            <SelectTrigger>
              <SelectValue placeholder="Choose your preferred dentist" />
            </SelectTrigger>
            <SelectContent>
              {dentists.map((dentist) => (
                <SelectItem key={dentist.id} value={dentist.id}>
                  {dentist.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="treatment">Select Treatment</Label>
          <Select onValueChange={setSelectedTreatment}>
            <SelectTrigger>
              <SelectValue placeholder="Select a treatment" />
            </SelectTrigger>
            <SelectContent>
              {treatments.map((treatment) => (
                <SelectItem key={treatment.id} value={treatment.id}>
                  {treatment.name} - ${treatment.price}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DateTimeSection 
          date={date}
          setDate={setDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          timeSlots={timeSlots}
        />

        <ReminderSection reminders={reminders} setReminders={setReminders} />

        {selectedTreatmentDetails && (
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Payment Summary</h3>
            <div className="flex justify-between items-center">
              <span>{selectedTreatmentDetails.name}</span>
              <span className="font-semibold">${selectedTreatmentDetails.price}</span>
            </div>
          </div>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={!selectedTreatment || !date || !selectedTime || !selectedDentist}>
        <CreditCard className="mr-2 h-4 w-4" />
        Book and Pay Now
      </Button>
    </form>
  );
};