
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart, Camera, MapPin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Make a difference with your <span className="text-brand-green">donations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with local NGOs to donate your items directly to those who need them most. Just snap a photo, select a location, and make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white" asChild>
                <Link to="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/ngos">Find NGOs Near You</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-brand-green-light/20 p-3 rounded-lg">
                  <Camera className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Upload a Photo</h3>
                  <p className="text-sm text-gray-600">Take or upload a photo of your item</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-brand-blue-light/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Select Location</h3>
                  <p className="text-sm text-gray-600">Choose an NGO near you</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-brand-orange-light/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">NGO Notification</h3>
                  <p className="text-sm text-gray-600">NGO receives your donation request</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Make Impact</h3>
                  <p className="text-sm text-gray-600">Track your contribution and feedback</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Volunteers helping with donations" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-green-light rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-brand-blue-light rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
