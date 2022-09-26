const Account = require("./Account");

describe("Account", () => {
  it("starts user account with a balance of zero", () => {
    let account = new Account();
    expect(account.balance).toEqual(0);
  });

  it("lets a user make a deposit into their account", () => {
    let account = new Account();
    account.deposit(1000);
    expect(account.balance).toEqual(1000);
  });
  
  it("lets a user make a withdrawal from their account", () => {
    let account = new Account();
    account.deposit(1000);
    account.withdrawal(500);
    expect(account.balance).toEqual(500);
  });

  it("saves a users deposit history", () => {
    let account = new Account();
    jest
      .spyOn(global.Date, "now")
      .mockImplementationOnce(() => new Date("2022-09-12T23:13:31.060Z"));

    account.deposit(1000);
    expect(account.transactions).toEqual([
      {
        date: "13/09/2022",
        credit: "1000.00",
        debit: "",
        balance: "1000.00",
      },
    ]);
  });

  it("saves a users withdrawal history", () => {
    let account = new Account();
    jest
      .spyOn(global.Date, "now")
      .mockImplementationOnce(() => new Date("2022-09-26T23:13:31.060Z"));

    account.deposit(1000);
    account.withdrawal(500);

    expect(account.transactions[1]).toEqual({
        date: "26/09/2022",
        credit: "",
        debit: "500.00",
        balance: "500.00",
    });
  });

  it("can print a formatted statement of a users account when requested", () => {
    let account = new Account();
    jest
      .spyOn(global.Date, "now")
      .mockImplementationOnce(() => new Date("2022-09-26T23:13:31.060Z"));

    account.deposit(1000);
    account.withdrawal(500);

    expect(account.printedStatement()).toEqual(
      "date || credit || debit || balance\n26/09/2022 ||  || 500.00 || 500.00\n26/09/2022 || 1000.00 ||  || 1000.00"
    );
  });
});
