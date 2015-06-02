"use strict";


//jQuery

$(document ).ready(function() {
  $("form#add-account").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());
    var newAccount = new BankAccount(name, initialDeposit);
    location.href="bank-account-info-js.html";
  });
  $("#balance").append("Balans: " + newAccount.balance);
});

//raw js

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
}
