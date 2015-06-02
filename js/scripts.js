"use strict";


//jQuery

$(document ).ready(function() {
  $("form#add-account").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());
    var newAccount = new BankAccount(name, initialDeposit);
    $("#balance").append("Balans: " + (newAccount.balance).toString());
  });
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
