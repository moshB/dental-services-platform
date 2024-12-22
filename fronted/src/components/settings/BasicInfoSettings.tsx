import { useState } from "react";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import InputMask from 'react-input-mask';

const containerStyle = {
  width: '100%',
  height: '300px'
};

export const BasicInfoSettings = ({ form }: { form: any }) => {
  const [coordinates, setCoordinates] = useState({
    lat: 51.5074,
    lng: -0.1278
  });

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setCoordinates({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      });
    }
  };

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Practice Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <div className="mt-2">
              <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={coordinates}
                  zoom={13}
                  onClick={handleMapClick}
                >
                  <Marker position={coordinates} />
                </GoogleMap>
              </LoadScript>
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <InputMask
                mask="+44 (999) 999-9999"
                value={field.value}
                onChange={field.onChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="+44 (___) ___-____"
              />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};