# Travel-Log-Website ✈️#  

## 📖Project Description ##  
A website that'll track and display the destinations a user has been.  
It will allow a user to enter, store, view and delete destination records of where he/she has been.

## 👤Author Information ##  
**Name** : David Kamau   
**Email** : [davidkm.official@gmail.com]  
**GitHub** : DavidCreatives  

## ⚙️Setup Instructions ##
- Clone the repository  
  ` git clone https://github.com/DavidCreatives/Travel-Log-Website.git `  
- Navigate to the directory  
  ` cd Travel-Log-Website `
- Run the application  
  Open `index.html` in your preferred browser.  


## 🔁BDD(Behaviour Driven Development) ##
  | Scenario | Input | Expected Output |
  | :--- | :--- | :--- |
  | User leaves fields empty | [Submit Click] | Form triggers "Please fill in all fields" alert. |
  | User clicks delete on a specific destination created | `Delete` click | Form triggers confirmation "Are you sure you want to delete this entry?"|



## Tests using TDD ##
1. ***Test 1***
  **Test:** Creation of user  
  **Date and time:** 9.51PM, 13/02/2026  
  **Status:** ✅ Passed  
  **Code changes:** Creation of `travel` constructor  

2. ***Test 2 *** 
  **Test:** Creation of destination constructor and some prototypes(genId and add new destination)  
  **Date and time:** 10.57PM, 13/02/2026  
  **Status:** ✅ Passed  
  **Code changes:** Creation of `generateID()`, `addDestination()` prototypes  

3. ***Test 3***   
  **Test:** Create a function to delete destinations  
  **Date and time:** 11.20 PM, 13/02/2026  
  **Status:** ✅ Passed  
  **Code changes:** Creation of `deleteDestination()` prototype.  

4. *** Test 4  ***
  **Test:** Creating functionality of the submit button, displaying destinations, \
           deleting destinations and tweaking of some of the javascript logic.
  **Date and time:** 10.23 AM, 14/02/2026  
  **Status:** ✅ Passed  
  **Code changes:** Creation of `handleTravel()`, `displayDestinations()` and `deleteEntry()`.  

### Technologies Used
* **HTML5**: Page structure and input forms.
* **CSS3**: Layout styling and UI responsiveness.
* **JavaScript (ES6)**: Date validation logic and day-of-week algorithms.

### Contact Information
If you have questions or suggestions, feel free to contact me:
* **Email**: [davidkm.official@gmail.com]
* **GitHub**: [DavidCreatives]  

### License and Copyright
Copyright (c) 2024 **[DavidCreatives]**

Licensed under the [MIT License](https://github.com/DavidCreatives/Akan-Name-Generator/blob/main/LICENSE).
# Akan-Name-Generator