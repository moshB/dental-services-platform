import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TIME_SLOTS = [
  "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

export const AvailabilityFilter = ({ 
  availability, 
  onAvailabilityChange 
}: {
  availability: {
    nextAvailable: string;
    weekend: boolean;
    evening: boolean;
    emergency: boolean;
    timeSlots?: string[];
  };
  onAvailabilityChange: (availability: any) => void;
}) => {
  const handleTimeSlotChange = (timeSlot: string, checked: boolean) => {
    const currentSlots = availability.timeSlots || [];
    const updatedSlots = checked 
      ? [...currentSlots, timeSlot]
      : currentSlots.filter(slot => slot !== timeSlot);
    
    onAvailabilityChange({
      ...availability,
      timeSlots: updatedSlots
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium mb-2 block">Next Available Appointment</Label>
        <Select
          value={availability.nextAvailable}
          onValueChange={(value) => onAvailabilityChange({ ...availability, nextAvailable: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Within 24 hours</SelectItem>
            <SelectItem value="3d">Within 3 days</SelectItem>
            <SelectItem value="7d">Within 7 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium mb-2 block">Preferred Time Slots</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {TIME_SLOTS.map((time) => (
            <div key={time} className="flex items-center space-x-2">
              <Checkbox
                id={`time-${time}`}
                checked={availability.timeSlots?.includes(time)}
                onCheckedChange={(checked) => handleTimeSlotChange(time, checked as boolean)}
              />
              <Label htmlFor={`time-${time}`} className="text-sm">{time}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm">Weekend Availability</Label>
          <Switch
            checked={availability.weekend}
            onCheckedChange={(checked) => 
              onAvailabilityChange({ ...availability, weekend: checked })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <Label className="text-sm">Evening Appointments</Label>
          <Switch
            checked={availability.evening}
            onCheckedChange={(checked) => 
              onAvailabilityChange({ ...availability, evening: checked })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <Label className="text-sm">Emergency Services</Label>
          <Switch
            checked={availability.emergency}
            onCheckedChange={(checked) => 
              onAvailabilityChange({ ...availability, emergency: checked })
            }
          />
        </div>
      </div>
    </div>
  );
};