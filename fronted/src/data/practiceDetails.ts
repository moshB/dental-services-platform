export const getPracticeDetails = (id: string) => ({
  id: parseInt(id),
  name: "Bright Smile Dental",
  address: "123 Main St, London, UK",
  phone: "+44 20 1234 5678",
  website: "www.brightsmile-dental.co.uk",
  distance: 2.5,
  rating: 4.8,
  reviewCount: 234,
  googleRating: 4.7,
  googleReviewCount: 156,
  googleKeywords: ["Professional", "Clean", "Modern", "Friendly staff", "Excellent service"],
  lastGoogleReview: "2024-02-15",
  description: "Specializing in general dentistry, cosmetic procedures, and orthodontics. Modern facility with state-of-the-art equipment.",
  tags: ['NHS', 'General Dentistry', 'Cosmetic'],
  openingTime: "9:00 AM",
  images: [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
      alt: "Modern dental practice exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe4",
      alt: "Reception area"
    },
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
      alt: "Treatment room"
    }
  ],
  dentists: [
    {
      name: "Dr. Sarah Johnson",
      specialties: ["General Dentistry", "Cosmetic Dentistry"],
      experience: "15 years",
      education: "King's College London",
      languages: ["English", "Spanish"]
    },
    {
      name: "Dr. Michael Chen",
      specialties: ["Orthodontics", "Pediatric Dentistry"],
      experience: "10 years",
      education: "University College London",
      languages: ["English", "Mandarin"]
    }
  ],
  facilities: [
    "Wheelchair Access",
    "Free Parking",
    "Digital X-Ray",
    "Sterilization Room",
    "Children's Play Area",
    "WiFi"
  ],
  paymentMethods: ["Credit Card", "Cash", "Insurance"],
  emergencyServices: true,
  hygiene: {
    rating: 5,
    certifications: ["CQC Registered", "ISO 9001"],
    lastInspection: "2024-01"
  },
  pricing: {
    consultation: "Free",
    cleaning: "From £60",
    whitening: "From £299",
    implants: "From £2000"
  },
  cqc: {
    rating: "Good",
    lastInspection: "2024-01-15",
    reportUrl: "https://www.cqc.org.uk/location/example"
  }
});