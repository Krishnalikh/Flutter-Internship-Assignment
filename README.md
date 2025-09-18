# Leads Management App - Flutter

A comprehensive Flutter application for managing customer leads with dashboard, detailed views, action items and bank updates.

## Features

- **Dashboard Screen**: Overview with stats, quick actions, and recent activity
- **Customer Lead Cards**: Display customer information with product details
- **Customer Detail Screen**: Comprehensive view of individual customer information
- **Action Required**: Show customers who need to complete actions
- **Bank Updates**: Track bank update status and delays
- **Tabbed Interface**: Filter between Credit Cards, Savings A/c, and Demat A/c
- **Filter Options**: Filter leads by Actionable, Pending, Rejected, and Activated status
- **Help Section**: Fixed bottom help section for user support
- **Navigation**: Seamless navigation between screens

## Getting Started

### Prerequisites

- Flutter SDK (>=3.10.0)
- Dart SDK (>=3.0.0)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   flutter pub get
   ```

4. Run the app:
   ```bash
   flutter run
   ```

## Project Structure

```
lib/
├── main.dart                 # App entry point
├── screens/
│   ├── dashboard_screen.dart # Dashboard with stats and overview
│   ├── leads_screen.dart     # Main leads list screen
│   └── customer_detail_screen.dart # Individual customer details
├── models/
│   └── customer.dart         # Customer data models
│   └── dashboard.dart        # Dashboard data models
├── data/
│   └── customer_data.dart    # Sample customer data
│   └── dashboard_data.dart   # Dashboard sample data
└── widgets/
    ├── custom_app_bar.dart   # Custom app bar widget
    ├── tab_section.dart      # Tabs and filters section
    ├── customer_card.dart    # Customer card widget
    └── help_section.dart     # Bottom help section
```

## Design Features

- **Multi-Screen Architecture**: Dashboard, leads list, and detailed customer views
- **Interactive Navigation**: Tap-to-navigate between screens with smooth transitions
- **Gradient Backgrounds**: Beautiful gradient headers and accent elements
- **Material Design**: Uses Flutter's Material Design components
- **Custom Styling**: Matches the original design with Poppins font family
- **Responsive Layout**: Adapts to different screen sizes
- **Shadow Effects**: Subtle shadows for depth and visual hierarchy
- **Color Scheme**: Blue accent color (#0057D8) with proper contrast ratios

## Customization

- Modify `customer_data.dart` to add or update customer information
- Update `dashboard_data.dart` to customize dashboard statistics and activities
- Update colors in the theme or individual widgets
- Add new filter options in `TabSection`
- Extend the `Customer` model for additional fields
- Add new quick actions in the dashboard

## Build

To build the app for release:

```bash
flutter build apk --release  # For Android
flutter build ios --release  # For iOS
```