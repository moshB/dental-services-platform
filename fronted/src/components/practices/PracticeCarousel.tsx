import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PracticeImage {
  url: string;
  alt: string;
}

interface PracticeCarouselProps {
  images: PracticeImage[];
}

export const PracticeCarousel = ({ images }: PracticeCarouselProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <AspectRatio ratio={16 / 9}>
              <img
                src={image.url}
                alt={image.alt}
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};