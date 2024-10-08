"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the type for a property
type Property = {
  id: number;
  name: string;
  description: string;
  area: number;
  bed: number;
  bath: number;
  price: number;
  city: string;
  latitude: number;
  longitude: number;
};

export default function PropertiesPage() {
  // Use React Query to fetch properties
  const {
    data: properties,
    isLoading,
    error,
  } = useQuery<Property[]>({
    queryKey: ["properties"],
    queryFn: () =>
      fetch("/api/properties").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch properties");
        return res.json();
      }),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Properties</h1>
      <Link href="/properties/new" passHref>
        <Button className="mb-4">Add New Property</Button>
      </Link>
      <Table>
        <TableCaption>A list of all properties</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Beds</TableHead>
            <TableHead>Baths</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties?.map((property) => (
            <TableRow key={property.id}>
              <TableCell>{property.name}</TableCell>
              <TableCell>{property.city}</TableCell>
              <TableCell>${property.price.toLocaleString()}</TableCell>
              <TableCell>{property.area} sqm</TableCell>
              <TableCell>{property.bed}</TableCell>
              <TableCell>{property.bath}</TableCell>
              <TableCell>
                <Link href={`/properties/${property.id}`} passHref>
                  <Button variant="outline">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
