import { 
  Sidebar, 
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { 
  BookOpen, 
  Compass, 
  Users, 
  Zap, 
  Calendar, 
  Target, 
  BarChart2, 
  Trophy, 
  Activity, 
  TrendingUp
} from "lucide-react";
import { Link, useLocation } from "wouter";

const mainNavItems = [
  { title: "Learn", icon: BookOpen, href: "/learn" },
  { title: "Explore", icon: Compass, href: "/" },
  { title: "Referrals", icon: Users, href: "/referrals" },
  { title: "Quests", icon: Zap, href: "/quests" },
  { title: "Campaigns", icon: Calendar, href: "/campaigns" },
  { title: "Ecosystem Dapps", icon: Target, href: "/ecosystem-dapps" },
  { title: "Trade", icon: Activity, href: "/trade" },
  { title: "Analytics", icon: BarChart2, href: "/analytics" },
  { title: "Leaderboard", icon: TrendingUp, href: "/leaderboard" },
  { title: "Achievements", icon: Trophy, href: "/achievements" }
];

export default function QuestflowSidebar() {
  const [location] = useLocation();

  // Hide sidebar completely on /home or /
  if (location === "/" || location === "/home") return null;

  return (
    <Sidebar className="border-r border-border/40">
      <SidebarContent className="bg-background">
        {/* Logo */}
        <div className="p-6 border-b border-border/40">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">QF</span>
            </div>
            <div className="flex flex-col font-bold text-lg text-foreground">
              <span>QUEST</span>
              <span className="ml-4">FLOW</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const isActive = location === item.href || (item.href === "/" && (location === "/" || location === "/discover"));
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`
                        w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                        ${isActive ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted hover:text-foreground"}
                      `}
                    >
                      <Link
                        href={item.href}
                        className="flex w-full items-center gap-3"
                        data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-base font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
