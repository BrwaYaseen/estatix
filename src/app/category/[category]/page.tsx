"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
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
  phoneNumber: string;
  price: number;
  city: string;
  latitude: number;
  longitude: number;
  category: string;
};

export default function CategoryPropertiesPage() {
  const { category } = useParams();

  // Use React Query to fetch properties by category
  const {
    data: properties,
    isLoading,
    error,
  } = useQuery<Property[]>({
    queryKey: ["properties", category],
    queryFn: () =>
      fetch(`/api/properties?category=${category}`).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch properties");
        return res.json();
      }),
  });

  /*   const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // Then in your JSX:
  <h1 className="text-3xl font-bold mb-6">
    Properties in {capitalizeFirstLetter(category as string)}
  </h1> */

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Properties in {category}</h1>
      <Link href="/properties/new" passHref>
        <Button className="mb-4">Add New Property</Button>
      </Link>
      <Table>
        <TableCaption>A list of properties in {category}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Beds</TableHead>
            <TableHead>Baths</TableHead>
            <TableHead>Phone Number</TableHead>
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
              <TableCell>{property.phoneNumber}</TableCell>
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
