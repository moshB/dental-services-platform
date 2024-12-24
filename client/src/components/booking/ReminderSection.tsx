import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { MessageSquare, Mail } from "lucide-react";

interface ReminderSectionProps {
  reminders: {
    sms: boolean;
    whatsapp: boolean;
    email: boolean;
  };
  setReminders: (reminders: any) => void;
}

export const ReminderSection = ({ reminders, setReminders }: ReminderSectionProps) => {
  return (
    <div className="space-y-2">
      <Label>Appointment Reminders</Label>
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="sms" 
            checked={reminders.sms}
            onCheckedChange={(checked) => 
              setReminders(prev => ({ ...prev, sms: checked as boolean }))
            }
          />
          <Label htmlFor="sms" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> SMS Reminders
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="whatsapp"
            checked={reminders.whatsapp}
            onCheckedChange={(checked) => 
              setReminders(prev => ({ ...prev, whatsapp: checked as boolean }))
            }
          />
          <Label htmlFor="whatsapp" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> WhatsApp Reminders
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="email"
            checked={reminders.email}
            onCheckedChange={(checked) => 
              setReminders(prev => ({ ...prev, email: checked as boolean }))
            }
          />
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> Email Reminders
          </Label>
        </div>
      </div>
    </div>
  );
};