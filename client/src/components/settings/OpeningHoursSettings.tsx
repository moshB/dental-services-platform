import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Generate time slots for every half hour (00 and 30 minutes)
const TIME_SLOTS = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minutes = i % 2 === 0 ? "00" : "30";
  const formattedHour = hour.toString().padStart(2, "0");
  return `${formattedHour}:${minutes}`;
});

export const OpeningHoursSettings = ({ form }: { form: any }) => {
  return (
    <div className="space-y-4">
      {DAYS.map((day) => (
        <div key={day} className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name={`openingHours.${day}.open`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{day} Opening Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_SLOTS.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`openingHours.${day}.close`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Closing Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_SLOTS.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
      ))}
    </div>
  );
};