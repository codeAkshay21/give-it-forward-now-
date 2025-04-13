
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Gift, MapPin, User as UserIcon, Clock, Share2 } from "lucide-react";
import UserDonations from "@/components/dashboard/UserDonations";
import UserStats from "@/components/dashboard/UserStats";
import UserBadges from "@/components/dashboard/UserBadges";
import DonationDialog from "@/components/donation/DonationDialog";
import { useAuthContext } from "@/contexts/AuthContext";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("donations");
  const [donationDialogOpen, setDonationDialogOpen] = useState(false);
  const { userFullName, userEmail } = useAuthContext();
  
  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Welcome, {userFullName || "User"}!</h1>
        <p className="text-gray-600">Here's your donation activity and impact.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* User Profile Card */}
        <div className="md:w-1/4">
          <Card className="mb-6">
            <CardHeader className="flex flex-col items-center text-center pt-6">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage alt={userFullName || "User"} />
                <AvatarFallback className="text-lg bg-brand-green text-white">
                  {userFullName?.split(' ').map(n => n[0]).join('') || 'U'}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{userFullName}</CardTitle>
              <CardDescription>{userEmail}</CardDescription>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Gift className="h-3 w-3" /> 0 Donations
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Not provided
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Joined recently
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 mt-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/profile">
                    <UserIcon className="mr-2 h-4 w-4" /> Edit Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button className="w-full" onClick={() => setDonationDialogOpen(true)}>
                <Gift className="mr-2 h-4 w-4" /> Donate Item
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/ngos">
                  <MapPin className="mr-2 h-4 w-4" /> Find NGOs
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="md:w-3/4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="donations" className="flex items-center gap-1">
                <Gift className="h-4 w-4" /> Donations
              </TabsTrigger>
              <TabsTrigger value="badges" className="flex items-center gap-1">
                <Share2 className="h-4 w-4" /> Impact & Badges
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="donations" className="space-y-4">
              <UserStats />
              <UserDonations />
            </TabsContent>

            <TabsContent value="badges" className="space-y-4">
              <UserBadges />
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest actions and updates</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-10 text-gray-500">
                  <Clock className="mx-auto h-12 w-12 mb-4 opacity-50" />
                  <p>Your activity history will appear here.</p>
                  <p className="text-sm mt-2">Start by making your first donation!</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Donation Dialog */}
      <DonationDialog open={donationDialogOpen} onOpenChange={setDonationDialogOpen} />
    </div>
  );
};

export default Dashboard;
