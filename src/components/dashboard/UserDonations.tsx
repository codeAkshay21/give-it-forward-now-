
import { useState } from "react";
import { Calendar, MapPin, MoreHorizontal, Search, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DonationStatusUpdate from "./DonationStatusUpdate";
import EmailNotification from "../donations/EmailNotification";

// Mock donation data
const mockDonations = [
  {
    id: 1,
    title: "Winter Clothing Collection",
    items: ["Jacket", "Sweater", "Gloves"],
    ngo: "Helping Hands Foundation",
    ngoEmail: "contact@helpinghands.org",
    date: "Mar 15, 2023",
    status: "completed",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&h=200",
    feedback: "Thank you for your donation! Your clothes helped 5 families during the winter.",
    impactPoints: 120,
  },
  {
    id: 2,
    title: "Children's Books Donation",
    items: ["Books", "Educational Toys"],
    ngo: "Learning for All",
    ngoEmail: "donations@learningforall.org",
    date: "Feb 28, 2023",
    status: "in-progress",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200",
    feedback: "",
    impactPoints: 75,
  },
  {
    id: 3,
    title: "Kitchen Appliances",
    items: ["Blender", "Toaster", "Coffee Maker"],
    ngo: "Home Start",
    ngoEmail: "support@homestart.org",
    date: "Jan 10, 2023",
    status: "completed",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=200",
    feedback: "Your kitchen appliances were distributed to 3 families moving into their first homes.",
    impactPoints: 150,
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

const UserDonations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedDonation, setSelectedDonation] = useState<number | null>(null);
  
  // Filter donations based on search term and status
  const filteredDonations = mockDonations.filter(donation => {
    const matchesSearch = 
      donation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.ngo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || donation.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getDonationById = (id: number) => {
    return mockDonations.find(donation => donation.id === id);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Donations</CardTitle>
        <CardDescription>Track and manage your donation history</CardDescription>
        
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
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="received">Received</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {filteredDonations.length > 0 ? (
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
                          <Calendar className="h-3.5 w-3.5" /> {donation.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {donation.ngo}
                        </span>
                      </div>
                    </div>
                    <Badge className={`${statusColorMap[donation.status]} border`}>
                      {donation.status.replace("-", " ").charAt(0).toUpperCase() + donation.status.replace("-", " ").slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {donation.items.map((item, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                          <Tag className="h-3 w-3" /> {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {donation.feedback && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-md text-sm text-blue-800 border border-blue-100">
                      <p className="font-medium">NGO Feedback:</p>
                      <p>{donation.feedback}</p>
                      {donation.impactPoints > 0 && (
                        <p className="mt-1 font-medium">You earned {donation.impactPoints} impact points!</p>
                      )}
                    </div>
                  )}
                  
                  <div className="mt-6 flex justify-between items-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedDonation(donation.id)}>
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                          <DialogTitle>Donation Details</DialogTitle>
                          <DialogDescription>
                            Complete information about your donation to {donation.ngo}.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="grid gap-6 py-4">
                          <div className="grid grid-cols-4 gap-4 items-center">
                            <div className="font-medium text-sm">Status:</div>
                            <div className="col-span-3">
                              <DonationStatusUpdate 
                                donationId={donation.id} 
                                currentStatus={donation.status} 
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-4 items-center">
                            <div className="font-medium text-sm">NGO:</div>
                            <div className="col-span-3">{donation.ngo}</div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-4 items-center">
                            <div className="font-medium text-sm">Date:</div>
                            <div className="col-span-3">{donation.date}</div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-4 items-start">
                            <div className="font-medium text-sm">Items:</div>
                            <div className="col-span-3">
                              <div className="flex flex-wrap gap-2">
                                {donation.items.map((item, index) => (
                                  <Badge key={index} variant="outline">
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {donation.feedback && (
                            <div className="grid grid-cols-4 gap-4 items-start">
                              <div className="font-medium text-sm">Feedback:</div>
                              <div className="col-span-3">
                                <div className="p-3 bg-blue-50 rounded-md text-blue-800 border border-blue-100">
                                  {donation.feedback}
                                </div>
                              </div>
                            </div>
                          )}
                          
                          <div className="grid grid-cols-4 gap-4 items-center">
                            <div className="font-medium text-sm">Impact Points:</div>
                            <div className="col-span-3">
                              {donation.impactPoints || "Pending completion"}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="ghost" size="sm" className="rounded-full p-2">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border rounded-lg">
            <p className="text-gray-500">No donations found.</p>
            <p className="text-sm text-gray-400 mt-1">
              {searchTerm || statusFilter !== "all" ? "Try adjusting your filters." : "Start your giving journey today!"}
            </p>
            <Button className="mt-4" asChild>
              <a href="/donate">Make Your First Donation</a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserDonations;
