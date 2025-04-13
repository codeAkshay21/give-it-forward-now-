
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from 'lucide-react';

// Mock NGO data
const ngos = [
  {
    id: 1,
    name: "Green Earth Foundation",
    location: "Colaba",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Focused on environmental protection and sustainability initiatives.",
    categories: ["Clothing", "Electronics", "Books"]
  },
  {
    id: 2,
    name: "Hope for Children",
    location: "Nalasopara",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Supporting underprivileged children with educational resources and basic needs.",
    categories: ["Toys", "Clothing", "School Supplies"]
  },
  {
    id: 3,
    name: "Helping Hands Community",
    location: "Borivali",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Providing resources and support to homeless individuals and families.",
    categories: ["Clothing", "Food", "Hygiene Products"]
  },
];

const NGOShowcase = () => {
  const [activeNGO, setActiveNGO] = useState(0);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our NGO Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We work with trusted NGOs that are making real impact in communities across the country.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ngos.map((ngo, index) => (
            <div 
              key={ngo.id} 
              className={`rounded-xl overflow-hidden shadow-md border transition-all ${
                activeNGO === index 
                  ? "border-brand-green transform scale-105 shadow-xl" 
                  : "border-gray-200 hover:shadow-lg"
              }`}
              onMouseEnter={() => setActiveNGO(index)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={ngo.image} 
                  alt={ngo.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{ngo.name}</h3>
                </div>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{ngo.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{ngo.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {ngo.categories.map((category) => (
                    <Badge key={category} variant="outline" className="bg-gray-100">
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full" variant="outline">View Profile</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All NGO Partners
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NGOShowcase;
