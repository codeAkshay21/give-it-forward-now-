
import { Link, useLocation } from "react-router-dom";
import { Home, Gift, Award, Clock, MapPin, User, Settings, LogOut, Search } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const location = useLocation();
  const { userFullName, userEmail, signOut } = useAuthContext();
  
  // Define nav items
  const navigationItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: Home,
    },
    {
      title: "Donations",
      path: "/donate",
      icon: Gift,
    },
    {
      title: "Impact & Badges",
      path: "/impact",
      icon: Award,
    },
    {
      title: "Activity",
      path: "/activity",
      icon: Clock,
    },
    {
      title: "Find NGOs",
      path: "/ngos",
      icon: MapPin,
    }
  ];
  
  // Define user items
  const userItems = [
    {
      title: "Profile",
      path: "/profile",
      icon: User,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: Settings,
    }
  ];

  const getInitials = (name: string) => {
    return name?.split(' ').map(n => n[0]).join('') || 'U';
  };

  return (
    <Sidebar variant="floating">
      <SidebarHeader className="p-4">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold text-brand-green">GiveItForwardNow</h2>
          <div className="relative w-full">
            <Input 
              placeholder="Search..." 
              className="pl-9 bg-white border rounded-full" 
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 font-medium">Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.path}
                    tooltip={item.title}
                    className={`${location.pathname === item.path ? 'bg-brand-green/10 text-brand-green font-medium' : ''}`}
                  >
                    <Link to={item.path}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.title === "Donations" && (
                        <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-xs font-medium text-purple-600">
                          3
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 font-medium">User</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.path}
                    tooltip={item.title}
                    className={`${location.pathname === item.path ? 'bg-brand-green/10 text-brand-green font-medium' : ''}`}
                  >
                    <Link to={item.path}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="h-9 w-9">
              <AvatarImage alt={userFullName || "User"} />
              <AvatarFallback className="bg-brand-green text-white">
                {getInitials(userFullName || "")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm leading-tight">
              <span className="font-medium">{userFullName || "User"}</span>
              <span className="text-xs text-gray-500">{userEmail}</span>
            </div>
          </div>
          <SidebarMenuButton 
            onClick={signOut} 
            className="w-full text-red-500 hover:text-red-600 justify-center"
            tooltip="Sign Out"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span>Sign Out</span>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
