"use strict";
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
        return this.transactions.reduce((balance, transaction) => balance + transaction.amount, 0);
    }
    addTransactions(amount) {
        const transaction = new Transaction(amount);
        if (this.validateTransaction(amount)) {
            this.transactions.push(transaction);
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
        } else
        return false;
}
    addCustomerTransaction(customerId, amount) {
        const customer = this.customers.find((customer) => customer.id === customerId);
        if (customer) {
            customer.addTransactions(amount);
            return true;
        }
        else {
            return false;
        }
    }
    // Function to search for customers by name
    searchCustomers(keyword) {
        const results = this.customers.filter((customer) => {
            return customer.name.toLowerCase().includes(keyword.toLowerCase());
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
        else
            return false;
    }
    addCustomer(branch, customer) {
        if (this.branches.includes(branch)) {
            return branch.addCustomer(customer);
        }
        else {
            return false;
        }
    }
    addCustomerTransaction(branch, customerId, amount) {
        if (this.branches.includes(branch)) {
            return branch.addCustomerTransaction(customerId, amount);
        }
        else {
            return false;
        }
    }
    findBranchByName(branchName) {
        return this.branches.find((branch) => branch.name === branchName);
    }
    checkBranch(branch) {
        return this.branches.includes(branch);
    }
    listCustomers(branch, includeTransactions) {
        if (this.branches.includes(branch)) {
            if (includeTransactions) {
                console.log(branch.customers);
            }
            else {
                branch.customers.map((customer, object) => (object = { id: customer.id, name: customer.name }));
            }
        }
        else {
            console.log("The Branch not found !!");
        }
    }
}
