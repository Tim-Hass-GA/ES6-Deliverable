// Our cash register has a few serious problems

// var register = {
//   balance: 0,
//   deposit: function(value){
//     this.balance += value
//   },
//   withdraw: function(value){
//     this.balance -= value
//   }
// }

var register = {
  set balance(value) {
    if (value < 0){
      console.log('must be positive')
    } else {
      this.balance += value
    }
  }
  get balance(){
    return this.balance
  }
}

// Anyone can directly update their balance without a withdraw/ deposit:
register.balance = 100000

// The balance can be manipulated with unsanitized input:
register.deposit(1)
register.deposit("0")
register.deposit("00000")
register.balance

// update the register object to use getters and setters. Throw an error
// if the user sets a value that is not a positive integer

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
// https://javascriptplayground.com/es5-getters-setters/
