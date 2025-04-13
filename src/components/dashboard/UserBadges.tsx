
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Heart, Share2, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialShare from "./SocialShare";

const UserBadges = () => {
  // Mock badges data
  const earnedBadges = [
    {
      name: "First Donation",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-100",
      description: "Made your first donation",
      date: "Jan 15, 2023",
    },
    {
      name: "Clothing Hero",
      icon: Award,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      description: "Donated 5+ clothing items",
      date: "Feb 10, 2023",
    },
    {
      name: "Regular Donor",
      icon: Star,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
      description: "Donated for 3 consecutive months",
      date: "Mar 22, 2023",
    },
    {
      name: "Social Sharer",
      icon: Share2,
      color: "text-indigo-500",
      bgColor: "bg-indigo-100",
      description: "Shared 3 donations on social media",
      date: "Apr 5, 2023",
    },
  ];

  const upcomingBadges = [
    {
      name: "Impact Maker",
      icon: Zap,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      description: "Reach 1000 impact points",
      progress: 75,
    },
    {
      name: "Community Builder",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-100",
      description: "Refer 5 friends to the platform",
      progress: 40,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {earnedBadges.map((badge, index) => (
          <div key={index} className="border rounded-lg p-4 text-center dark:border-gray-700 dark:bg-gray-900">
            <div className={`${badge.bgColor} rounded-full w-16 h-16 mx-auto flex items-center justify-center`}>
              <badge.icon className={`h-8 w-8 ${badge.color}`} />
            </div>
            <h3 className="font-medium mt-3 dark:text-white">{badge.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{badge.description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Earned on {badge.date}</p>
            <div className="mt-3">
              <SocialShare badgeName={badge.name} badgeDescription={badge.description} />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="font-medium text-lg mb-4 dark:text-white">Badges In Progress</h3>
        <div className="space-y-4">
          {upcomingBadges.map((badge, index) => (
            <div key={index} className="border rounded-lg p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-center gap-4">
                <div className={`${badge.bgColor} rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center`}>
                  <badge.icon className={`h-6 w-6 ${badge.color}`} />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-medium dark:text-white">{badge.name}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{badge.progress}%</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{badge.description}</p>
                  <Progress value={badge.progress} className="mt-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserBadges;
