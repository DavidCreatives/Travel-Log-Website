class travel {
  constructor() {
    this.destinations = {};
    this.travelId = 0;
  }

  generateID() {
    this.travelId++;
    return this.travelId;
  }

  addDestination(destination) {
    const travelID = this.generateID();
    this.destinations[travelID] = destination;
    return this.destinations;
  }

  deleteDestination(id) {
    const userConfirmation = confirm("Are you sure you want to delete this entry?");
    if (userConfirmation) {
      delete this.destinations[id];
    }
  }
}

class travelDestination {
  constructor(placename, currentLocation, landmarks, visitDate, notes) {
    this.travelId = null;
    this.placename = placename;
    this.currentLocation = currentLocation;
    this.landmarks = landmarks;
    this.visitDate = visitDate;
    this.notes = notes;
  }
};

// Tests:
// const Paris = new travelDestination("Paris", "France", ["Eiffel Tower", "Louvre Museum"], "2023-05-01", "Had a great time exploring the city!");
// const Tokyo = new travelDestination("Tokyo", "Japan", ["Shibuya Crossing", "Tokyo Tower"], "2023-06-15", "Loved the vibrant culture and delicious food!");

// const newTravel = new travel();

// newTravel.addDestination(Paris.placename, Paris.currentLocation, Paris.landmarks, Paris.visitDate, Paris.notes);
// newTravel.addDestination(Tokyo.placename, Tokyo.currentLocation, Tokyo.landmarks, Tokyo.visitDate, Tokyo.notes);

// console.log(newTravel.destinations);
// newTravel.deleteDestination(1);
// console.log(newTravel.destinations);


let travelLog = new travel();

function handleTravel(){
  const placenameField = document.getElementById("name")
  const currentLocationField = document.getElementById("location")
  const landmarksField = document.getElementById("landmarks")
  const visitDateField = document.getElementById("date")
  const notesField = document.getElementById("notes")

  const nameValue = placenameField.value.trim();
  const locationValue = currentLocationField.value.trim();
  const landmarksValue = landmarksField.value.trim();
  const dateValue = visitDateField.value;
  const notesValue = notesField.value.trim();

  // Validation
  if (!nameValue || !locationValue || !dateValue) {
    alert("Please fill in name, location, and date fields");
    return;
  }

  const newDestination = new travelDestination(nameValue, locationValue, landmarksValue, dateValue, notesValue);
  travelLog.addDestination(newDestination);
  
  // Clear form
  placenameField.value = "";
  currentLocationField.value = "";
  landmarksField.value = "";
  visitDateField.value = "";
  notesField.value = "";

  // Display destinations
  displayDestinations();
  console.log(travelLog.destinations);
};

function displayDestinations() {
  const travelDisplay = document.querySelector(".travelDisplay");
  travelDisplay.innerHTML = "";
  
  for (let id in travelLog.destinations) {
    const dest = travelLog.destinations[id];
    const destDiv = document.createElement("div");
    destDiv.className = "destination-card";
    destDiv.innerHTML = `
      <h4>${dest.placename}</h4>
      <p><strong>Location:</strong> ${dest.currentLocation}</p>
      <p><strong>Date:</strong> ${dest.visitDate}</p>
      <p><strong>Landmarks:</strong> ${dest.landmarks}</p>
      <p><strong>Notes:</strong> ${dest.notes}</p>
      <button onclick="deleteEntry(${id})">Delete</button>
    `;
    travelDisplay.appendChild(destDiv);
  }
};

function deleteEntry(id) {
  travelLog.deleteDestination(id);
  displayDestinations();
};


