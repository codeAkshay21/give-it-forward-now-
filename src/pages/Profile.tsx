
import { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Pencil, Save } from "lucide-react";

const Profile = () => {
  const { userFullName, userEmail } = useAuthContext();
  
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userFullName || "");
  const [email, setEmail] = useState(userEmail || "");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would update the user profile here
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
    setIsEditing(false);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>Manage your personal information and profile picture</CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <Avatar className="h-24 w-24 border-2 border-brand-green/20">
                  {avatarPreview ? (
                    <AvatarImage src={avatarPreview} alt={name} />
                  ) : (
                    <>
                      <AvatarImage alt={name} />
                      <AvatarFallback className="text-lg bg-brand-green text-white">
                        {getInitials(name)}
                      </AvatarFallback>
                    </>
                  )}
                </Avatar>
                
                {isEditing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                    <Label htmlFor="avatar-upload" className="cursor-pointer text-xs text-white hover:underline">
                      Change
                    </Label>
                    <Input 
                      id="avatar-upload" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleFileChange}
                    />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium text-lg">{isEditing ? "Update your photo" : name}</h3>
                <p className="text-sm text-gray-500">
                  {isEditing 
                    ? "Click on the profile picture to upload a new one" 
                    : "This is how others will see you on the platform"}
                </p>
              </div>
              
              {!isEditing && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsEditing(true)}
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              )}
            </div>
            
            {isEditing ? (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" placeholder="Enter to change password" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" placeholder="Enter new password" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-[120px_1fr] gap-2 items-center">
                  <span className="text-sm font-medium text-gray-500">Full Name:</span>
                  <span>{name}</span>
                </div>
                
                <div className="grid grid-cols-[120px_1fr] gap-2 items-center">
                  <span className="text-sm font-medium text-gray-500">Email:</span>
                  <span>{email}</span>
                </div>
                
                <div className="grid grid-cols-[120px_1fr] gap-2 items-center">
                  <span className="text-sm font-medium text-gray-500">Password:</span>
                  <span>••••••••</span>
                </div>
              </div>
            )}
          </CardContent>
          
          {isEditing && (
            <CardFooter className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setName(userFullName || "");
                  setEmail(userEmail || "");
                  setAvatarPreview(null);
                }}
              >
                Cancel
              </Button>
              <Button type="submit">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          )}
        </form>
      </Card>
    </div>
  );
};

export default Profile;
