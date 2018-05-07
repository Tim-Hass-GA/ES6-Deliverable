// Convert the driveTo method below to use ES6 default parameters.

var myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: "the Office",
  driveTo: function ( place = 'home') {
    this.location = place
  }
}

myRide.driveTo("Walmart")
var location_1 = myRide.location // "Walmart"
console.log(location_1)

console.log(`${myRide.make} is taking me to ${location_1} and,`)

// vs...

myRide.driveTo()
var location_2 = myRide.location // "Home"
console.log(location_2)

console.log(`then we are going to ${location_2}.`)
