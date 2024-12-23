import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MedicalInfoSectionProps {
  profile: {
    medical_history: string;
    dental_history: string;
    allergies: string;
    medications: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSelectChange: (field: string, value: string) => void;
  isEditing: boolean;
}

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const MedicalInfoSection = ({ 
  profile, 
  handleChange, 
  handleSelectChange,
  isEditing 
}: MedicalInfoSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="medical_history">Medical History</Label>
        <Select 
          disabled={!isEditing}
          onValueChange={(value) => handleSelectChange("medical_condition", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select medical conditions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="diabetes">Diabetes</SelectItem>
            <SelectItem value="hypertension">Hypertension</SelectItem>
            <SelectItem value="asthma">Asthma</SelectItem>
            <SelectItem value="heart_disease">Heart Disease</SelectItem>
            <SelectItem value="none">None</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          id="medical_history"
          name="medical_history"
          value={profile.medical_history || ""}
          onChange={handleChange}
          disabled={!isEditing}
          className="min-h-[100px] mt-2"
          placeholder="Please provide details of any medical conditions..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dental_history">Dental History</Label>
        <Select 
          disabled={!isEditing}
          onValueChange={(value) => handleSelectChange("dental_condition", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select dental conditions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gum_disease">Gum Disease</SelectItem>
            <SelectItem value="cavities">Cavities</SelectItem>
            <SelectItem value="root_canal">Root Canal</SelectItem>
            <SelectItem value="braces">Braces</SelectItem>
            <SelectItem value="none">None</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          id="dental_history"
          name="dental_history"
          value={profile.dental_history || ""}
          onChange={handleChange}
          disabled={!isEditing}
          className="min-h-[100px] mt-2"
          placeholder="Please provide details of any dental procedures or conditions..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="allergies">Allergies</Label>
        <Select 
          disabled={!isEditing}
          onValueChange={(value) => handleSelectChange("allergy_type", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select allergy types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="medication">Medication Allergies</SelectItem>
            <SelectItem value="latex">Latex Allergy</SelectItem>
            <SelectItem value="anesthetic">Local Anesthetic Allergy</SelectItem>
            <SelectItem value="none">No Known Allergies</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          id="allergies"
          name="allergies"
          value={profile.allergies || ""}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="Please list any allergies..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="medications">Current Medications</Label>
        <Select 
          disabled={!isEditing}
          onValueChange={(value) => handleSelectChange("medication_frequency", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select medication frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="as_needed">As Needed</SelectItem>
            <SelectItem value="none">No Regular Medications</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          id="medications"
          name="medications"
          value={profile.medications || ""}
          onChange={handleChange}
          disabled={!isEditing}
          placeholder="Please list current medications and dosages..."
        />
      </div>
    </div>
  );
};