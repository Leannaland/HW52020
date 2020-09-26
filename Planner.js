
//*** DATES **//
// setting contants for the days of week and the months of the year
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Block Scope pulls current day of week
let dayIndex = moment().day();
let day = days[dayIndex];
// Block Scope pulls current month of year
let monthIndex = moment().month();
let month = months[monthIndex];
// Block Scope pulls current day of month
let date = moment().date();

// combined blocks to display dates 
{
let today = day + month + date;
$ ("#currentDay").text(today);
}

$(".saveBtn").on("click"), function(){
    // PULL VALUE FROM THE TEXT AREA OF CHOSE SAVE BUTTON"
   // var value = ;
     /// Pull the id of the  clicked  element to serve the id 
  //  var time = ;
    /// this is where you will save the data to local sroage 
    logalStorage.setitem()

}