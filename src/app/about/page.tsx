import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Building,
  Users,
  Home,
  Star,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center py-32"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-4 text-center">
            <Badge className="mb-4 text-lg" variant="secondary">
              Est. 1995
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Luxury Homes Realty
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Redefining luxury living with exceptional properties and
              unparalleled service for over 25 years.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 1995 by visionary real estate expert Jane Smith,
                  Luxury Homes Realty has been at the forefront of the high-end
                  real estate market for over two decades. Our journey began
                  with a simple yet powerful vision: to connect discerning
                  clients with their dream properties while providing an
                  unmatched level of service and expertise.
                </p>
                <p className="text-muted-foreground">
                  From our humble beginnings as a boutique agency in downtown
                  metropolis, we&apos;ve grown into a respected name in luxury
                  real estate, with a portfolio that spans breathtaking
                  beachfront villas, sophisticated urban penthouses, and serene
                  country estates across the nation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="text-center">
                    <Building className="w-8 h-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-4xl font-bold">25+</CardTitle>
                    <CardDescription>Years of Excellence</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-4xl font-bold">50k+</CardTitle>
                    <CardDescription>Happy Clients</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Home className="w-8 h-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-4xl font-bold">10k+</CardTitle>
                    <CardDescription>Properties Sold</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Award className="w-8 h-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-4xl font-bold">100+</CardTitle>
                    <CardDescription>Industry Awards</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Star,
                  title: "Excellence",
                  description:
                    "We strive for excellence in every aspect of our service.",
                },
                {
                  icon: Users,
                  title: "Client-Centric",
                  description:
                    "Our clients' needs and satisfaction are at the heart of everything we do.",
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description:
                    "We continuously innovate to stay ahead in the luxury real estate market.",
                },
                {
                  icon: CheckCircle,
                  title: "Integrity",
                  description:
                    "We uphold the highest standards of integrity and ethical conduct.",
                },
              ].map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <value.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet Our Leadership Team
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Jane Smith",
                  role: "Founder & CEO",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
                },
                {
                  name: "John Doe",
                  role: "Chief Operating Officer",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                },
                {
                  name: "Emily Brown",
                  role: "Head of Sales",
                  image:
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                },
                {
                  name: "Michael Johnson",
                  role: "Chief Marketing Officer",
                  image:
                    "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-full">
                      <Image
                        fill
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-center">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
              <blockquote className="text-2xl italic mb-4">
                &qout;Luxury Homes Realty made our dream of owning a beachfront
                property a reality. Their expertise and dedication to client
                satisfaction are unmatched in the industry.&quot;
              </blockquote>
              <cite className="text-lg">
                - Sarah & Tom Anderson, Satisfied Homeowners
              </cite>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-muted-foreground">
              Let our team of experts guide you through our exclusive portfolio
              of luxury properties and find the perfect match for your
              lifestyle.
            </p>
            <Button size="lg">Contact Us Today</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
