
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

interface DonationStatusUpdateProps {
  donationId: number;
  currentStatus: string;
}

const DonationStatusUpdate = ({ donationId, currentStatus }: DonationStatusUpdateProps) => {
  const [status, setStatus] = useState(currentStatus);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusUpdate = async () => {
    setIsUpdating(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // In a real application, this would be an API call to update the status
      console.log(`Updating donation ${donationId} status to ${status}`);
      
      // Show success toast
      toast({
        title: "Status updated",
        description: `Donation status has been updated to ${status}.`,
        action: (
          <Button variant="outline" size="sm" className="gap-1">
            <Check className="h-4 w-4" /> Ok
          </Button>
        )
      });
      
      setIsUpdating(false);
    }, 1000);
  };

  return (
    <div className="flex items-center gap-3">
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="received">Received</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>
      <Button 
        onClick={handleStatusUpdate} 
        disabled={status === currentStatus || isUpdating}
        size="sm"
      >
        {isUpdating ? "Updating..." : "Update"}
      </Button>
    </div>
  );
};

export default DonationStatusUpdate;
