class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount, date = new Date(Date.now())) {
    this.balance += amount;
    this.saveDeposit(amount, date);
  }

  withdrawal(amount, date = new Date(Date.now())) {
    if (amount > this.balance) {
      throw "You have insufficient funds in your account!";
    } else {
      this.balance -= amount;
      this.saveWithdrawal(amount, date);
    }
  }

  saveDeposit(amount, date) {
    let transaction = {
      date: date.toLocaleDateString(),
      credit: amount.toFixed(2),
      debit: "",
      balance: this.balance.toFixed(2),
    };

    this.transactions.push(transaction);
  }

  saveWithdrawal(amount, date) {
    let transaction = {
      date: date.toLocaleDateString(),
      credit: "",
      debit: amount.toFixed(2),
      balance: this.balance.toFixed(2),
    };

    this.transactions.push(transaction);
  }

  statementPrintOut() {
    return "date || credit || debit || balance\n" + this.statementFormat();
  }

  statementFormat() {
    let transactionHistory = this.transactions.reverse();
    let statement = [];

    transactionHistory.forEach((transaction) => {
      statement.push(
        `${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`
      );
    });
    
    return statement.join("\n");
  }
}

module.exports = Account;
