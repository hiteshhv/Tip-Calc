function calculateTip () {
 var billAmt = document.getElementById("billamt").value;
 var serviceQual = document.getElementById("serviceQual").value;
 var numberOfPeople = document.getElementById("peopleamt").value;
if (billAmt === "" || serviceQual == 0){
 alert("Please enter the values");
 return;
}
if (numberOfPeople === "" || numberOfPeople <= 1){
 numberOfPeople = 1;
 document.getElementsById("each").style.display = "none";
}
else {
 document.getElementById("each").style.display = "block";
}
// calculation
var total = (billAmt * serviceQual) / numberOfPeople;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);

document.getElementById("totaltip").style.display = "block";
document.getElementById("tip").innerHTML = total;
}
//document.getElementById("totaltip").style.display = "none";
//document.getElementById(each).style.display = "none";


function changeBodyBg(color){
    document.body.style.background = color;
}

function changeHeadingBg(color){
    document.getElementById("calculate").style.background = color;
}

document.getElementById("calculate").addEventListner("onclick",
  function () {
  }
)


document.getElementById("calculate").onclick = function () {
 calculateTip();
};
