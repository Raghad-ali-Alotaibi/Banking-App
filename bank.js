//Transaction
class Transaction {
  constructor(amount) {
    this.amount = amount;
    this.date = new Date();
  }
}
// Customer
class Customer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.transactions = [];
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getTransactions() {
    return this.transactions;
  }
  getBalance() {
    return this.transactions.reduce(
      (balance, transaction) => balance + transaction.amount,
      0
    );
  }
  addTransactions(amount) {
    if (this.validateTransaction(amount)) {
      this.transactions.push({ amount: amount });
      return true;
    }
    return false;
  }
  // Function to validate Transaction
  validateTransaction(amount) {
    if (typeof amount !== "number" || amount < 0) {
      console.log("Invalid transaction amount");
      return false;
    }
    return true;
  }
}

//Branch
class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }
  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customer) {
    if (!this.customers.includes(customer)) {
      const result = this.customers.push(customer);
      return result > 0 ? true : false;
    }
  }
  addCustomerTransaction(customerId, amount) {
    const customer = this.customers.find(
      (customer) => customer.id === customerId
    );
    if (customer) {
      customer.addTransactions(amount);
      return true;
    } else {
      return false;
    }
  }
  // Function to search for customers by name or ID
  searchCustomers(keyword) {
    const results = this.customers.filter((customer) => {
      return (
        customer.name.toLowerCase().includes(keyword.toLowerCase()) ||
        customer.id.toString() === keyword
      );
    });
    return results;
  }
}

// bank
class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch) {
    if (!this.branches.includes(branch)) {
      const result = this.branches.push(branch);
      return result > 0 ? true : false;
    }
  }
  addCustomer(branch, customer) {
    if (this.branches.includes(branch)) {
      return branch.addCustomer(customer);
    } else {
      return false;
    }
  }
  addCustomerTransaction(branch, customerId, amount) {
    if (this.branches.includes(branch)) {
      return branch.addCustomerTransaction(customerId, amount);
    } else {
      return false;
    }
  }
  findBranchByName(branchName) {
    const matchBranches = this.branches.filter(
      (branch) => branch.getName() === branchName
    );
    return matchBranches.length > 0 ? matchBranches : null;
  }
  checkBranch(branch) {
    if (this.branches.includes(branch)) {
      return true;
    } else {
      return false;
    }
  }
  listCustomers(branch, includeTransactions) {
    if (this.branches.includes(branch)) {
      let allofCustomers = branch.customers;
      if (includeTransactions) {
        return allofCustomers;
      } else {
        allofCustomers = allofCustomers.map(
          (customer, object) =>
            (object = { id: customer.id, name: customer.name })
        );
        return allofCustomers;
      }
    } else {
      console.log("The Branch not found !!");
    }
    console.log(allofCustomers);
  }
}


// object
const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer("John", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John", 3);

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);

arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000);

customer1.addTransactions(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));
