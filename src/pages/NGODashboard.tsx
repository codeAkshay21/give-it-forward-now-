
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Settings, Clock, Bell, Search, Clipboard, Filter, MoreHorizontal } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonationStatusUpdate from "@/components/dashboard/DonationStatusUpdate";
import EmailNotification from "@/components/donations/EmailNotification";

// Mock donations data
const mockDonations = [
  {
    id: 1,
    title: "Winter Clothing Collection",
    donorName: "Alex Johnson",
    donorEmail: "alex.johnson@example.com",
    items: ["Jacket", "Sweater", "Gloves"],
    date: "Mar 15, 2023",
    status: "completed",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&h=200",
  },
  {
    id: 2,
    title: "Children's Books Donation",
    donorName: "Sarah Miller",
    donorEmail: "sarah.miller@example.com",
    items: ["Books", "Educational Toys"],
    date: "Feb 28, 2023",
    status: "in-progress",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200",
  },
  {
    id: 3,
    title: "Kitchen Appliances",
    donorName: "Michael Brown",
    donorEmail: "michael.brown@example.com",
    items: ["Blender", "Toaster", "Coffee Maker"],
    date: "Jan 10, 2023",
    status: "pending",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=200",
  },
  {
    id: 4,
    title: "Electronics Donation",
    donorName: "Emily Davis",
    donorEmail: "emily.davis@example.com",
    items: ["Laptop", "Tablet", "Headphones"],
    date: "Apr 5, 2023",
    status: "pending",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&h=200",
  },
];

const statusColorMap: Record<string, string> = {
  "completed": "bg-green-100 text-green-800 border-green-200",
  "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
  "pending": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "cancelled": "bg-red-100 text-red-800 border-red-200",
  "received": "bg-purple-100 text-purple-800 border-purple-200",
  "processing": "bg-orange-100 text-orange-800 border-orange-200",
};

const NGODashboard = () => {
  const [activeTab, setActiveTab] = useState("donations");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Mock NGO data
  const ngo = {
    name: "Helping Hands Foundation",
    email: "contact@helpinghands.org",
    location: "San Francisco, CA",
    profileImage: "",
    donationsCount: 125,
    activePrograms: 5,
  };
  
  // Filter donations based on search term and status
  const filteredDonations = mockDonations.filter(donation => {
    const matchesSearch = 
      donation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || donation.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* NGO Profile Sidebar */}
            <div className="md:w-1/4">
              <Card className="mb-6">
                <CardHeader className="flex flex-col items-center text-center pt-6">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={ngo.profileImage} alt={ngo.name} />
                    <AvatarFallback className="text-lg bg-brand-green text-white">
                      {ngo.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{ngo.name}</CardTitle>
                  <CardDescription>{ngo.email}</CardDescription>
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {ngo.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-700">{ngo.donationsCount}</p>
                      <p className="text-xs text-blue-700">Donations Received</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-700">{ngo.activePrograms}</p>
                      <p className="text-xs text-green-700">Active Programs</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/ngo/profile">
                        <Settings className="mr-2 h-4 w-4" /> NGO Settings
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
                  <Button className="w-full">
                    <Bell className="mr-2 h-4 w-4" /> Send Updates
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Clipboard className="mr-2 h-4 w-4" /> Download Reports
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Content */}
            <div className="md:w-3/4">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="donations" className="flex items-center gap-1">
                    <Clipboard className="h-4 w-4" /> Donations
                  </TabsTrigger>
                  <TabsTrigger value="emails" className="flex items-center gap-1">
                    <Bell className="h-4 w-4" /> Notifications
                  </TabsTrigger>
                  <TabsTrigger value="activity" className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> Activity
                  </TabsTrigger>
                </TabsList>

                {/* Donations Tab */}
                <TabsContent value="donations" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Manage Donations</CardTitle>
                      <CardDescription>
                        View and update the status of received donations
                      </CardDescription>
                      
                      <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <div className="relative flex-grow">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                          <Input
                            placeholder="Search donations..."
                            className="pl-8"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        <div className="flex gap-2">
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                          >
                            <option value="all">All Statuses</option>
                            <option value="pending">Pending</option>
                            <option value="received">Received</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          <Button size="icon" variant="ghost">
                            <Filter className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {filteredDonations.map((donation) => (
                          <div key={donation.id} className="flex flex-col sm:flex-row gap-4 border rounded-lg overflow-hidden">
                            <div className="sm:w-1/4 h-48 sm:h-auto">
                              <img 
                                src={donation.image} 
                                alt={donation.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4 flex-grow">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium text-lg">{donation.title}</h3>
                                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                    <span className="flex items-center gap-1">
                                      From: {donation.donorName}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3.5 w-3.5" /> {donation.date}
                                    </span>
                                  </div>
                                </div>
                                <Badge className={`${statusColorMap[donation.status]} border`}>
                                  {donation.status.replace("-", " ").charAt(0).toUpperCase() + donation.status.replace("-", " ").slice(1)}
                                </Badge>
                              </div>
                              
                              <div className="mt-4">
                                <p className="text-sm text-gray-500 font-medium">Donated Items:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {donation.items.map((item, index) => (
                                    <Badge key={index} variant="outline">
                                      {item}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="mt-4">
                                <p className="text-sm text-gray-500 font-medium">Update Status:</p>
                                <div className="mt-1">
                                  <DonationStatusUpdate 
                                    donationId={donation.id} 
                                    currentStatus={donation.status} 
                                  />
                                </div>
                              </div>
                              
                              <div className="mt-6 flex justify-between items-center">
                                <Button variant="outline" size="sm" asChild>
                                  <Link to={`/ngo/donations/${donation.id}`}>
                                    View Details
                                  </Link>
                                </Button>
                                <div className="flex gap-2">
                                  <Button 
                                    variant="secondary" 
                                    size="sm"
                                    onClick={() => window.location.href = `mailto:${donation.donorEmail}?subject=Regarding your donation: ${donation.title}`}
                                  >
                                    Contact Donor
                                  </Button>
                                  <Button variant="ghost" size="sm" className="rounded-full p-2">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Notifications Tab */}
                <TabsContent value="emails" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Send Email Notifications</CardTitle>
                      <CardDescription>
                        Notify donors about their donation status or send thank you messages
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {filteredDonations.slice(0, 2).map((donation) => (
                          <div key={donation.id} className="border rounded-lg p-4">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                              <div>
                                <h3 className="font-medium">{donation.title}</h3>
                                <p className="text-sm text-gray-600">
                                  Donor: {donation.donorName} ({donation.donorEmail})
                                </p>
                                <p className="text-sm text-gray-600">
                                  Status: <span className={statusColorMap[donation.status].split(' ')[1]}>{donation.status}</span>
                                </p>
                              </div>
                              
                              <div className="w-full md:w-auto">
                                <Button size="sm" className="w-full md:w-auto" onClick={() => {
                                  window.location.href = `mailto:${donation.donorEmail}?subject=Update about your donation: ${donation.title}&body=Dear ${donation.donorName},%0A%0AThank you for your donation of ${donation.items.join(', ')}. We appreciate your generosity!%0A%0ABest regards,%0A${ngo.name}`;
                                }}>
                                  Send Update
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        <div className="border-t pt-6">
                          <h3 className="font-medium text-lg mb-4">Custom Email Notification</h3>
                          <EmailNotification donationId={0} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Activity Tab */}
                <TabsContent value="activity" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Track your organization's recent actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 border rounded-lg">
                          <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Clock className="h-5 w-5 text-blue-700" />
                          </div>
                          <div>
                            <p className="font-medium">Donation status updated</p>
                            <p className="text-sm text-gray-600">
                              Kitchen Appliances donation marked as "completed"
                            </p>
                            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 border rounded-lg">
                          <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Bell className="h-5 w-5 text-green-700" />
                          </div>
                          <div>
                            <p className="font-medium">Email notification sent</p>
                            <p className="text-sm text-gray-600">
                              Thank you email sent to Sarah Miller
                            </p>
                            <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 border rounded-lg">
                          <div className="h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <Clipboard className="h-5 w-5 text-purple-700" />
                          </div>
                          <div>
                            <p className="font-medium">New donation received</p>
                            <p className="text-sm text-gray-600">
                              Electronics Donation from Emily Davis
                            </p>
                            <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NGODashboard;
