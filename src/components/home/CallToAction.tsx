
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <Heart className="h-12 w-12 mx-auto mb-6 animate-pulse-slow" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
          Your unused items can change someone's life. Start your donation journey today and be a part of something greater.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100" asChild>
            <Link to="/donate">Donate Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10" asChild>
            <Link to="/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
