function travel(username) {
  this.destinations = {};
  this .travelId = 0;
  // message = "Welcome to your travel log, " + username + "!";
  // console.log(message);


  travel.prototype.generateID = function() {
    this.travelId++;
    return this.travelId;};

  travel.prototype.addDestination = function(name, location, landmarks, date, notes) {
    const id = this.generateID();
    this.destinations[id] = {
      name: name,
      location: location,
      landmarks: landmarks,
      date: date,
      notes: notes
    };
  };
};

function travelDestination(name, location, landmarks, date, notes) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.notes = notes;
};

// const newDestination = new travelDestination("Paris", "France", ["Eiffel Tower", "Louvre Museum"], "2023-05-01", "Had a great time exploring the city!");
// const newTravel = new travel("David");
// newTravel.addDestination(newDestination.name, newDestination.location, newDestination.landmarks, newDestination.date, newDestination.notes);
// console.log(newTravel.destinations);