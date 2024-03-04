/**
  * Abbreviations Used:
  * bmr   Basal Metabolic Rate              pal   Physical Activity Level
  * tdee  Total Daily Energy Expenditure    tdci  Total Daily Caloric Intake
  * debd  Daily Energy Balance Delta
*/

// initialize array with hard coded data ********************************************************** START

let energyBalanceArray = [];

// define energyBalance object constructor
let energyBalanceObject = function (pentryDate, pgender, page, pheight, pweight, pbmr, ppal, ptdee, pproteinCalories, pcarboCalories, pfatCalories, ptdci, pdebd) {

    this.entryDate = pentryDate;
    this.gender = pgender;
    this.ID = Math.floor(Math.random()*500) + 1;
    this.age = page;
    this.height = pheight;
    this.weight = pweight;
    this.bmr = pbmr;
    this.ppal = ppal;
    this.tdee = ptdee;
    this.proteinCalories = pproteinCalories;
    this.carboCalories = pcarboCalories;
    this.fatCalories = pfatCalories;
    this.tdci = ptdci;
    this.debd = pdebd;
}

// push energyBalanceObjects into the array   
//                                                                 ^Age         ^BMR             ^ProCal           ^TDCI
//                                                         ^Gender |       ^Weight         ^TDEE |           ^FatCal
//                                              ^EntryDate |       |   ^Height  |     ^PAL |     |     ^CarbCal    |     ^DEBD
//                                              |          |       |   |   |    |     |    |     |     |     |     |     |
energyBalanceArray.push(new energyBalanceObject(02/20/24, "Woman", 20, 67, 160, 1582, 2.5, 3955, 1215, 1550, 1090, 3855, -100));
energyBalanceArray.push(new energyBalanceObject(02/21/24, "Woman", 30, 66, 165, 1552, 2.2, 3725, 1103, 1470, 1101, 3675, 260));
energyBalanceArray.push(new energyBalanceObject(02/22/24, "Woman", 40, 66, 170, 1527, 2.0, 3053, 931, 1241, 931, 3103, 50));
energyBalanceArray.push(new energyBalanceObject(02/23/24, "Woman", 50, 65, 175, 1497, 1.8, 2694, 900, 994, 900, 2794, 100));
energyBalanceArray.push(new energyBalanceObject(02/24/24, "Woman", 60, 65, 164, 1402, 1.8, 2243, 733, 977, 733, 2443, -80));
energyBalanceArray.push(new energyBalanceObject(02/25/24, "Woman", 70, 63, 162, 1337, 1.5, 2005, 677, 902, 676, 2255, 250));


// initialize array with hard coded data ********************************************************** END

// initialize drop-down input variables
let selectedpal = "not selected";
// let selected-gender = "not selected";


// wait for "DOMContentLoaded" event ************************************************************** START
document.addEventListener("DOMContentLoaded", function () {

  // user induced events **************************************************************** START  
  // if a "entry-add" button CLICK event occurs ******************************* START
  document.getElementById("entry-add").addEventListener("click", function () {
    
    // get the date of the entry ************************************ START
    const selectedDate = new Date(document.getElementById("selected-date").value);
    const yyyy = selectedDate.getFullYear();
    let mm = selectedDate.getMonth() + 1;
    let dd = selectedDate.getDate() + 1;
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const entryDate = mm + '/' + dd + '/' + yyyy;
    console.log(entryDate);
    // get the date of the entry ************************************ END
    
    // push data from user into object *** partially commented out ** START
    energyBalanceArray.push(new energyBalanceObject(
      entryDate,                                       // date selected by user reformatted via Date object  
      document.getElementById("selected-pal").value,   // PAL selected get "year" from text input
/*
      selectedGenre,                                     // get "genre" from a select option drop down menu
      document.getElementById("man").value,               // get "man" from text input
      document.getElementById("woman").value,         // get "woman" from text input

      // ??? if this is "ID", shouldn't it be the 1st item in the push above ... before "title"? 
      movieArray.length,
*/      
    ));
    // push data from user into object *** partially commented out ** END

    //> forces a re-direct to the line of code in index.html that contains  id = "ListAll"
    // document.location.href = "index.html#ListAll"; 
  });
  // if a "entry-add" button CLICK event occurs ******************************* END

  // "buttonClear" CLICK event ************************************** commented out ***** START
/*  
  document.getElementById("buttonClear").addEventListener("click", function () {
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("man").value = "";
    document.getElementById("woman").value = "";
  });
*/  
  // "buttonClear" CLICK event ************************************** commented out ***** END

  // if a "select-genre" CHANGE event occurs ************************ commented out ***** START
/*  
  \* KB entry
    ~ A "change" event occurs when the value of the an <input>, <textarea>, or <select> element has been changed.
    ~ For <select> menus, the change event occurs when an option is selected.
    ~ An event creates an event object that is specific to the type of event that occurred but 
    there are global event object properties and attributes such as event.target.
    ~ event.target provides information about the element that changed  and raises the "change" event flag.
        event.target.id                   returns the id of the target element [a key]
        event.target.value             returns “value” of the target element [a value]
  *\

  \* KB entry
      When an option in the "select-genre" drop down menu is selected, a "change" event occurs
      and it is attributed to the <select> element with the of id="select-genre".
      The value of "select-genre" at that point in time is the genre that was selected.
      The selected genre is stored in a variable for later use.
  *\

  // HTML 5 implementation (IS USED)
  document.addEventListener("change", function(event) {
    if (event.target.id === "select-genre") {
      selectedGenre = event.target.value;
    }
  });
*/  
  // if a "select-genre" CHANGE event occurs ************************ commented out ***** END

  // "page before show code" **************************************** commented out ***** START
/*   
  $(document).on("pagebeforeshow", "#ListAll", function (event) {   // have to use jQuery 
      createList();
  });

  // need one for our details page to fill in the info based on the passed in ID
  $(document).on("pagebeforeshow", "#details", function (event) {  
  
    let localID = localStorage.getItem('parm');  // get the unique key back from the dictionairy

    // next step to avoid bug in jQuery Mobile,  force the movie array to be current
    movieArray = JSON.parse(localStorage.getItem('movieArray'));  

    console.log(movieArray[localID - 1]);
   
    document.getElementById("oneTitle").innerHTML = "The title is: " + movieArray[localID - 1].Title;
    document.getElementById("oneYear").innerHTML = "Year released: " + movieArray[localID - 1].Year;
    document.getElementById("oneGenre").innerHTML = "Genre: " + movieArray[localID - 1].Genre;
    document.getElementById("oneWoman").innerHTML = "Leading Woman: " + movieArray[localID - 1].Woman;
    document.getElementById("oneMan").innerHTML = "Leading Man: " + movieArray[localID - 1].Man;
  });
*/ 
  // "page before show code" **************************************** commented out ***** END

});  
// wait for "DOMContentLoaded" event ************************************************************** END


// func createList() ************************************************ commented out *************** START
/*
function createList() {
  // clear prior data
  let myUL =document.getElementById("MovieListul");
  myUL.innerHTML = "";
   
  movieArray.forEach(function (oneMovie,) {   // use handy array forEach method
    var myLi = document.createElement('li');
    // adding a class name to each one as a way of creating a collection
    myLi.classList.add('oneMovie'); 
    // use the html5 "data-parm" to encode the ID of this particular data object
    // that we are building an li from
    myLi.setAttribute("data-parm", oneMovie.ID);
    myLi.innerHTML = oneMovie.ID + ":  " + oneMovie.Title + "  " + oneMovie.Genre;
    myUL.appendChild(myLi);
  });
 
  // now we have the HTML done to display out list, 
  // next we make them active buttons
  // set up an event for each new li item, 
  var liList = document.getElementsByClassName("oneMovie");
  let newMoviewArray = Array.from(liList);
  
  newMoviewArray.forEach(function (element) {
    
    element.addEventListener('click', function () {
      
      // get that data-parm we added for THIS particular li as we loop thru them
      var parm = this.getAttribute("data-parm");  // passing in the record.Id
      // get our hidden <p> and save THIS ID value in the localStorage "dictionairy"
      localStorage.setItem('parm', parm);
     
      // but also, to get around a "bug" in jQuery Mobile, take a snapshot of the
      // current movie array and save it to localStorage as well.
      let stringMovieArray = JSON.stringify(movieArray); // convert array to "string"
      localStorage.setItem('movieArray', stringMovieArray);
      
      // now jump to our page that will use that one item
      document.location.href = "index.html#details";
      
    });
    
  });

};
*/ 
// func createList() ************************************************ commented out *************** END


