import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { PersonalInfoSection } from "./form/PersonalInfoSection";
import { MedicalInfoSection } from "./form/MedicalInfoSection";

export const PatientDetailsForm = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    full_name: "",
    date_of_birth: "",
    email: "",
    phone: "",
    address: "",
    nhs_number: "",
    medical_history: "",
    dental_history: "",
    allergies: "",
    medications: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      if (data) setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive",
      });
    }
  };

  const handleSave = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('profiles')
        .update(profile)
        .eq('id', user.id);

      if (error) throw error;

      setIsEditing(false);
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    const fieldMap: { [key: string]: string } = {
      medical_condition: "medical_history",
      dental_condition: "dental_history",
      allergy_type: "allergies",
      medication_frequency: "medications"
    };

    const targetField = fieldMap[field];
    if (targetField) {
      setProfile(prev => ({
        ...prev,
        [targetField]: prev[targetField] ? `${prev[targetField]}\n${value}` : value
      }));
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Personal Information</CardTitle>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>Edit Details</Button>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        <PersonalInfoSection
          profile={profile}
          handleChange={handleChange}
          isEditing={isEditing}
        />
        <MedicalInfoSection
          profile={profile}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          isEditing={isEditing}
        />
      </CardContent>
      {isEditing && (
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardFooter>
      )}
    </Card>
  );
};