
import { Check, Camera, MapPin, Calendar, ThumbsUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Take a Photo",
      description: "Snap or upload a clear photo of the item you wish to donate."
    },
    {
      icon: MapPin,
      title: "Select an NGO",
      description: "Choose from nearby NGOs that accept your type of donation."
    },
    {
      icon: Calendar,
      title: "Schedule Pickup",
      description: "Arrange a convenient time for pickup or drop-off of your item."
    },
    {
      icon: ThumbsUp,
      title: "Get Feedback",
      description: "Receive updates and see the impact of your generous donation."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process makes donating items to those in need quick and easy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 relative"
            >
              <div className="absolute -top-4 -left-4 bg-brand-green rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-green-light/20 p-4 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="h-0.5 w-8 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
