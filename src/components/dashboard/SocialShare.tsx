
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Facebook, Twitter, Linkedin, Link, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SocialShareProps {
  badgeName: string;
  badgeDescription: string;
}

const SocialShare = ({ badgeName, badgeDescription }: SocialShareProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const shareMessage = `I just earned the "${badgeName}" badge on GiveItForwardNow! ${badgeDescription} Join me in making a difference through donations.`;
  
  const shareUrl = encodeURIComponent(`https://giveitforwardnow.org/badge/${badgeName.toLowerCase().replace(/\s+/g, '-')}`);
  const shareText = encodeURIComponent(shareMessage);
  
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  
  const handleShare = (platform: string) => {
    let shareWindow;
    
    switch (platform) {
      case 'facebook':
        shareWindow = window.open(facebookUrl, '_blank', 'width=600,height=400');
        break;
      case 'twitter':
        shareWindow = window.open(twitterUrl, '_blank', 'width=600,height=400');
        break;
      case 'linkedin':
        shareWindow = window.open(linkedinUrl, '_blank', 'width=600,height=400');
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareMessage} https://giveitforwardnow.org/badge/${badgeName.toLowerCase().replace(/\s+/g, '-')}`);
        toast({
          title: "Link copied!",
          description: "Share link has been copied to your clipboard.",
          action: (
            <Button variant="outline" size="sm" className="gap-1">
              <Check className="h-4 w-4" /> Ok
            </Button>
          )
        });
        break;
    }
    
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Link className="h-4 w-4" />
          Share Badge
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share your achievement</DialogTitle>
          <DialogDescription>
            Share your "{badgeName}" badge with friends and inspire others to donate.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-4 py-4">
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-2 h-20"
            onClick={() => handleShare('facebook')}
          >
            <Facebook className="h-8 w-8 text-blue-600" />
            <span className="text-xs">Facebook</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-2 h-20"
            onClick={() => handleShare('twitter')}
          >
            <Twitter className="h-8 w-8 text-sky-500" />
            <span className="text-xs">Twitter</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-2 h-20"
            onClick={() => handleShare('linkedin')}
          >
            <Linkedin className="h-8 w-8 text-blue-700" />
            <span className="text-xs">LinkedIn</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center gap-2 h-20"
            onClick={() => handleShare('copy')}
          >
            <Link className="h-8 w-8 text-gray-600" />
            <span className="text-xs">Copy Link</span>
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SocialShare;
