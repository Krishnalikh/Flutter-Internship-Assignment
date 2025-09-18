import 'package:flutter/material.dart';

class TabData {
  final String label;
  final String count;
  final bool isActive;
  final Color badgeColor;

  TabData({
    required this.label,
    required this.count,
    required this.isActive,
    required this.badgeColor,
  });
}

class FilterData {
  final String label;
  final String count;
  final bool isActive;

  FilterData({
    required this.label,
    required this.count,
    required this.isActive,
  });
}

class TabSection extends StatelessWidget {
  const TabSection({super.key});

  @override
  Widget build(BuildContext context) {
    final tabsData = [
      TabData(
        label: "Credit Cards",
        count: "20",
        isActive: true,
        badgeColor: const Color(0xFFE43D3D),
      ),
      TabData(
        label: "Savings A/c",
        count: "10",
        isActive: false,
        badgeColor: Colors.black,
      ),
      TabData(
        label: "Demat A/c",
        count: "10",
        isActive: false,
        badgeColor: Colors.black,
      ),
    ];

    final filterData = [
      FilterData(label: "Actionable", count: "3", isActive: true),
      FilterData(label: "Pending", count: "2", isActive: false),
      FilterData(label: "Rejected", count: "1", isActive: false),
      FilterData(label: "Activated", count: "1", isActive: false),
    ];

    return Column(
      children: [
        // Tabs
        Container(
          color: Colors.white,
          child: Column(
            children: [
              Row(
                children: tabsData.asMap().entries.map((entry) {
                  final index = entry.key;
                  final tab = entry.value;
                  
                  double width = index == 0 ? 150 : index == 1 ? 113 : 106;
                  double leftMargin = index == 0 ? 0 : index == 1 ? 16 : 14;
                  
                  return Container(
                    width: width,
                    margin: EdgeInsets.only(left: leftMargin),
                    child: Opacity(
                      opacity: tab.isActive ? 1.0 : 0.3,
                      child: Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                            child: Row(
                              children: [
                                Text(
                                  tab.label,
                                  style: TextStyle(
                                    fontFamily: 'Poppins',
                                    fontWeight: tab.isActive ? FontWeight.w500 : FontWeight.w300,
                                    fontSize: 14,
                                    color: tab.isActive ? const Color(0xCC000000) : Colors.black,
                                  ),
                                ),
                                const SizedBox(width: 8),
                                Container(
                                  width: 24,
                                  height: 16,
                                  decoration: BoxDecoration(
                                    color: tab.badgeColor,
                                    borderRadius: BorderRadius.circular(20),
                                  ),
                                  child: Center(
                                    child: Text(
                                      tab.count,
                                      style: const TextStyle(
                                        fontFamily: 'Poppins',
                                        fontWeight: FontWeight.w500,
                                        fontSize: 10,
                                        color: Colors.white,
                                        height: 1.2,
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          if (tab.isActive)
                            Container(
                              height: 3.45,
                              color: const Color(0xCC000000),
                            ),
                        ],
                      ),
                    ),
                  );
                }).toList(),
              ),
              Container(
                height: 1,
                color: const Color(0x1A000000),
              ),
            ],
          ),
        ),
        
        // Filters
        Container(
          padding: const EdgeInsets.only(left: 14, top: 16),
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: filterData.map((filter) {
                return Container(
                  margin: const EdgeInsets.only(right: 2),
                  child: ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      backgroundColor: filter.isActive 
                          ? const Color(0x1A0057D8) 
                          : Colors.transparent,
                      foregroundColor: filter.isActive 
                          ? const Color(0xFF0057D8) 
                          : const Color(0x80000000),
                      elevation: 0,
                      side: filter.isActive 
                          ? BorderSide.none 
                          : const BorderSide(color: Color(0x1A000000)),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(28),
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                    ),
                    child: Text(
                      '${filter.label} (${filter.count})',
                      style: const TextStyle(
                        fontFamily: 'Poppins',
                        fontSize: 12,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                  ),
                );
              }).toList(),
            ),
          ),
        ),
      ],
    );
  }
}