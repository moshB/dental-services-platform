import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export const OpeningHoursFilter = () => {
  const [startTime, setStartTime] = useState(8); // 8 AM default
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const formatTime = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour}:00 ${period}`;
  };

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  const handleDayToggle = (day: string) => {
    setSelectedDays(current =>
      current.includes(day)
        ? current.filter(d => d !== day)
        : [...current, day]
    );
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Opening Time</label>
        <Slider
          min={6}
          max={22}
          step={1}
          value={[startTime]}
          onValueChange={(value) => setStartTime(value[0])}
          className="my-4"
        />
        <div className="text-sm text-muted-foreground">
          Opens at {formatTime(startTime)}
        </div>
      </div>

      <div className="space-y-2 pt-4 border-t">
        <label className="text-sm font-medium mb-2 block">Open Days</label>
        {daysOfWeek.map((day) => (
          <div key={day} className="flex items-center space-x-2">
            <Checkbox
              id={`day-${day}`}
              checked={selectedDays.includes(day)}
              onCheckedChange={() => handleDayToggle(day)}
            />
            <label
              htmlFor={`day-${day}`}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {day}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};