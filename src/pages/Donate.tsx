import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useAuthContext } from "@/contexts/AuthContext";

const Donate = () => {
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [image, setImage] = useState<File | null>(null);
  const [locationPermission, setLocationPermission] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();
  const { userFullName, userEmail } = useAuthContext();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      toast({
        title: "Image selected",
        description: "Your item image has been selected.",
      });
    }
  };

  const handleLocationPermission = (permission: boolean) => {
    setLocationPermission(permission);
    if (permission) {
      toast({
        title: "Location access granted",
        description: "We'll find NGOs near you.",
      });
    } else {
      toast({
        title: "Location access denied",
        description: "You can manually select an NGO later.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (deliveryMethod === "pickup" && (!pickupAddress || !contactNumber)) {
      toast({
        title: "Missing pickup info",
        description: "Please provide pickup address and contact number.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Donation submitted successfully!",
        description: "Your donation request has been received.",
      });
      navigate("/activity");
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Donate Items</h1>
        <p className="text-gray-600">
          Fill out the form below to donate your items to those in need
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Item Details</CardTitle>
            <CardDescription>Tell us about what you're donating</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="image">Item Image</Label>
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="text-center">
                  <div className="mt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("imageInput")?.click()
                      }
                    >
                      {image ? "Image Selected" : "Select an Image"}
                    </Button>
                    <input
                      id="imageInput"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                  {image && (
                    <div className="mt-2 text-sm text-gray-500">
                      <p>Selected file: {image.name}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger>
                  <SelectValue placeholder="What type of item are you donating?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clothing">Clothing 👕</SelectItem>
                  <SelectItem value="toys">Toys 🧸</SelectItem>
                  <SelectItem value="books">Books 📚</SelectItem>
                  <SelectItem value="food">Food 🥫</SelectItem>
                  <SelectItem value="furniture">Furniture 🪑</SelectItem>
                  <SelectItem value="other">Other 📝</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Item Condition</Label>
              <RadioGroup value={condition} onValueChange={setCondition} required>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new">New</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gently-used" id="gently-used" />
                    <Label htmlFor="gently-used">Gently Used</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="used" id="used" />
                    <Label htmlFor="used">Used</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="needs-repair" id="needs-repair" />
                    <Label htmlFor="needs-repair">Needs Repair</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Short Description</Label>
              <Textarea
                id="description"
                placeholder="e.g., Blue winter jacket, size M"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="resize-none"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="max-w-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Delivery Details</CardTitle>
            <CardDescription>Let us know how you'd like to donate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Pickup or Drop-off</Label>
              <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} required>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dropoff" id="dropoff" />
                    <Label htmlFor="dropoff">I'll drop it off 🚗</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup">I need pickup 🏠</Label>
                  </div>
                </div>
              </RadioGroup>

              {deliveryMethod === "pickup" && (
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupAddress">Pickup Address</Label>
                    <Textarea
                      id="pickupAddress"
                      placeholder="Floor, PlotNo, Bldg Name "
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      rows={2}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactNumber">Contact Number</Label>
                    <Input
                      id="contactNumber"
                      type="tel"
                      placeholder="+91 999999999"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Preferred Date & Time</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Contact Information</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={userFullName || ""} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={userEmail || ""} disabled />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Location Access</Label>
              <p className="text-sm text-gray-500 mb-2">
                Allow location access to find the nearest NGO?
              </p>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={locationPermission === true ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => handleLocationPermission(true)}
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  variant={locationPermission === false ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => handleLocationPermission(false)}
                >
                  No, I'll choose manually
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" className="px-8" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Donation"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Donate;
