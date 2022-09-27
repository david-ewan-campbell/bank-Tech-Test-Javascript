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
      .mockImplementation(() => new Date("2022-09-27T11:19:00.060Z"));

    account.deposit(1000);
    expect(account.transactions).toEqual([
      {
        date: "27/09/2022",
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
      .mockImplementation(() => new Date("2022-09-27T11:19:00.060Z"));

    account.deposit(1000);
    account.withdrawal(500);

    expect(account.transactions[1]).toEqual({
        date: "27/09/2022",
        credit: "",
        debit: "500.00",
        balance: "500.00",
    });
  });

  it("can print a formatted statement of a users account when requested", () => {
    let account = new Account();
    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => new Date("2022-09-27T11:19:00.060Z"));

    account.deposit(1000);
    account.withdrawal(500);

    expect(account.statementPrintOut()).toEqual(
      "date || credit || debit || balance\n27/09/2022 ||  || 500.00 || 500.00\n27/09/2022 || 1000.00 ||  || 1000.00"
    );
  });
});
