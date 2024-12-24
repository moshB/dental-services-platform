import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const CERTIFICATIONS = {
  "Regulatory": [
    "CQC Registration",
    "GDC Registration",
    "NHS Approved Provider"
  ],
  "Quality Standards": [
    "ISO 9001",
    "ISO 13485",
    "ISO 14001",
    "BDA Good Practice"
  ],
  "Specializations": [
    "Invisalign Certified",
    "Dental Implant Certification",
    "Cosmetic Dentistry Accreditation",
    "Pediatric Dentistry Certification"
  ],
  "Safety": [
    "Health and Safety Certification",
    "Infection Control Certification",
    "First Aid Certification",
    "Radiation Protection"
  ]
};

export const CertificationsSettings = ({ form }: { form: any }) => {
  return (
    <div className="space-y-6">
      {Object.entries(CERTIFICATIONS).map(([category, certifications]) => (
        <FormField
          key={category}
          control={form.control}
          name={`certifications.${category}`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{category}</FormLabel>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value?.includes(cert)}
                      onCheckedChange={(checked) => {
                        const updatedCerts = checked
                          ? [...(field.value || []), cert]
                          : (field.value || []).filter((c: string) => c !== cert);
                        field.onChange(updatedCerts);
                      }}
                    />
                    <label className="text-sm">{cert}</label>
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