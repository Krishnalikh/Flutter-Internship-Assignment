import '../models/dashboard.dart';

final DashboardStats dashboardStats = DashboardStats(
  totalLeads: "45",
  activeLeads: "23",
  completedLeads: "18",
  revenue: "₹2,45,000",
);

final List<QuickAction> quickActions = [
  QuickAction(
    title: "Add New Lead",
    icon: "add_circle",
    route: "/add-lead",
  ),
  QuickAction(
    title: "View Reports",
    icon: "analytics",
    route: "/reports",
  ),
  QuickAction(
    title: "Customer Support",
    icon: "support_agent",
    route: "/support",
  ),
  QuickAction(
    title: "Settings",
    icon: "settings",
    route: "/settings",
  ),
];

final List<RecentActivity> recentActivities = [
  RecentActivity(
    customerName: "Satish Patil",
    action: "Uploaded income proof",
    time: "2 hours ago",
    status: "completed",
  ),
  RecentActivity(
    customerName: "Ajay Potdar",
    action: "Application submitted",
    time: "4 hours ago",
    status: "pending",
  ),
  RecentActivity(
    customerName: "Akshata Kenjale",
    action: "Bank verification pending",
    time: "1 day ago",
    status: "waiting",
  ),
  RecentActivity(
    customerName: "Ninganna",
    action: "Credit card activated",
    time: "2 days ago",
    status: "completed",
  ),
];