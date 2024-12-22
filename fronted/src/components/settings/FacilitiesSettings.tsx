import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const FACILITIES = {
  "Treatment Rooms": ["Basic", "Advanced", "Surgery", "Recovery"],
  "Imaging Equipment": ["X-Ray", "CT Scan", "3D Scanner"],
  "Sterilization": ["Autoclave", "UV Sterilizer", "Chemical Sterilization"],
  "Patient Amenities": ["WiFi", "TV", "Refreshments", "Children's Play Area"],
  "Accessibility": ["Wheelchair Access", "Elevator", "Parking", "Public Transport"],
  "Technology": ["Digital Records", "Online Booking", "Patient Portal"],
  "Specialized Equipment": ["Laser Treatment", "CAD/CAM", "Dental Microscope"],
  "Emergency Facilities": ["Emergency Room", "First Aid", "Ambulance Access"],
  "Staff Facilities": ["Break Room", "Changing Room", "Training Room"],
  "Additional Services": ["Laboratory", "Pharmacy", "Consultation Room"]
};

export const FacilitiesSettings = ({ form }: { form: any }) => {
  return (
    <div className="space-y-6">
      {Object.entries(FACILITIES).map(([category, options]) => (
        <FormField
          key={category}
          control={form.control}
          name={`facilities.${category}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{category}</FormLabel>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value?.includes(option)}
                      onCheckedChange={(checked) => {
                        const updatedOptions = checked
                          ? [...(field.value || []), option]
                          : (field.value || []).filter((o: string) => o !== option);
                        field.onChange(updatedOptions);
                      }}
                    />
                    <label className="text-sm">{option}</label>
                  </div>
                ))}
              </div>
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};