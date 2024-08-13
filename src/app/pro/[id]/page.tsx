import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  BathIcon,
  BedIcon,
  FlameIcon,
  MountainIcon,
  OptionIcon,
  ParkingMeterIcon,
  PinIcon,
  RulerIcon,
  Wallet,
  WifiIcon,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/placeholder.svg"
          alt="Property Image"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Stunning Mountain Retreat
          </h1>
          <p className="mt-2 text-lg sm:text-xl">Santa Cruz, California</p>
        </div>
      </section>
      <section className="container mx-auto my-12 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <BedIcon className="h-8 w-8" />
          <span className="text-lg font-semibold">4 Bedrooms</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <BathIcon className="h-8 w-8" />
          <span className="text-lg font-semibold">3 Bathrooms</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <RulerIcon className="h-8 w-8" />
          <span className="text-lg font-semibold">2,500 sq ft</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <OptionIcon className="h-8 w-8" />
          <span className="text-lg font-semibold">0.5 Acres</span>
        </div>
      </section>
      <section className="container mx-auto my-12 px-4">
        <h2 className="mb-6 text-2xl font-bold">Gallery</h2>
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Image
                  src="/placeholder.svg"
                  alt="Property Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Image
                  src="/placeholder.svg"
                  alt="Property Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Image
                  src="/placeholder.svg"
                  alt="Property Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Image
                  src="/placeholder.svg"
                  alt="Property Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Image
                  src="/placeholder.svg"
                  alt="Property Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="container mx-auto my-12 px-4">
        <h2 className="mb-6 text-2xl font-bold">Amenities</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <WifiIcon className="h-8 w-8" />
            <span className="text-lg font-semibold">Wifi</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <FlameIcon className="h-8 w-8" />
            <span className="text-lg font-semibold">Fireplace</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <BathIcon className="h-8 w-8" />
            <span className="text-lg font-semibold">Hot Tub</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <FlameIcon className="h-8 w-8" />
            <span className="text-lg font-semibold">Grill</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <ParkingMeterIcon className="h-8 w-8" />
            <span className="text-lg font-semibold">Parking</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <MountainIcon className="h-8 w-8" />
            <span className="text-lg font-semibold">Mountain View</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <PinIcon className="h-8 w-8" />
            <span className="text-lg font-semibold">Patio</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Wallet className="h-8 w-8" />
            <span className="text-lg font-semibold">Pool</span>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-12 px-4">
        <h2 className="mb-6 text-2xl font-bold">Description</h2>
        <div className="prose max-w-none">
          <p>
            Welcome to this stunning mountain retreat nestled in the heart of
            Santa Cruz, California. This spacious 4-bedroom, 3-bathroom home
            offers breathtaking views of the surrounding peaks and a peaceful
            escape from the hustle and bustle of everyday life.
          </p>
          <p>
            As you step inside, you&apos;ll be greeted by an open-concept floor
            plan that seamlessly blends the living, dining, and kitchen areas,
            creating a warm and inviting atmosphere. The large windows
            throughout the home flood the space with natural light, enhancing
            the airy and bright ambiance.
          </p>
          <p>
            The gourmet kitchen is equipped with high-end appliances and ample
            counter space, making it the perfect setting for culinary
            adventures. Entertain guests on the expansive patio, complete with a
            built-in grill and a soothing hot tub, or cozy up by the fireplace
            in the living room for a relaxing evening.
          </p>
          <p>
            Retreat to the master suite, which boasts a luxurious en-suite
            bathroom and direct access to the patio, offering a private oasis.
            The additional bedrooms provide ample space for family and friends,
            ensuring everyone can enjoy the comforts of this exceptional
            property.
          </p>
          <p>
            Situated on a 0.5-acre lot, this home offers the perfect balance of
            privacy and convenience, with easy access to the nearby hiking
            trails, beaches, and charming downtown Santa Cruz. Experience the
            ultimate in mountain living and make this your new sanctuary.
          </p>
        </div>
      </section>
      <section className="container mx-auto my-12 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <Avatar className="h-20 w-20 border">
            <AvatarImage src="/placeholder-user.jpg" alt="Agent Name" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Agent Name</h3>
            <p className="text-muted-foreground">Real Estate Agent</p>
            <p className="text-muted-foreground">Acme Realty</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Call Agent
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              prefetch={false}
            >
              Email Agent
            </Link>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-bold">Contact Us</h2>
          <form className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
            </div>
            <Textarea rows={5} placeholder="Message" />
            <Button type="submit" className="justify-self-end">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
