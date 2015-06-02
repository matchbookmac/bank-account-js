"use strict";


//jQuery

$(document ).ready(function() {
  var account;

  var bgArray = ["http://www.freedomofresearch.org/sites/default/files/Mountains-Switzerland-Bernese-Oberland-High-Resolution-Wallpapers.jpg",
                "https://d1k976m6pd0u9m.cloudfront.net/public/media/55350468e1944.jpg",
                "http://www.capitalfm.co.ke/lifestyle/files/2014/08/switzerland.jpg",
                "http://yourtripideas.com/wp-content/uploads/2015/04/Switzerland-newholidays-besttravel.jpg",
                "http://www.indulgentvacations.com/wp-content/uploads/2014/04/Nature-Landscapes-Tour-Switzerland1.jpg",
                "http://www.andermatt-swissalps.ch/fileadmin/user_upload/Location/Andermatt/Back_Andermatt.jpg"];
  var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
  $('body').css({'background-image': 'url(' + bg + ')'});

  function updateBalance() {
    $("#balance").empty();
    $("#balance").append('<h2 class="text-center">' + "Balans: " + formatAmount(account.balance) + ' CHF</h2>');
  }

  function clearForms() {
    $("form#add-account").find("input").val("");
    $("form#deposit").find("input").val("");
  }

  function formatAmount(amount) {
    amount = amount.toString().split('').reverse();
    for(var i = 0; i < amount.length; i++) {
      if(i != 0 && i % 3 === 0) {
        amount[i] = amount[i] + ",";
      }
    }
    amount = amount.reverse().join('');
    return amount;
  }

  $('input#withdrawal-amount').on('input', function() {
    var userInput = parseInt($('input#withdrawal-amount').val());
    if (userInput > account.balance) {
      $("#go-button").hide();
      $("#no-button").show();
    } else {
      $("#no-button").hide();
      $("#go-button").show();
    }
  });

  $("form#add-account").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initialDeposit = parseInt($("input#initial-deposit").val());
    account = new BankAccount(name, initialDeposit);
    $("#title").empty();
    $("#title").append('<h1 class="text-center" id="title">Välkommen Till Banken, ' + account.name + '!</h1>');
    $("#bank").hide();
    $("#account").show();
    updateBalance();
    clearForms();
  });

  $("form#deposit").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("input#deposit-amount").val());
    account.deposit(deposit);
    updateBalance();
    var date = new Date();
    $("table#history").append('<tr class="success"> <td>' + date.toLocaleString() + '</td> <td> +' + deposit.toString() + ' CHF</td> <td>' + (account.balance).toString() + ' CHF</td> </tr>');
    clearForms();
    $("#history-panel").show();
  });

  $("form#withdraw").submit(function(event) {
    event.preventDefault();
    var withdrawal = parseInt($("input#withdrawal-amount").val());
    account.withdraw(withdrawal);
    updateBalance();
    var date = new Date();
    $("table#history").append('<tr class="danger"> <td>' + date.toLocaleString() + '</td> <td> -' + withdrawal.toString() + ' CHF</td> <td>' + (account.balance).toString() + ' CHF</td> </tr>');
    clearForms();
    $("#history-panel").show();
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
