import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const AVAILABLE_TAGS = [
  "NHS",
  "Private",
  "Emergency Services",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Pediatric Dentistry",
  "Implants",
  "Root Canal",
  "Teeth Whitening",
  "General Dentistry"
];

export const TagsSettings = ({ form }: { form: any }) => {
  return (
    <FormField
      control={form.control}
      name="tags"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Practice Tags</FormLabel>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {AVAILABLE_TAGS.map((tag) => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox
                  checked={field.value?.includes(tag)}
                  onCheckedChange={(checked) => {
                    const updatedTags = checked
                      ? [...(field.value || []), tag]
                      : (field.value || []).filter((t: string) => t !== tag);
                    field.onChange(updatedTags);
                  }}
                />
                <label className="text-sm">{tag}</label>
              </div>
            ))}
          </div>
        </FormItem>
      )}
    />
  );
};