"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BathIcon, BedIcon, RulerIcon } from "lucide-react";
import Image from "next/image";

export default function BuyPage() {
  const properties = useMemo(
    () => [
      {
        id: 1,
        image: "/placeholder.svg",
        address: "123 Main St, Anytown USA",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800,
        price: 350000,
      },
      {
        id: 2,
        image: "/placeholder.svg",
        address: "456 Oak Rd, Somewhere CA",
        bedrooms: 2,
        bathrooms: 1,
        sqft: 1200,
        price: 275000,
      },
      {
        id: 3,
        image: "/placeholder.svg",
        address: "789 Maple Ln, Elsewhere NY",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2500,
        price: 550000,
      },
      {
        id: 4,
        image: "/placeholder.svg",
        address: "321 Pine St, Anywhere FL",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1700,
        price: 400000,
      },
      {
        id: 5,
        image: "/placeholder.svg",
        address: "654 Elm Blvd, Someplace TX",
        bedrooms: 2,
        bathrooms: 1,
        sqft: 1100,
        price: 225000,
      },
      {
        id: 6,
        image: "/placeholder.svg",
        address: "987 Oak Ave, Nowhere OR",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2300,
        price: 475000,
      },
    ],
    []
  );

  const [filters, setFilters] = useState({
    location: "",
    minPrice: 0,
    maxPrice: 1000000,
    minBedrooms: 0,
    minBathrooms: 0,
  });

  const handleFilterChange = (type: any, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      return (
        property.address
          .toLowerCase()
          .includes(filters.location.toLowerCase()) &&
        property.price >= filters.minPrice &&
        property.price <= filters.maxPrice &&
        property.bedrooms >= filters.minBedrooms &&
        property.bathrooms >= filters.minBathrooms
      );
    });
  }, [filters, properties]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-muted p-6 md:w-64 md:shrink-0">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              Location
            </label>
            <Input
              id="location"
              type="text"
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              placeholder="Enter a location"
            />
          </div>
          <div>
            <label htmlFor="price-range" className="block font-medium mb-2">
              Price Range
            </label>
            <div className="flex items-center gap-4">
              <Input
                id="min-price"
                type="number"
                value={filters.minPrice}
                onChange={(e) =>
                  handleFilterChange("minPrice", Number(e.target.value))
                }
                placeholder="Min Price"
              />
              <span>-</span>
              <Input
                id="max-price"
                type="number"
                value={filters.maxPrice}
                onChange={(e) =>
                  handleFilterChange("maxPrice", Number(e.target.value))
                }
                placeholder="Max Price"
              />
            </div>
          </div>
          <div>
            <label htmlFor="bedrooms" className="block font-medium mb-2">
              Bedrooms
            </label>
            <Select
              value={filters.minBedrooms.toString()}
              onValueChange={(value) =>
                handleFilterChange("minBedrooms", Number(value))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="bathrooms" className="block font-medium mb-2">
              Bathrooms
            </label>
            <Select
              value={filters.minBathrooms.toString()}
              onValueChange={(value) =>
                handleFilterChange("minBathrooms", Number(value))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-background rounded-lg overflow-hidden shadow-sm"
          >
            <Image
              src={property.image}
              alt={property.address}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/250", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{property.address}</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <BedIcon className="w-4 h-4" />
                  <span>{property.bedrooms} bd</span>
                </div>
                <div className="flex items-center gap-1">
                  <BathIcon className="w-4 h-4" />
                  <span>{property.bathrooms} ba</span>
                </div>
                <div className="flex items-center gap-1">
                  <RulerIcon className="w-4 h-4" />
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">
                  ${property.price.toLocaleString()}
                </div>
                <Button size="sm">View Listing</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
