
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUp } from "@clerk/clerk-react";
import { useAuthContext } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Signup = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuthContext();
  
  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard', { replace: true });
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <SignUp
            routing="path"
            path="/signup"
            signInUrl="/login"
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                rootBox: "mx-auto w-full",
                card: "shadow-md rounded-md border border-gray-200",
                headerTitle: "text-center text-2xl font-semibold text-gray-900",
                headerSubtitle: "text-center text-gray-600",
                formButtonPrimary: "bg-brand-green hover:bg-brand-green-dark",
                footerAction: "text-brand-green hover:text-brand-green-dark",
                socialButtonsBlockButton: "border-gray-300 hover:bg-gray-50",
                socialButtonsBlockButtonText: "text-gray-600",
                formButtonReset: "text-brand-green hover:text-brand-green-dark",
                dividerText: "text-gray-500",
              }
            }}
          />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-brand-green hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
