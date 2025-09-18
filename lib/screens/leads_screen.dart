import 'package:flutter/material.dart';
import '../data/customer_data.dart';
import '../widgets/custom_app_bar.dart';
import '../widgets/tab_section.dart';
import '../widgets/customer_card.dart';
import '../widgets/help_section.dart';

class LeadsScreen extends StatelessWidget {
  const LeadsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF5F9FF),
      appBar: const CustomAppBar(),
      body: Column(
        children: [
          const TabSection(),
          const SizedBox(height: 16),
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.only(bottom: 80), // Space for help section
              itemCount: customerData.length,
              itemBuilder: (context, index) {
                return CustomerCard(customer: customerData[index]);
              },
            ),
          ),
        ],
      ),
      bottomSheet: const HelpSection(),
    );
  }
}