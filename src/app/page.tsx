import Link from "next/link";
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

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          Real Estate
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Buy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Rent
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Sell
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
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
                    <img
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
                    <img
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
                    <img
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
              <img
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
              <img
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
              <img
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
              <img
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
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Buy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Rent
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Sell
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <PhoneIcon className="w-4 h-4 inline-block mr-2" />
                (123) 456-7890
              </li>
              <li>
                <MailIcon className="w-4 h-4 inline-block mr-2" />
                info@realestate.com
              </li>
              <li>
                <LocateIcon className="w-4 h-4 inline-block mr-2" />
                123 Main St, San Francisco, CA 94101
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-primary-foreground hover:text-accent"
                prefetch={false}
              >
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-accent"
                prefetch={false}
              >
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-accent"
                prefetch={false}
              >
                <InstagramIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-accent"
                prefetch={false}
              >
                <LinkedinIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to stay up-to-date with the latest
              real estate news and listings.
            </p>
            <form className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; 2024 Real Estate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
