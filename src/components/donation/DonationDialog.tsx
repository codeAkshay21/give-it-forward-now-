
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin, Upload } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

// Define donation form type
type DonationFormValues = {
  category: string;
  condition: string;
  description: string;
  quantity: number;
  deliveryMethod: string;
  preferredDate: Date;
  imageUrl: string;
  location: {
    useCurrentLocation: boolean;
  };
};

interface DonationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationDialog = ({ open, onOpenChange }: DonationDialogProps) => {
  const navigate = useNavigate();
  const { userFullName, userEmail } = useAuthContext();
  const [isUploading, setIsUploading] = useState(false);

  // Initialize form
  const form = useForm<DonationFormValues>({
    defaultValues: {
      category: "",
      condition: "",
      description: "",
      quantity: 1,
      deliveryMethod: "dropoff",
      preferredDate: new Date(),
      imageUrl: "",
      location: {
        useCurrentLocation: true,
      },
    },
  });

  const handleImageUpload = () => {
    setIsUploading(true);
    
    // Mock uploadcare integration - in a real app, you'd use their widget or API
    // This is just a placeholder to simulate upload process
    setTimeout(() => {
      form.setValue("imageUrl", "https://placeholder.com/image.jpg");
      setIsUploading(false);
      toast({
        title: "Image uploaded",
        description: "Your image was uploaded successfully",
      });
    }, 1500);
  };

  const onSubmit = async (data: DonationFormValues) => {
    try {
      console.log("Donation form submitted:", data);
      
      // In a real app, you'd send this data to your backend
      toast({
        title: "Donation submitted!",
        description: "Your donation request has been received.",
      });
      
      // Close dialog and redirect to activity page
      onOpenChange(false);
      navigate("/activity");
    } catch (error) {
      console.error("Error submitting donation:", error);
      toast({
        title: "Submission error",
        description: "There was a problem submitting your donation. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Donate an Item</DialogTitle>
          <DialogDescription>
            Fill out this form to donate items to those in need. Once submitted, nearby NGOs will be notified.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Image Upload Section */}
            <div className="border border-dashed rounded-md p-4">
              <div className="flex flex-col items-center justify-center gap-2 py-4">
                {form.watch("imageUrl") ? (
                  <div className="relative w-full max-w-xs">
                    <img 
                      src={form.watch("imageUrl")} 
                      alt="Donation item preview" 
                      className="rounded-md w-full h-auto max-h-64 object-contain"
                    />
                    <Button 
                      type="button" 
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => form.setValue("imageUrl", "")}
                    >
                      Replace
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-10 w-10 text-gray-400" />
                    <p className="text-sm text-gray-600">Upload a photo of your donation</p>
                  </>
                )}
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleImageUpload}
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "Upload Image"}
                </Button>
              </div>
            </div>

            {/* Category Selection */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What type of item are you donating?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="clothing">Clothing 👕</SelectItem>
                      <SelectItem value="toys">Toys 🧸</SelectItem>
                      <SelectItem value="books">Books 📚</SelectItem>
                      <SelectItem value="food">Food 🥫</SelectItem>
                      <SelectItem value="furniture">Furniture 🪑</SelectItem>
                      <SelectItem value="other">Other 📝</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Item Condition */}
            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What condition is the item in?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="gently_used">Gently Used</SelectItem>
                      <SelectItem value="used">Used</SelectItem>
                      <SelectItem value="needs_repair">Needs Repair</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add a short description (optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., Blue winter jacket, size M" 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How many of this item are you donating?</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min={1} 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Delivery Method */}
            <FormField
              control={form.control}
              name="deliveryMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Will you drop it off or need it picked up?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dropoff" id="dropoff" />
                        <label htmlFor="dropoff" className="cursor-pointer text-sm">
                          I'll drop it off 🚗
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <label htmlFor="pickup" className="cursor-pointer text-sm">
                          I need pickup 🏠
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Preferred Date & Time */}
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>When would you like to donate this?</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Information (auto-filled from auth) */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="text-sm">{userFullName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm">{userEmail}</p>
                </div>
              </div>
            </div>

            {/* Location Access */}
            <FormField
              control={form.control}
              name="location.useCurrentLocation"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Allow location access to find the nearest NGO?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(value === "yes")}
                      defaultValue={field.value ? "yes" : "no"}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes-location" />
                        <label htmlFor="yes-location" className="cursor-pointer text-sm">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no-location" />
                        <label htmlFor="no-location" className="cursor-pointer text-sm">
                          No, I'll choose manually
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {!form.watch("location.useCurrentLocation") && (
              <div className="p-4 bg-gray-50 rounded-md flex items-center justify-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">You will be able to choose an NGO after submission</span>
              </div>
            )}

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit Donation</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DonationDialog;
