function travel(username) {
  this.destinations = {};
  this .travelId = 0;
  message = "Welcome to your travel log, " + username + "!";
  console.log(message);
};

const travelLog = new travel("David");
console.log(travelLog);