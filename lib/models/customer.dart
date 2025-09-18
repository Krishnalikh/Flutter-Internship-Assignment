class Product {
  final String name;
  final bool isActive;

  Product({
    required this.name,
    required this.isActive,
  });
}

class BankUpdate {
  final String lastUpdated;
  final String expectedNext;
  final int delayDays;

  BankUpdate({
    required this.lastUpdated,
    required this.expectedNext,
    required this.delayDays,
  });
}

class Customer {
  final int id;
  final String name;
  final List<Product> products;
  final bool hasActionRequired;
  final String? actionMessage;
  final BankUpdate? bankUpdate;

  Customer({
    required this.id,
    required this.name,
    required this.products,
    required this.hasActionRequired,
    this.actionMessage,
    this.bankUpdate,
  });
}