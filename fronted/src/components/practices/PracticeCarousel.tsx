// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { AspectRatio } from "@/components/ui/aspect-ratio";

// interface PracticeImage {
//   url: string;
//   alt: string;
// }

// interface PracticeCarouselProps {
//   images: PracticeImage[];
// }

// export const PracticeCarousel = ({ images }: PracticeCarouselProps) => {
//   return (
//     <Carousel className="w-full">
//       <CarouselContent>
//         {images.map((image, index) => (
//           <CarouselItem key={index}>
//             <AspectRatio ratio={16 / 9}>
//               <img
//                 src={image.url}
//                 alt={image.alt}
//                 className="rounded-lg object-cover w-full h-full"
//               />
//             </AspectRatio>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// };
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
  const defaultImage = {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    alt: "Default Clinic Image",
  };

  // אם המערך ריק, השתמש בתמונת ברירת המחדל
  const carouselImages = images.length > 0 ? images : [defaultImage];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {carouselImages.map((image, index) => (
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
