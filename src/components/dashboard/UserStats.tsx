
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Calendar, Gift, Heart, Target, Trophy } from "lucide-react";

const UserStats = () => {
  // Mock statistics
  const stats = [
    {
      title: "Total Donations",
      value: 12,
      change: "+3",
      icon: Gift,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      title: "Impact Score",
      value: 745,
      change: "+120",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      title: "Badges Earned",
      value: 5,
      change: "+2",
      icon: Trophy,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
    {
      title: "Donation Streak",
      value: "3 months",
      change: "",
      icon: Target,
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="flex justify-between items-start">
                <div className={`${stat.bgColor} p-2 rounded-md`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                {stat.change && (
                  <div className="flex items-center text-sm font-medium text-green-600">
                    {stat.change} <ArrowUpRight className="ml-1 h-3 w-3" />
                  </div>
                )}
              </div>
              <div className="mt-3">
                <h3 className="text-sm text-gray-500 font-medium">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserStats;
