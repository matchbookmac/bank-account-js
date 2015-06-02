describe('BankAccount', function() {
  it("creates a new BankAccount object", function() {
    var testBankAccount = new BankAccount("Dave Blanket", 500);
    expect(testBankAccount.name).to.equal("Dave Blanket");
    expect(testBankAccount.balance).to.equal(500);
  });

  it("deposits money into account", function() {
    var testBankAccount = new BankAccount("Dave Blanket", 500);
    testBankAccount.deposit(200);
    expect(testBankAccount.balance).to.equal(700);
  });

  it("withdraws money from account", function() {
    var testBankAccount = new BankAccount("Dave Blanket", 500);
    testBankAccount.withdraw(200);
    expect(testBankAccount.balance).to.equal(300);
  });

});
