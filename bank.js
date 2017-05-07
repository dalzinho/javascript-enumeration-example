var Bank = function(){
  this.accounts = [];
};

Bank.prototype = {
  addAccount: function(account){
    this.accounts.push(account);
  },

  largest: function(account){
    if(account.balance > target.balance){
      target = account;
    }
  },


  findByName: function(searchName){
    for (var account of this.accounts){

      if(searchName === account.ownerName){
        return account;
      }
    }
  },


  findAccount: function(callback){
    var target = this.accounts[0];
    this.accounts.forEach(function(account){
      callback(account);
    });
  },



  largestAccount: function(){
    var largest = this.accounts[0];

    for(var account of this.accounts){
      if(account.balance > largest.balance){
        largest = account;
      }
    }
    return largest;
  },

  totalHeld: function(){
    var total = 0;
    this.accounts.forEach(function(account){
      total += account.balance;
    })
    return total;
  },

  averageBalance: function(){
    return this.totalHeld() / this.accounts.length;
  },
  
  totalByType: function(searchType){
    var total = 0;
    for(var account of this.accounts){
      if(account.type === searchType){
        total += account.balance;
      }
    }
    return total;
  }
};


module.exports = Bank;