//Transaction
class Transaction {
  constructor(amount) {
    try {
      if (amount < 0) {
        throw 'Transaction Can not be negative number !';
      }
      this.amount = amount;
      this.date = new Date();
    } catch (error) {
      console.error(Error);
    }
  }
}
//const money = new Transaction(100);

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
      (total, transaction) => total + transaction.amount
    );
  }
  addTransactions(amount) {
    const transaction = new transaction(amount);
    const result = this.transactions.push(transaction);
    return result > 0 ? true : false;
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
    if (customer){
      customer.addTransactions(amount);
      return true;
    }else {
      return false;
    }
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
// not done :|
  addCustomer(branch, customer) {
    // if(this )
  }
  // not done :|
  addCustomerTransaction(branch, customerId, amount) {
   
  }
    // not done :|
  findBranchByName(BranchName) {
    // return this.branches.filter(branch => branch.f )
  }
  // not done :|
  checkBranch(branch) {
    // const bank =
    // if (branch === )
    // Returns true if the branch belongs to the bank or false otherwise.
  }
  // not done :|
  listCustomers(branch) {
    // console.log()
    // listCustomers(branch: Branch, includeTransactions: boolean): void Description: Prints out a list of customers with their transaction details if includeTransactions is true.
  }
}

// object
// const arizonaBank = new Bank("Arizona")
// const westBranch = new Branch("West Branch")
// const sunBranch = new Branch("Sun Branch")
// const customer1 = new Customer("John", 1)
// const customer2 = new Customer("Anna", 2)
// const customer3 = new Customer("John", 3)

// arizonaBank.addBranch(westBranch)
// arizonaBank.addBranch(sunBranch)
// arizonaBank.addBranch(westBranch) 

// arizonaBank.findBranchByName("bank")
// arizonaBank.findBranchByName("sun")

// arizonaBank.addCustomer(westBranch, customer1)
// arizonaBank.addCustomer(westBranch, customer3)
// arizonaBank.addCustomer(sunBranch, customer1)
// arizonaBank.addCustomer(sunBranch, customer2)

// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000)
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
// arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)

// customer1.addTransactions(-1000)
// console.log(customer1.getBalance())
// console.log(arizonaBank.listCustomers(westBranch, true))
// console.log(arizonaBank.listCustomers(sunBranch,true))