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

  travel.prototype.deleteDestination = function(id) {
    delete this.destinations[id];
    return this.destinations;
};
};

function travelDestination(name, location, landmarks, date, notes) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.notes = notes;
};


const Paris = new travelDestination("Paris", "France", ["Eiffel Tower", "Louvre Museum"], "2023-05-01", "Had a great time exploring the city!");
const Tokyo = new travelDestination("Tokyo", "Japan", ["Shibuya Crossing", "Tokyo Tower"], "2023-06-15", "Loved the vibrant culture and delicious food!");

const newTravel = new travel("David");

newTravel.addDestination(Paris.name, Paris.location, Paris.landmarks, Paris.date, Paris .notes);
newTravel.addDestination(Tokyo.name, Tokyo.location, Tokyo.landmarks, Tokyo.date, Tokyo.notes);

console.log(newTravel.destinations);
newTravel.deleteDestination(1);
console.log(newTravel.destinations);


