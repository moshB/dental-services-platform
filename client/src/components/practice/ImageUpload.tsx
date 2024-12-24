import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Edit2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PracticeImage {
  url: string;
  alt: string;
}

interface ImageUploadProps {
  images: PracticeImage[];
  onImagesChange: (images: PracticeImage[]) => void;
  maxImages: number;
}

const imageTypes = [
  "Practice Exterior",
  "Reception Area",
  "Treatment Room",
  "Waiting Area",
  "Equipment",
  "Staff Photo",
  "Facilities",
  "Parking Area",
  "Patient Room",
  "Other"
];

export const ImageUpload = ({ images, onImagesChange, maxImages }: ImageUploadProps) => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    if (images.length + files.length > maxImages) {
      toast({
        title: "Too many images",
        description: `You can only upload up to ${maxImages} images.`,
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    // In a real app, this would upload the files to a storage service
    // For now, we'll just create object URLs
    const newImages: PracticeImage[] = Array.from(files).map((file) => ({
      url: URL.createObjectURL(file),
      alt: "Practice Image",
    }));

    onImagesChange([...images, ...newImages]);
    setUploading(false);

    toast({
      title: "Images uploaded",
      description: "Your practice images have been uploaded successfully.",
    });
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    onImagesChange(newImages);
  };

  const handleUpdateImageType = (index: number, newType: string) => {
    const newImages = [...images];
    newImages[index] = { ...newImages[index], alt: newType };
    onImagesChange(newImages);

    toast({
      title: "Image type updated",
      description: `Image type has been set to ${newType}.`,
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {imageTypes.map((type) => (
                    <DropdownMenuItem
                      key={type}
                      onClick={() => handleUpdateImageType(index, type)}
                    >
                      {type}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleRemoveImage(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <p className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
              {image.alt}
            </p>
          </div>
        ))}
      </div>

      <div>
        <Label htmlFor="images">Upload Images</Label>
        <Input
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          disabled={uploading || images.length >= maxImages}
          className="mt-2"
        />
        <p className="text-sm text-muted-foreground mt-2">
          You can upload up to {maxImages} images. {images.length} of {maxImages} used.
        </p>
      </div>
    </div>
  );
};