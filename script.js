document.querySelectorAll("button")[0].addEventListener("click",function(){
  var a = document.querySelectorAll("input")[0].value;
  var b = document.querySelectorAll("input")[1].value;
  var bmi = (a / (b**2)).toFixed(1);
  status(bmi);
});

document.querySelectorAll("button")[1].addEventListener("click", function(){
  return document.querySelectorAll("input")[0].value = "", document.querySelectorAll("input")[1].value = "", document.querySelectorAll("h1")[0].textContent = "",document.querySelectorAll("h1")[1].textContent = "";
});
function status(bmi){
    console.log(bmi);
    if(bmi < 18.5){
      return document.querySelectorAll("h1")[1].innerHTML ="you are in the under weight range", document.querySelectorAll("h1")[0].innerHTML = "your body mass index is "+bmi;
      }
    else if (bmi >= 18.5 && bmi <= 24.9){
      return document.querySelectorAll("h1")[1].innerHTML ="you are in the healthy weight range", document.querySelectorAll("h1")[0].innerHTML = "your body mass index is "+bmi;
    }
    else if (bmi > 25 && bmi <= 29.9){
      return document.querySelectorAll("h1")[1].innerHTML ="you are in the over weight range",document.querySelectorAll("h1")[0].innerHTML = "your body mass index is "+bmi;
  }
    else if (bmi >= 30){
      return document.querySelectorAll("h1")[1].innerHTML ="you are in the obese range", document.querySelectorAll("h1")[0].innerHTML = "your body mass index is "+bmi;
  }
      return "default"+ bmi;
};
