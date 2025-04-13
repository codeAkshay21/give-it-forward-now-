
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  requiresNGO?: boolean;
}

const ProtectedRoute = ({ children, requiresNGO = false }: ProtectedRouteProps) => {
  const { isSignedIn, isLoading, isNGO } = useAuthContext();

  if (isLoading) {
    // While checking auth state, show a loading indicator
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green" />
    </div>;
  }

  if (!isSignedIn) {
    // If not signed in, redirect to login page
    return <Navigate to="/login" />;
  }

  if (requiresNGO && !isNGO) {
    // If route requires NGO role but user is not an NGO, redirect to dashboard
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
