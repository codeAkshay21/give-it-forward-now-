
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Gift, Heart, Leaf, Sparkles, Users } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import UserBadges from "@/components/dashboard/UserBadges";

const Impact = () => {
  const { userFullName } = useAuthContext();

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">Your Impact</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">See the difference your donations are making</p>
      
      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList className="dark:bg-gray-800">
          <TabsTrigger value="summary" className="dark:data-[state=active]:bg-gray-700">Impact Summary</TabsTrigger>
          <TabsTrigger value="badges" className="dark:data-[state=active]:bg-gray-700">Badges & Achievements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center dark:text-white">
                  <Gift className="h-5 w-5 mr-2 text-brand-green" />
                  Donations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-brand-green">3</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total donations made</p>
              </CardContent>
            </Card>
            
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center dark:text-white">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  People Helped
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-500">12</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated impact</p>
              </CardContent>
            </Card>
            
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center dark:text-white">
                  <Leaf className="h-5 w-5 mr-2 text-green-500" />
                  Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-500">5kg</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Waste reduction</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <CardTitle className="flex items-center dark:text-white">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Impact Journey
                </CardTitle>
                <CardDescription className="dark:text-gray-400">Track your giving progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium dark:text-white">Donation milestones</span>
                      <span className="text-sm font-medium dark:text-white">3 of 10</span>
                    </div>
                    <Progress value={30} className="h-2" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Make 10 donations to become a "Regular Donor"</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium dark:text-white">Item categories</span>
                      <span className="text-sm font-medium dark:text-white">2 of 5</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Donate across all categories to become a "Diverse Giver"</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium dark:text-white">NGO partnerships</span>
                      <span className="text-sm font-medium dark:text-white">2 of 3</span>
                    </div>
                    <Progress value={66} className="h-2" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Support 3 different NGOs to become a "Community Builder"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dark:border-gray-800 dark:bg-gray-950">
              <CardHeader>
                <CardTitle className="flex items-center dark:text-white">
                  <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
                  Community Impact
                </CardTitle>
                <CardDescription className="dark:text-gray-400">Your contributions compared to local community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-6 text-center">
                  <p className="text-lg dark:text-white">You are in the <span className="font-bold text-brand-green">top 20%</span> of donors in your area!</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Keep up the great work, {userFullName?.split(' ')[0] || 'Donor'}!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="badges">
          <Card className="mb-6 dark:border-gray-800 dark:bg-gray-950">
            <CardHeader>
              <CardTitle className="flex items-center dark:text-white">
                <Award className="h-5 w-5 mr-2 text-yellow-500" />
                Your Achievements
              </CardTitle>
              <CardDescription className="dark:text-gray-400">Badges earned through your generous donations</CardDescription>
            </CardHeader>
            <CardContent>
              <UserBadges />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Impact;
