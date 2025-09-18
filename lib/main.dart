import 'package:flutter/material.dart';
import 'screens/lead_detail_screen.dart';
import 'screens/application_timeline_screen.dart';
import 'screens/recommended_products_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Lead Management App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'Poppins',
      ),
      home: LeadDetailScreen(),
      routes: {
        '/timeline': (context) => ApplicationTimelineScreen(),
        '/recommended': (context) => RecommendedProductsScreen(),
      },
    );
  }
}