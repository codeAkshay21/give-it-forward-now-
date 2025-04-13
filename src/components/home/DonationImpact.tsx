
import { useState } from 'react';
import { 
  Heart, 
  Users, 
  Package, 
  Award
} from 'lucide-react';

const DonationImpact = () => {
  const [count, setCount] = useState({
    donations: 15784,
    users: 5432,
    ngos: 124,
    impact: 23560
  });
  
  return (
    <section className="py-16 bg-brand-green-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact Together</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every donation makes a difference. See how our community is changing lives through generosity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
            <div className="mx-auto mb-4 bg-brand-green/20 w-16 h-16 flex items-center justify-center rounded-full">
              <Package className="h-8 w-8 text-brand-green" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{count.donations.toLocaleString()}</div>
            <p className="text-gray-600">Items Donated</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
            <div className="mx-auto mb-4 bg-brand-blue/20 w-16 h-16 flex items-center justify-center rounded-full">
              <Users className="h-8 w-8 text-brand-blue" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{count.users.toLocaleString()}</div>
            <p className="text-gray-600">Active Donors</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
            <div className="mx-auto mb-4 bg-brand-orange/20 w-16 h-16 flex items-center justify-center rounded-full">
              <Heart className="h-8 w-8 text-brand-orange" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{count.ngos}</div>
            <p className="text-gray-600">Partner NGOs</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
            <div className="mx-auto mb-4 bg-red-100 w-16 h-16 flex items-center justify-center rounded-full">
              <Award className="h-8 w-8 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{count.impact.toLocaleString()}</div>
            <p className="text-gray-600">Lives Impacted</p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img 
                className="h-48 w-full object-cover md:h-full md:w-52" 
                src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Donation story" 
              />
            </div>
            <div className="p-8">
              <div className="text-sm text-brand-green font-semibold tracking-wide">SUCCESS STORY</div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">Supporting Local Schools with Technology</h3>
              <p className="mt-3 text-gray-600">
                "Thanks to the computer equipment donations we received through Give It Forward Now, our
                students now have access to the technology they need for their education. This has made
                a tremendous difference in their learning experience."
              </p>
              <div className="mt-4">
                <span className="text-gray-900 font-medium">Maria Rodriguez</span>
                <span className="text-gray-600"> • Principal, Eastside Elementary</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
