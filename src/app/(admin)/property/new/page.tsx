"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the schema for property input validation
const propertySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  area: z.number().positive("Area must be a positive number"),
  bed: z
    .number()
    .int()
    .positive("Number of bedrooms must be a positive integer"),
  bath: z
    .number()
    .int()
    .positive("Number of bathrooms must be a positive integer"),
  price: z.number().positive("Price must be a positive number"),
  city: z.enum(["erbil", "sulaymaniyah", "duhok", "halabja"]),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

type PropertyFormData = z.infer<typeof propertySchema>;

export default function NewPropertyPage() {
  const queryClient = useQueryClient();

  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      name: "",
      description: "",
      area: 0,
      bed: 0,
      bath: 0,
      price: 0,
      city: "erbil",
      latitude: 0,
      longitude: 0,
    },
  });

  // Define the mutation for creating a new property
  const createPropertyMutation = useMutation({
    mutationFn: (newProperty: PropertyFormData) =>
      fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProperty),
      }).then((res) => {
        if (!res.ok) throw new Error("Failed to create property");
        return res.json();
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toast.success("Property created successfully");
      form.reset();
    },
    onError: (error) => {
      toast.error("Failed to create property");
      console.error("Error creating property:", error);
    },
  });

  // Define the mutation for updating a property---PLEASE FIX TYPE PLEASEEEE
  const updatePropertyMutation = useMutation({
    mutationFn: (updatedProperty: any) =>
      fetch(`/api/properties/${updatedProperty.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProperty),
      }).then((res) => {
        if (!res.ok) throw new Error("Failed to update property");
        return res.json();
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toast.success("Property updated successfully");
      form.reset();
    },
    onError: (error) => {
      toast.error("Failed to update property");
      console.error("Error updating property:", error);
    },
  });

  // Define the mutation for deleting a property
  const deletePropertyMutation = useMutation({
    mutationFn: (propertyId: string) =>
      fetch(`/api/properties/${propertyId}`, {
        method: "DELETE",
      }).then((res) => {
        if (!res.ok) throw new Error("Failed to delete property");
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toast.success("Property deleted successfully");
    },
    onError: (error) => {
      toast.error("Failed to delete property");
      console.error("Error deleting property:", error);
    },
  });

  const onSubmit = (data: PropertyFormData) => {
    createPropertyMutation.mutate(data);
  };

  const handleUpdate = (data: PropertyFormData) => {
    updatePropertyMutation.mutate(data);
  };

  const handleDelete = (propertyId: string) => {
    deletePropertyMutation.mutate(propertyId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Property</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter property name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter property description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area (sqm)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bath"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bathrooms</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="erbil">Erbil</SelectItem>
                    <SelectItem value="sulaymaniyah">Sulaymaniyah</SelectItem>
                    <SelectItem value="duhok">Duhok</SelectItem>
                    <SelectItem value="halabja">Halabja</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="latitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Latitude</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="any"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="longitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Longitude</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="any"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={createPropertyMutation.isPending}>
            {createPropertyMutation.isPending
              ? "Creating..."
              : "Create Property"}
          </Button>
          <Button
            type="button"
            onClick={() => handleUpdate(form.getValues())}
            disabled={updatePropertyMutation.isPending}
          >
            {updatePropertyMutation.isPending
              ? "Updating..."
              : "Update Property"}
          </Button>
          {/*  <Button type="button" onClick={() => handleDelete(form.getValues().id)} disabled={deletePropertyMutation.isPending}>
            {deletePropertyMutation.isPending ? "Deleting..." : "Delete Property"}
          </Button> FIX TYPE PLEASE */}
        </form>
      </Form>
    </div>
  );
}
