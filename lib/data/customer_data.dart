import '../models/customer.dart';

final List<Customer> customerData = [
  Customer(
    id: 1,
    name: "Satish Patil",
    products: [
      Product(name: "SBI Prime", isActive: true),
      Product(name: "HDFC Freedom", isActive: false),
      Product(name: "Axis MyZone", isActive: false),
      Product(name: "Kiwibank", isActive: false),
    ],
    hasActionRequired: true,
    actionMessage: "Upload income proof to proceed with your application",
  ),
  Customer(
    id: 2,
    name: "Ajay Potdar",
    products: [
      Product(name: "SBI Prime Credit Card", isActive: true),
    ],
    hasActionRequired: true,
    actionMessage: "Upload income proof to proceed with your application",
  ),
  Customer(
    id: 3,
    name: "Akshata Kenjale",
    products: [
      Product(name: "SBI Prime Credit Card", isActive: true),
    ],
    hasActionRequired: false,
    bankUpdate: BankUpdate(
      lastUpdated: "21 August, 2025",
      expectedNext: "28 August, 2025",
      delayDays: 6,
    ),
  ),
  Customer(
    id: 4,
    name: "Ninganna",
    products: [
      Product(name: "SBI Prime Credit Card", isActive: true),
    ],
    hasActionRequired: false,
    bankUpdate: BankUpdate(
      lastUpdated: "21 August, 2025",
      expectedNext: "28 August, 2025",
      delayDays: 6,
    ),
  ),
];