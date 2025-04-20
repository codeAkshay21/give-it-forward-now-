
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Activity = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Mock donation data
  const donations = [
    {
      id: "don-123",
      type: "Clothing",
      description: "Winter jacket, size M",
      status: "pending",
      date: "2025-04-06T10:30:00",
      ngo: {
        name: "Local Shelter",
        address: "Goregaon",
        distance: "2.4km"
      }
    },
    {
      id: "don-456",
      type: "Books",
      description: "Children's books, set of 10",
      status: "accepted",
      date: "2025-04-03T14:15:00",
      ngo: {
        name: "Community Library",
        address: "Andheri",
        distance: "3.7km"
      }
    },
    {
      id: "don-789",
      type: "Toys",
      description: "Building blocks, gently used",
      status: "completed",
      date: "2025-03-28T09:45:00",
      ngo: {
        name: "Children's Support Center",
        address: "Borivali",
        distance: "1.9km"
      }
    }
  ];

  // Status badge color mapping
  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    accepted: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    completed: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    cancelled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  };

  // Status stage mapping
  const statusStage: Record<string, number> = {
    pending: 25,
    accepted: 66,
    completed: 100,
    cancelled: 0,
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl font-bold mb-6 dark:text-white">Donation Activity</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <div className="flex justify-between items-center">
              <TabsList className="dark:bg-gray-800">
                <TabsTrigger value="all" className="dark:data-[state=active]:bg-gray-700 dark:text-gray-200 dark:data-[state=active]:text-white">All Activities</TabsTrigger>
                <TabsTrigger value="pending" className="dark:data-[state=active]:bg-gray-700 dark:text-gray-200 dark:data-[state=active]:text-white">Pending</TabsTrigger>
                <TabsTrigger value="accepted" className="dark:data-[state=active]:bg-gray-700 dark:text-gray-200 dark:data-[state=active]:text-white">Accepted</TabsTrigger>
                <TabsTrigger value="completed" className="dark:data-[state=active]:bg-gray-700 dark:text-gray-200 dark:data-[state=active]:text-white">Completed</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="space-y-4">
              {donations.length > 0 ? (
                donations.map((donation) => (
                  <Card key={donation.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                    <div className="h-2 bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-full bg-brand-green transition-all duration-300"
                        style={{ width: `${statusStage[donation.status]}%` }}
                      />
                    </div>
                    <div className="md:flex">
                      <div className="p-6 md:w-2/3">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-medium text-lg flex items-center gap-2 dark:text-white">
                              {donation.type}
                              <Badge className={statusColors[donation.status]}>
                                {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                              </Badge>
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">{donation.description}</p>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(donation.date).toLocaleDateString()}
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                {donation.ngo.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium dark:text-white">{donation.ngo.name}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {donation.ngo.address} ({donation.ngo.distance} away)
                              </p>
                            </div>
                          </div>
                          
                          {donation.status === "pending" && (
                            <div className="text-sm text-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-300 p-3 rounded-md flex items-center dark:border dark:border-yellow-800/30">
                              <Clock className="h-4 w-4 mr-2" />
                              Waiting for NGO to accept your donation
                            </div>
                          )}
                          
                          {donation.status === "accepted" && (
                            <div className="text-sm text-blue-700 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300 p-3 rounded-md flex items-center dark:border dark:border-blue-800/30">
                              <Clock className="h-4 w-4 mr-2" />
                              NGO has accepted your donation, awaiting delivery/pickup
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700">
                        <h4 className="font-medium mb-3 dark:text-white">Donation Progress</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-300">Progress</span>
                            <span className="font-medium dark:text-white">{statusStage[donation.status]}%</span>
                          </div>
                          <Progress value={statusStage[donation.status]} className="h-2 dark:bg-gray-600" />
                          
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                              <span className="text-xs text-gray-600 dark:text-gray-300">Request submitted</span>
                            </div>
                            <div className="flex items-center">
                              <div className={`h-2 w-2 rounded-full ${donation.status === 'pending' ? 'bg-gray-300 dark:bg-gray-600' : 'bg-blue-500'} mr-2`}></div>
                              <span className={`text-xs ${donation.status === 'pending' ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'}`}>NGO accepted</span>
                            </div>
                            <div className="flex items-center">
                              <div className={`h-2 w-2 rounded-full ${donation.status === 'completed' ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'} mr-2`}></div>
                              <span className={`text-xs ${donation.status === 'completed' ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}`}>Donation completed</span>
                            </div>
                          </div>
                          
                          {donation.status === "accepted" && (
                            <Button variant="outline" className="w-full mt-2 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">Contact NGO</Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="text-center py-12">
                    <Clock className="mx-auto h-12 w-12 mb-4 text-gray-400 dark:text-gray-500" />
                    <p className="mb-2 dark:text-white">You don't have any donation activity yet</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Start by donating items to those in need</p>
                    <Button>Donate Now</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="pending" className="space-y-4">
              {donations.filter(d => d.status === 'pending').map((donation) => (
                <Card key={donation.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                  <div className="h-2 bg-gray-100 dark:bg-gray-700">
                    <div
                      className="h-full bg-brand-green transition-all duration-300"
                      style={{ width: `${statusStage[donation.status]}%` }}
                    />
                  </div>
                  <div className="md:flex">
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg flex items-center gap-2 dark:text-white">
                            {donation.type}
                            <Badge className={statusColors[donation.status]}>
                              {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                            </Badge>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">{donation.description}</p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(donation.date).toLocaleDateString()}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                              {donation.ngo.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium dark:text-white">{donation.ngo.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {donation.ngo.address} ({donation.ngo.distance} away)
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-sm text-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-300 p-3 rounded-md flex items-center dark:border dark:border-yellow-800/30">
                          <Clock className="h-4 w-4 mr-2" />
                          Waiting for NGO to accept your donation
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-6 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700">
                      <h4 className="font-medium mb-3 dark:text-white">Donation Progress</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-300">Progress</span>
                          <span className="font-medium dark:text-white">{statusStage[donation.status]}%</span>
                        </div>
                        <Progress value={statusStage[donation.status]} className="h-2 dark:bg-gray-600" />
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                            <span className="text-xs text-gray-600 dark:text-gray-300">Request submitted</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 mr-2"></div>
                            <span className="text-xs text-gray-400 dark:text-gray-500">NGO accepted</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 mr-2"></div>
                            <span className="text-xs text-gray-400 dark:text-gray-500">Donation completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="accepted" className="space-y-4">
              {donations.filter(d => d.status === 'accepted').map((donation) => (
                <Card key={donation.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                  {/* Similar structure to above with dark mode classes */}
                  <div className="h-2 bg-gray-100 dark:bg-gray-700">
                    <div
                      className="h-full bg-brand-green transition-all duration-300"
                      style={{ width: `${statusStage[donation.status]}%` }}
                    />
                  </div>
                  <div className="md:flex">
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg flex items-center gap-2 dark:text-white">
                            {donation.type}
                            <Badge className={statusColors[donation.status]}>
                              {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                            </Badge>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">{donation.description}</p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(donation.date).toLocaleDateString()}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                              {donation.ngo.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium dark:text-white">{donation.ngo.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {donation.ngo.address} ({donation.ngo.distance} away)
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-sm text-blue-700 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300 p-3 rounded-md flex items-center dark:border dark:border-blue-800/30">
                          <Clock className="h-4 w-4 mr-2" />
                          NGO has accepted your donation, awaiting delivery/pickup
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-6 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700">
                      <h4 className="font-medium mb-3 dark:text-white">Donation Progress</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-300">Progress</span>
                          <span className="font-medium dark:text-white">{statusStage[donation.status]}%</span>
                        </div>
                        <Progress value={statusStage[donation.status]} className="h-2 dark:bg-gray-600" />
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                            <span className="text-xs text-gray-600 dark:text-gray-300">Request submitted</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                            <span className="text-xs text-gray-600 dark:text-gray-300">NGO accepted</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 mr-2"></div>
                            <span className="text-xs text-gray-400 dark:text-gray-500">Donation completed</span>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full mt-2 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">Contact NGO</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="completed" className="space-y-4">
              {donations.filter(d => d.status === 'completed').map((donation) => (
                <Card key={donation.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                  {/* Similar structure to above with dark mode classes */}
                  <div className="h-2 bg-gray-100 dark:bg-gray-700">
                    <div
                      className="h-full bg-brand-green transition-all duration-300"
                      style={{ width: `${statusStage[donation.status]}%` }}
                    />
                  </div>
                  <div className="md:flex">
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg flex items-center gap-2 dark:text-white">
                            {donation.type}
                            <Badge className={statusColors[donation.status]}>
                              {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                            </Badge>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">{donation.description}</p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(donation.date).toLocaleDateString()}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                              {donation.ngo.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium dark:text-white">{donation.ngo.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {donation.ngo.address} ({donation.ngo.distance} away)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-6 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700">
                      <h4 className="font-medium mb-3 dark:text-white">Donation Progress</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-300">Progress</span>
                          <span className="font-medium dark:text-white">{statusStage[donation.status]}%</span>
                        </div>
                        <Progress value={statusStage[donation.status]} className="h-2 dark:bg-gray-600" />
                        
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                            <span className="text-xs text-gray-600 dark:text-gray-300">Request submitted</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                            <span className="text-xs text-gray-600 dark:text-gray-300">NGO accepted</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-xs text-gray-600 dark:text-gray-300">Donation completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Activity;
