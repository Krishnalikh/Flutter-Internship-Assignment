class DashboardStats {
  final String totalLeads;
  final String activeLeads;
  final String completedLeads;
  final String revenue;

  DashboardStats({
    required this.totalLeads,
    required this.activeLeads,
    required this.completedLeads,
    required this.revenue,
  });
}

class QuickAction {
  final String title;
  final String icon;
  final String route;

  QuickAction({
    required this.title,
    required this.icon,
    required this.route,
  });
}

class RecentActivity {
  final String customerName;
  final String action;
  final String time;
  final String status;

  RecentActivity({
    required this.customerName,
    required this.action,
    required this.time,
    required this.status,
  });
}