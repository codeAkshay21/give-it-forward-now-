
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Heart, Gift, Award, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn, userFullName, userEmail, userImageUrl, isNGO, signOut } = useAuthContext();
  const navigate = useNavigate();
  
  // Extract initials from user's name
  const initials = userFullName
    ? userFullName.split(' ').map(n => n[0]).join('')
    : 'U';

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-brand-green" />
          <span className="font-bold text-xl text-gray-800">GiveItForwardNow</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {isSignedIn ? (
            // Authenticated user navigation
            <>
              <Link to="/donate" className="text-gray-600 hover:text-brand-green transition-colors flex items-center gap-1">
                <Gift className="h-4 w-4" /> Donations
              </Link>
              <Link to="/impact" className="text-gray-600 hover:text-brand-green transition-colors flex items-center gap-1">
                <Award className="h-4 w-4" /> Impact & Badges
              </Link>
              <Link to="/activity" className="text-gray-600 hover:text-brand-green transition-colors flex items-center gap-1">
                <Clock className="h-4 w-4" /> Activity
              </Link>
            </>
          ) : (
            // Guest navigation
            <>
              <Link to="/donate" className="text-gray-600 hover:text-brand-green transition-colors">
                Donate Items
              </Link>
              <Link to="/ngos" className="text-gray-600 hover:text-brand-green transition-colors">
                NGO Partners
              </Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-brand-green transition-colors">
                How It Works
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-brand-green transition-colors">
                About Us
              </Link>
            </>
          )}
        </div>
        
        {/* Auth buttons or User menu */}
        {isSignedIn ? (
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src={userImageUrl || ""} alt={userFullName || "User"} />
                  <AvatarFallback className="bg-brand-green text-white">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{userFullName}</p>
                  <p className="text-xs text-muted-foreground">{userEmail}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="cursor-pointer"
                  onClick={() => navigate(isNGO ? "/ngo/dashboard" : "/dashboard")}
                >
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500" onClick={signOut}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        )}
        
        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col gap-4">
            {isSignedIn ? (
              // Authenticated mobile menu
              <>
                <Link 
                  to="/donate" 
                  className="py-2 text-gray-600 hover:text-brand-green flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Gift className="h-4 w-4" /> Donations
                </Link>
                <Link 
                  to="/impact" 
                  className="py-2 text-gray-600 hover:text-brand-green flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Award className="h-4 w-4" /> Impact & Badges
                </Link>
                <Link 
                  to="/activity" 
                  className="py-2 text-gray-600 hover:text-brand-green flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Clock className="h-4 w-4" /> Activity
                </Link>
                <Link 
                  to="/dashboard" 
                  className="py-2 text-gray-600 hover:text-brand-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className="py-2 text-gray-600 hover:text-brand-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full justify-center text-red-500 hover:text-red-600 border-red-500 hover:border-red-600"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              // Guest mobile menu
              <>
                <Link 
                  to="/donate" 
                  className="py-2 text-gray-600 hover:text-brand-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate Items
                </Link>
                <Link 
                  to="/ngos" 
                  className="py-2 text-gray-600 hover:text-brand-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  NGO Partners
                </Link>
                <Link 
                  to="/how-it-works" 
                  className="py-2 text-gray-600 hover:text-brand-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  to="/about" 
                  className="py-2 text-gray-600 hover:text-brand-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <div className="flex flex-col gap-2 py-2">
                  <Button variant="outline" asChild className="w-full justify-center">
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  </Button>
                  <Button asChild className="w-full justify-center">
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
