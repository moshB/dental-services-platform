export interface DentistProfile {
  id: string;
  name: string;
  gdcNumber: string;
  specialty: string;
  rating: number;
  reviews: number;
  location: string;
  phone: string;
  email: string;
  website: string;
  about: string;
  education: string[];
  services: string[];
  workingHours: {
    [key: string]: string;
  };
  image: string;
  languages: string[];
  experience: string;
}