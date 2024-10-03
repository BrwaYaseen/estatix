"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon, Pencil } from "lucide-react";

export default function AdminPropertyPage() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxurious Beachfront Villa",
      price: 2500000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3500,
    },
    {
      id: 2,
      title: "Modern Downtown Penthouse",
      price: 1800000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2800,
    },
  ]);

  const [editingProperty, setEditingProperty] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    description: "",
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProperty) {
      setProperties(
        properties.map((p) =>
          p.id === editingProperty.id ? { ...p, ...formData } : p
        )
      );
      setEditingProperty(null);
    } else {
      setProperties([...properties, { id: Date.now(), ...formData }]);
    }
    setFormData({
      title: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      sqft: "",
      description: "",
      type: "",
    });
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
    setFormData(property);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Manage Properties</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>
            {editingProperty ? "Edit Property" : "Add New Property"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Property Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input
                  id="bedrooms"
                  name="bedrooms"
                  type="number"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input
                  id="bathrooms"
                  name="bathrooms"
                  type="number"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sqft">Square Feet</Label>
                <Input
                  id="sqft"
                  name="sqft"
                  type="number"
                  value={formData.sqft}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Property Type</Label>
                <Select
                  name="type"
                  value={formData.type}
                  onValueChange={(value) => handleSelectChange("type", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit">
              {editingProperty ? "Update Property" : "Add Property"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Bedrooms</TableHead>
                <TableHead>Bathrooms</TableHead>
                <TableHead>Sq Ft</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>{property.title}</TableCell>
                  <TableCell>${property.price.toLocaleString()}</TableCell>
                  <TableCell>{property.bedrooms}</TableCell>
                  <TableCell>{property.bathrooms}</TableCell>
                  <TableCell>{property.sqft}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(property)}
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
