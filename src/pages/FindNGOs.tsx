import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Globe, Clock, User, Search, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const NGOMap = ({ ngos }: { ngos: typeof sampleNGOs }) => {
  const center = { lat: 19.0760, lng: 72.8777 }; // Default center (Mumbai, India)

  return (
    <div className="w-full h-[400px] bg-gray-200 rounded-lg">
      <LoadScript googleMapsApiKey="AIzaSyCxNf1xCOb5ElqXSaLNE4MKWM70zt93jsY">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={12}
        >
          {ngos.map((ngo) => (
            <Marker
              key={ngo.id}
              position={{
                lat: 19.0760 + Math.random() * 0.05, // Sample latitudes, replace with actual
                lng: 72.8777 + Math.random() * 0.05, // Sample longitudes, replace with actual
              }}
              title={ngo.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

// Sample NGO data
const sampleNGOs = [
  {
    id: 1,
    name: "Human Welfare Charitable Trust",
    category: "Food & Hunger",
    location: "Malad",
    distance: "1.2",
    rating: 4.8,
    image: "https://human-welfare.org/wp-content/uploads/2021/06/New-Project.jpg",
    description: "Fighting hunger in our community by providing nutritious meals to those in need.",
    website: "http://www.human-welfare.org/",
    phone: "09820737841",
    hours: "Mon-Fri: 9AM-5PM",
  },
  {
    id: 2,
    name: "Shiksha Foundation",
    category: "Education",
    location: "Malad ",
    distance: "2.8",
    rating: 4.9,
    image: "https://pathabhavanshiksha.org/wp-content/uploads/2023/09/Yoga-11.jpeg",
    description: "Education for under-privileged children",
    website: "https://shikshafoundation.org/",
    phone: "9029596556",
    hours: "Mon-Sat: 8AM-6PM",
  },
  {
    id: 3,
    name: "Vande Mataram Foundation",
    category: "Animal Welfare",
    location: "Goregaon",
    distance: "3.5",
    rating: 4.7,
    image: "https://vandemataramfoundation.co.in/wp-content/uploads/2017/11/04-1.jpg",
    description: "Addressing various social issues and making a difference with awareness events and activities.",
    website: "https://vandemataramfoundation.co.in/",
    phone: "022-40129656",
    hours: "Daily: 10AM-4PM",
  }
];

const NGOCard = ({ ngo }: { ngo: typeof sampleNGOs[0] }) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative bg-gray-100">
        {ngo.image ? (
          <img 
            src={ngo.image} 
            alt={ngo.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white text-brand-green rounded-full px-2 py-1 text-xs font-medium">
          {ngo.distance} miles away
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{ngo.name}</CardTitle>
            <CardDescription>{ngo.category}</CardDescription>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage src={ngo.image} alt={ngo.name} />
            <AvatarFallback className="bg-brand-green text-white">
              {ngo.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-gray-600">{ngo.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{ngo.location}</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2 text-gray-500" />
            <a href={`https://${ngo.website}`} className="text-brand-green hover:underline">
              {ngo.website}
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-gray-500" />
            <span>{ngo.phone}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>{ngo.hours}</span>
          </div>
        </div>
        
        <div className="pt-2">
          <Button
            className="w-full mt-2"
            onClick={() => window.open(ngo.website.startsWith('http') ? ngo.website : `http://${ngo.website}`, '_blank')}
          > Visit Ngo Page</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FindNGOs = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("list");
  const [ngos, setNgos] = useState(sampleNGOs);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleLocationSearch = () => {
    setIsSearching(true);
    
    // In a real app, this would be an API call to find NGOs based on location
    setTimeout(() => {
      setIsSearching(false);
      // For demo purposes, we'll just use our sample data
    }, 1000);
  };
  
  const handleUseCurrentLocation = () => {
    // In a real app, this would use the browser's geolocation API
    setLocation("Current Location");
    setIsSearching(true);
    
    setTimeout(() => {
      setIsSearching(false);
      // For demo purposes, we'll just use our sample data
    }, 1000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Find NGOs Near You</h1>
      <p className="text-gray-600 mb-6">Discover organizations in your area where you can donate items</p>
      
      {/* Search Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Search for NGOs</CardTitle>
          <CardDescription>Enter your location to find NGOs near you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="location">Your Location</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="location"
                    placeholder="Enter city, address or zip code"
                    className="pl-10"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <Button onClick={handleLocationSearch} disabled={!location || isSearching}>
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-fit" 
                onClick={handleUseCurrentLocation}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Use current location
              </Button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto py-1">
              {["All", "Food & Hunger", "Housing", "Education", "Healthcare", "Animals", "Environment", "Community"]
                .map((cat) => (
                  <Button
                    key={cat}
                    variant={category === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCategory(cat)}
                    className="whitespace-nowrap"
                  >
                    {cat}
                  </Button>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Map and List Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="list" className="flex items-center gap-1">
              <User className="h-4 w-4" /> List View
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Map View
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <div className="text-sm text-gray-500">
              {ngos.length} NGOs found
            </div>
          </div>
        </div>
        
        <TabsContent value="list" className="m-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ngos.map((ngo) => (
              <NGOCard key={ngo.id} ngo={ngo} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="map" className="m-0">
          <NGOMap ngos={ngos} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FindNGOs;
