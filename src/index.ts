//Transaction
class Transaction {
  amount: number;
  date: Date;
  constructor(amount: number) {
    this.amount = amount;
    this.date = new Date();
  }
}
// Customer
class Customer {
  name: string;
  id: number;
  transactions: Transaction[];
  constructor(name: string, id: number) {
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
  addTransactions(amount: number): boolean {
    const transaction = new Transaction(amount);
    if (this.validateTransaction(amount)) {
      this.transactions.push(transaction);
      return true;
    }
    return false;
  }
  // Function to validate Transaction
  validateTransaction(amount: number): boolean {
    if (typeof amount !== "number" || amount < 0) {
      console.log("Invalid transaction amount");
      return false;
    }
    return true;
  }
}

//Branch
class Branch {
  name: string;
  customers: Customer[];
  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }
  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customer: Customer) {
    if (!this.customers.includes(customer)) {
      const result = this.customers.push(customer);
      return result > 0 ? true : false;
    } return false;
  }
  addCustomerTransaction(customerId: number, amount: number) {
    const customer = this.customers.find(
      (customer) => customer.id === customerId
    );
    if (customer) {
      customer.addTransactions(amount);
      return true;
    }
    return false;
  }
  // Function to search for customers by name
  searchCustomers(keyword: string) {
    const results = this.customers.filter((customer) => {
      return customer.name.toLowerCase().includes(keyword.toLowerCase());
    });
    return results;
  }
}

// bank
class Bank {
  name: string;
  branches: Branch[];
  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch: Branch): boolean {
    if (!this.branches.includes(branch)) {
      const result: number = this.branches.push(branch);
      return result > 0 ? true : false;
    }
    return false;
  }
  addCustomer(branch: Branch, customer: Customer) {
    if (this.branches.includes(branch)) {
      return branch.addCustomer(customer);
    } else {
      return false;
    }
  }
  addCustomerTransaction(branch: Branch, customerId: number, amount: number) {
    if (this.branches.includes(branch)) {
      return branch.addCustomerTransaction(customerId, amount);
    } else {
      return false;
    }
  }
  findBranchByName(branchName: string) {
    return this.branches.find((branch) => branch.name === branchName);
  }
  checkBranch(branch: Branch) {
    return this.branches.includes(branch);
  }
  listCustomers(branch: Branch, includeTransactions: boolean) {
    if (this.branches.includes(branch)) {
      if (includeTransactions) {
        console.log(branch.customers);
      } else {
        branch.customers.map(
          (customer, object: {}) =>
            (object = { id: customer.id, name: customer.name })
        );
      }
    } else {
      console.log("The Branch not found !!");
    }
  }
}
