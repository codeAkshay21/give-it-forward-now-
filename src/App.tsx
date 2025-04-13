
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/hooks/use-theme";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NGODashboard from "./pages/NGODashboard";
import Activity from "./pages/Activity";
import Impact from "./pages/Impact";
import Donate from "./pages/Donate";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import FindNGOs from "./pages/FindNGOs";
import { useAuthContext } from "@/contexts/AuthContext";

const queryClient = new QueryClient();

// Conditional redirect component
const HomeRedirect = () => {
  const { isSignedIn, isLoading } = useAuthContext();
  
  // While loading auth state, return null
  if (isLoading) return null;
  
  // If signed in, redirect to dashboard, else show Index page
  return isSignedIn ? <Navigate to="/dashboard" replace /> : <Index />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomeRedirect />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/*" element={<Login />} /> {/* Added for Clerk auth flow */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/signup/*" element={<Signup />} /> {/* Added for Clerk auth flow */}
              
              {/* Protected routes with sidebar layout */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <Dashboard />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              } />
              <Route path="/donate" element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <Donate />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              } />
              <Route path="/activity" element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <Activity />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              } />
              <Route path="/impact" element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <Impact />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              } />
              <Route path="/ngos" element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <FindNGOs />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <Profile />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <Settings />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              } />
              <Route path="/ngo/dashboard" element={
                <ProtectedRoute requiresNGO={true}>
                  <AuthenticatedLayout>
                    <NGODashboard />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              } />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
