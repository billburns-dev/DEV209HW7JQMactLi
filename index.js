// initialize array with hard coded data ******************************************************** START
let energyBalArray = [];

// define energyBal object constructor

let energyBalObject = function (pID, pEntryDate, pGender, pAge, pHeight, pWeight, pBMR, pPAL, pTDEE, pProCal, pCarbCal, pFatCal, pTDCI, pDEBD) {
    this.ID = pID; 
    this.EntryDate = pEntryDate; 
    this.Gender = pGender; 
    this.ID = energyBalArray.length + 1; 
    this.Age = pAge; 
    this.Height = pHeight; 
    this.Weight = pWeight; 
    this.BMR = pBMR; 
    this.PAL = pPAL; 
    this.TDEE = pTDEE; 
    this.ProCal = pProCal; 
    this.CarbCal = pCarbCal; 
    this.FatCal = pFatCal; 
    this.TDCI = pTDCI; 
    this.DEBD = pDEBD;
    }



// manually initialize movieArray with 4 items
movieArray.push(new MovieObject(1,"Moonstruck", 1981, "Drama", "Nicholas Cage", "Cher", "https://www.youtube.com/watch?v=M01_2CKL6PU"));
movieArray.push(new MovieObject(2, "Wild At Heart", 1982, "Drama", "Nicholas Cage", "Laura VanDern", "https://www.youtube.com/watch?v=7uRJartX79Q"));
movieArray.push(new MovieObject(3, "Raising Arizona", 1983, "Comedy", "Nicholas Cage", "Holly Hunter", "https://www.youtube.com/watch?v=NoXJKArYi1g"));
movieArray.push(new MovieObject(4, "USS Indianapolis: Men of Courage", 2016, "Drama", "Nicholas Cage", "Emily Tennant", "https://youtu.be/ZDPE-NronKk"));

// initialize array with hard coded data ******************************************************** END


let selectedGenre = "not selected";

// wait for "DOMContentLoaded" event ******************************************************* START
document.addEventListener("DOMContentLoaded", function () {

   // createList();

// blocks of code tied to the occurrence of one or more events *********************** START

  // if a "buttonAdd" CLICK event occurs ****************************************** START
    /*
    On buttonAdd click (i.e., "Click To Add Movie" button is clicked), 
    a new movie is added to movieArray.
    MovieObject is used as a template when storing data into the movieArray.
    The source of data is the user input from the "Add a Movie" page.
    */
    document.getElementById("buttonAdd").addEventListener("click", function () {
      movieArray.push(new MovieObject(
        document.getElementById("title").value,                // get "title" from text input
        document.getElementById("year").value,               // get "year" from text input
        selectedGenre,                                                              // get "genre" from a select option drop down menu
        document.getElementById("man").value,               // get "man" from text input
        document.getElementById("woman").value,         // get "woman" from text input

        // ???  NEED TO FIGURE THIS OUT!!!   ???               if this is "ID", shouldn't it be the 1st item in the push above ... before "title"? 
        movieArray.length,

      ));
      //> forces a re-direct to the line of code in index.html that contains     id = "ListAll"
      document.location.href = "index.html#ListAll"; 
    });
  // if a "buttonAdd" CLICK event occurs ****************************************** END

  // "buttonClear" CLICK event ***************************************************** START
    /*
    On buttonClear click (i.e., "Clear Data" button is clicked),
    clear the values currently displayed on the "Add a Movie" page.
    */
    document.getElementById("buttonClear").addEventListener("click", function () {
      document.getElementById("title").value = "";
      document.getElementById("year").value = "";
      document.getElementById("man").value = "";
      document.getElementById("woman").value = "";
    });
  // "buttonClear" CLICK event ***************************************************** END

  // if a "select-genre" CHANGE event occurs ************************************* START
  
    /* KB entry
      ~ A "change" event occurs when the value of the an <input>, <textarea>, or <select> element has been changed.
      ~ For <select> menus, the change event occurs when an option is selected.
      ~ An event creates an event object that is specific to the type of event that occurred but 
      there are global event object properties and attributes such as event.target.
      ~ event.target provides information about the element that changed  and raises the "change" event flag.
          event.target.id                   returns the id of the target element [a key]
          event.target.value             returns “value” of the target element [a value]
    */

    /*
      When an option in the "select-genre" drop down menu is selected, a "change" event occurs
      and it is attributed to the <select> element with the of id="select-genre".
      The value of "select-genre" at that point in time is the genre that was selected.
      The selected genre is stored in a variable for later use.
    */

    // HTML 5 implementation (IS USED)
    document.addEventListener("change", function(event) {
      if (event.target.id === "select-genre") {
        selectedGenre = event.target.value;
      }
    });
  // if a "select-genre" CHANGE event occurs ************************************* END


// blocks of code tied to the occurrence of one or more events *********************** END

  
  
// page before show code *************************************************************************
    // page before show code *************************************************************************
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
 
// end of page before show code *************************************************************************

});  
// end of wait until document has loaded event *************************************************************************
// wait for "DOMContentLoaded" event ************************** END

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
  

