
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EmailNotificationProps {
  donationId: number;
  ngoEmail?: string;
}

const EmailNotification = ({ donationId, ngoEmail = "" }: EmailNotificationProps) => {
  const [email, setEmail] = useState(ngoEmail);
  const [isSending, setIsSending] = useState(false);

  const handleSendNotification = () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);
    
    // In a real application, this would send an actual email with donation data
    setTimeout(() => {
      console.log(`Sending notification email for donation ${donationId} to ${email}`);
      
      toast({
        title: "Email sent",
        description: `Notification email has been sent to ${email}.`,
        action: (
          <Button variant="outline" size="sm" className="gap-1">
            <Check className="h-4 w-4" /> Ok
          </Button>
        )
      });
      
      setIsSending(false);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>NGO Notification</CardTitle>
        <CardDescription>
          Send donation details to the NGO via email
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="ngo-email">NGO Email</Label>
            <div className="flex w-full items-center gap-2">
              <Input
                id="ngo-email"
                placeholder="ngo@example.org"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                onClick={handleSendNotification} 
                disabled={isSending}
                className="whitespace-nowrap"
              >
                <Mail className="mr-2 h-4 w-4" />
                {isSending ? "Sending..." : "Send Notification"}
              </Button>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>The NGO will receive an email with:</p>
            <ul className="list-disc list-inside mt-1 ml-1">
              <li>Donation details and item list</li>
              <li>Donor contact information</li>
              <li>Pickup/delivery preferences</li>
              <li>A link to update the donation status</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailNotification;
