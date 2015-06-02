"use strict";


//jQuery

$(document ).ready(function() {
  var account;

  function updateBalance() {
    $("#balance").empty();
    $("#balance").append("Balans: " + (account.balance).toString());
  }

  function clearForms() {
    $("form#add-account").find("input").val("");
    $("form#deposit").find("input").val("");
  }

  $("form#add-account").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());
    account = new BankAccount(name, initialDeposit);
    updateBalance();
    clearForms();
  });

  $("form#deposit").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("input#deposit-amount").val());
    account.deposit(deposit);
    updateBalance();
    clearForms();
  });

  $("form#withdraw").submit(function(event) {
    event.preventDefault();
    var withdrawal = parseInt($("input#withdrawal-amount").val());
    account.withdraw(withdrawal);
    updateBalance();
    clearForms();
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
