
import { ReactNode, useEffect } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useTheme } from "@/hooks/use-theme";
import AppSidebar from "./Sidebar";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const { theme } = useTheme();
  
  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full dark:bg-background">
        <AppSidebar />
        <SidebarInset className="bg-gray-50 dark:bg-gray-900">
          <div className="p-4 md:p-6">
            {children}
          </div>
        </SidebarInset>
      </div>
      <Toaster />
      <Sonner />
    </SidebarProvider>
  );
};

export default AuthenticatedLayout;
