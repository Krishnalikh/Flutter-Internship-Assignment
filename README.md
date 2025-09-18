# Lead Management Flutter App

This Flutter application recreates the lead management interface based on the provided screenshots.

## Features

- **Lead Detail Screen**: Shows customer information, credit card details, application status, and action buttons
- **Application Timeline Screen**: Displays the step-by-step progress of the application process
- **Recommended Products Screen**: Shows a grid of recommended financial products

## Screens Implemented

1. **Lead Detail Screen** (`lib/screens/lead_detail_screen.dart`)
   - Customer header with WhatsApp integration
   - Status tabs and filter chips
   - Credit card information with update tracking
   - Application status timeline
   - SMS and WhatsApp reminder buttons

2. **Application Timeline Screen** (`lib/screens/application_timeline_screen.dart`)
   - Complete timeline of application steps
   - Customer action required section
   - Complete form button

3. **Recommended Products Screen** (`lib/screens/recommended_products_screen.dart`)
   - Grid layout of recommended financial products
   - Bank logos and product information
   - Sell Now buttons for each product

## Setup Instructions

1. **Prerequisites**: Make sure you have Flutter installed on your system
2. **Clone/Copy**: Copy all the files to your Flutter project directory
3. **Dependencies**: Run `flutter pub get` to install dependencies
4. **Assets**: Add the required font files to the `fonts/` directory:
   - `Poppins-Regular.ttf`
   - `Poppins-Medium.ttf`
   - `Poppins-SemiBold.ttf`
5. **Run**: Execute `flutter run` to start the application

## Dependencies Used

- `url_launcher`: For WhatsApp and SMS functionality
- `cupertino_icons`: For iOS-style icons

## Design Features

- **Material Design**: Uses Flutter's Material Design components
- **Custom Colors**: Matches the original design color scheme
- **Responsive Layout**: Adapts to different screen sizes
- **Custom Fonts**: Uses Poppins font family as in the original design
- **Interactive Elements**: Buttons, chips, and navigation elements

## File Structure

```
lib/
├── main.dart                           # App entry point
├── screens/
│   ├── lead_detail_screen.dart         # Main lead details screen
│   ├── application_timeline_screen.dart # Timeline view
│   └── recommended_products_screen.dart # Products grid
```

## Notes

- The app is designed to match the exact visual appearance of the provided screenshots
- WhatsApp and SMS functionality requires proper configuration for production use
- Bank logos are represented with colored containers and letters (can be replaced with actual logo images)
- All text styles, colors, and spacing match the original design specifications

To run this in your local Flutter environment, simply copy these files to a new Flutter project and run `flutter pub get` followed by `flutter run`.