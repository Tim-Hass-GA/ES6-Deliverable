// Make a prediction: does the fact that the account object is constant mean
// that we can't update the password inside?  Why or why not?
// Try it out!
// If it turns out we *can* change the password, try to make it so that we
// can't.  Hint: the thing to google is object freeze

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// The Object.freeze() method freezes an object: that is, prevents new properties
// from being added to it; prevents existing properties from being removed; and
// prevents existing properties, or their enumerability, configurability, or
// writability, from being changed, it also prevents the prototype from being
// changed.

// change const to object freeze
Object.freeze( account = {
  username: "marijn",
  password: "xyzzy"
} )

console.log(account.password)
account.password = "s3cret"
console.log(account.password)

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Constant_non-constance
