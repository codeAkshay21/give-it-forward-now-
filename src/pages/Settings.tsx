
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { SunMedium, Moon, BellRing, Mail, Lock } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Settings = () => {
  // Get theme from our hook
  const { theme, setTheme } = useTheme();
  
  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  
  // Privacy settings state
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [activityVisibility, setActivityVisibility] = useState("friends");

  const saveSettings = () => {
    // In a real app, you would save these settings to the user's profile
    // For now, just show a toast notification
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Settings</h1>
      
      <div className="space-y-6">
        {/* Theme Settings */}
        <Card className="dark:border-gray-800 dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center dark:text-white">
              <SunMedium className="mr-2 h-5 w-5" />
              Appearance
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Customize how the app looks and feels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Label className="dark:text-white">Theme</Label>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  className="flex flex-1 flex-col items-center justify-between p-4 h-auto dark:text-white dark:border-gray-700"
                  onClick={() => setTheme("light")}
                >
                  <SunMedium className="mb-2 h-6 w-6" />
                  <span>Light</span>
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  className="flex flex-1 flex-col items-center justify-between p-4 h-auto dark:text-white dark:border-gray-700"
                  onClick={() => setTheme("dark")}
                >
                  <Moon className="mb-2 h-6 w-6" />
                  <span>Dark</span>
                </Button>
                <Button
                  variant={theme === "system" ? "default" : "outline"}
                  className="flex flex-1 flex-col items-center justify-between p-4 h-auto dark:text-white dark:border-gray-700"
                  onClick={() => setTheme("system")}
                >
                  <div className="mb-2 h-6 w-6 flex">
                    <SunMedium className="h-6 w-3 mr-0" />
                    <Moon className="h-6 w-3 ml-0" />
                  </div>
                  <span>System</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Notification Settings */}
        <Card className="dark:border-gray-800 dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center dark:text-white">
              <BellRing className="mr-2 h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Manage how you receive notifications and alerts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications" className="dark:text-white">Email Notifications</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive notifications about donations and impact updates via email
                </p>
              </div>
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notifications" className="dark:text-white">Push Notifications</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive notifications on your device when important events happen
                </p>
              </div>
              <Switch
                id="push-notifications"
                checked={pushNotifications}
                onCheckedChange={setPushNotifications}
              />
            </div>
          </CardContent>
        </Card>
        
        {/* Privacy Settings */}
        <Card className="dark:border-gray-800 dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="flex items-center dark:text-white">
              <Lock className="mr-2 h-5 w-5" />
              Privacy
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Control your profile's visibility and data sharing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="dark:text-white">Profile Visibility</Label>
              <RadioGroup 
                value={profileVisibility} 
                onValueChange={setProfileVisibility}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="public" />
                  <Label htmlFor="public" className="cursor-pointer dark:text-gray-200">Public - Anyone can see your profile</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="friends" id="friends" />
                  <Label htmlFor="friends" className="cursor-pointer dark:text-gray-200">Friends Only - Only connected users can see your profile</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="private" id="private" />
                  <Label htmlFor="private" className="cursor-pointer dark:text-gray-200">Private - Only you can see your profile</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label className="dark:text-white">Activity Visibility</Label>
              <RadioGroup 
                value={activityVisibility} 
                onValueChange={setActivityVisibility}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="activity-public" />
                  <Label htmlFor="activity-public" className="cursor-pointer dark:text-gray-200">Public - Share all your donation activities</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="friends" id="activity-friends" />
                  <Label htmlFor="activity-friends" className="cursor-pointer dark:text-gray-200">Friends Only - Only connected users can see your activities</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="private" id="activity-private" />
                  <Label htmlFor="activity-private" className="cursor-pointer dark:text-gray-200">Private - Keep your donation activities private</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        <Button className="w-full" onClick={saveSettings}>Save All Settings</Button>
      </div>
    </div>
  );
};

export default Settings;
