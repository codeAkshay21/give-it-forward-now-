
import { createContext, useContext, ReactNode } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isSignedIn: boolean;
  isLoading: boolean;
  userId: string | null;
  userFullName: string | null;
  userEmail: string | null;
  userImageUrl: string | null;
  signOut: () => Promise<void>;
  isNGO: boolean; // Mock flag to determine if user is NGO
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded, signOut } = useAuth();
  const { user } = useUser();
  
  // This is a simple mock to determine if user is an NGO
  // In a real app, you would use Clerk's roles/permissions or user metadata
  const isNGO = user?.emailAddresses.some(email => 
    email.emailAddress.includes("ngo") || 
    email.emailAddress.includes("organization")
  ) || false;
  
  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const value = {
    isSignedIn: !!isSignedIn,
    isLoading: !isLoaded,
    userId: user?.id || null,
    userFullName: user?.fullName || null,
    userEmail: user?.primaryEmailAddress?.emailAddress || null,
    userImageUrl: user?.imageUrl || null,
    signOut: handleSignOut,
    isNGO
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
