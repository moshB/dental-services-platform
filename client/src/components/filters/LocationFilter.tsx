import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const LocationFilter = ({ onLocationChange }: { 
  onLocationChange: (location: { lat?: number; lng?: number; radius: number }) => void 
}) => {
  const [radius, setRadius] = useState([10]);
  const [currentLocation, setCurrentLocation] = useState<{lat?: number; lng?: number}>({});
  const [isLocating, setIsLocating] = useState(false);

  const getCurrentLocation = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          onLocationChange({ lat: latitude, lng: longitude, radius: radius[0] });
          setIsLocating(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLocating(false);
        }
      );
    }
  };

  useEffect(() => {
    if (currentLocation.lat && currentLocation.lng) {
      onLocationChange({ ...currentLocation, radius: radius[0] });
    }
  }, [radius]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          onClick={getCurrentLocation}
          disabled={isLocating}
        >
          <MapPin className="w-4 h-4 mr-2" />
          {isLocating ? "Locating..." : "Use Current Location"}
        </Button>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Distance Radius (km)</label>
        <Slider
          value={radius}
          onValueChange={setRadius}
          max={50}
          min={1}
          step={1}
          className="my-4"
        />
        <div className="text-sm text-muted-foreground">
          Within {radius}km
        </div>
      </div>
    </div>
  );
};