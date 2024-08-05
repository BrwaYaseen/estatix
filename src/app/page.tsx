import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-[url('/hero-image.jpg')] bg-cover bg-center h-[60vh] flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg mb-8">
            Search for properties in your desired location
          </p>
          <form className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Enter a city, address, or ZIP code"
              className="flex-1"
            />
            <Button>Search</Button>
          </form>
        </section>
        <section className="py-12 px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card>
                    <Image
                      src="/placeholder.svg"
                      width={400}
                      height={250}
                      alt="Property 1"
                      className="rounded-t-lg object-cover"
                      style={{ aspectRatio: "400/250", objectFit: "cover" }}
                    />
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                        3 Bed, 2 Bath House
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        123 Main St, San Francisco, CA 94101
                      </p>
                      <p className="text-lg font-bold">$1,200,000</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card>
                    <Image
                      src="/placeholder.svg"
                      width={400}
                      height={250}
                      alt="Property 2"
                      className="rounded-t-lg object-cover"
                      style={{ aspectRatio: "400/250", objectFit: "cover" }}
                    />
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                        2 Bed, 1 Bath Condo
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        456 Oak St, Oakland, CA 94602
                      </p>
                      <p className="text-lg font-bold">$800,000</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card>
                    <Image
                      src="/placeholder.svg"
                      width={400}
                      height={250}
                      alt="Property 3"
                      className="rounded-t-lg object-cover"
                      style={{ aspectRatio: "400/250", objectFit: "cover" }}
                    />
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">
                        4 Bed, 3 Bath House
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        789 Pine St, San Jose, CA 95112
                      </p>
                      <p className="text-lg font-bold">$1,500,000</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="bg-muted py-12 px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-8">Popular Neighborhoods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card>
              <Image
                src="/placeholder.svg"
                width={400}
                height={250}
                alt="Neighborhood 1"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/250", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">San Francisco</h3>
                <p className="text-muted-foreground">
                  Vibrant city with iconic landmarks and diverse neighborhoods.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                width={400}
                height={250}
                alt="Neighborhood 2"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/250", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">Oakland</h3>
                <p className="text-muted-foreground">
                  Thriving arts and culture scene with a growing tech industry.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                width={400}
                height={250}
                alt="Neighborhood 3"
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/250", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">San Jose</h3>
                <p className="text-muted-foreground">
                  Silicon Valley hub with a mix of tech companies and suburban
                  living.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-12 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-muted-foreground mb-8">
                We are a leading real estate company dedicated to helping people
                find their dream homes. With years of experience and a team of
                knowledgeable agents, we strive to provide the best service and
                support to our clients.
              </p>
              <Button>Learn More</Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="About Us"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
