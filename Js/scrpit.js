
function slideUp(mssg) {
  var elem = document.getElementById(mssg);
  elem.style.transition = "all .5s ease-in-out";
  elem.style.height = "0px";
}
function slideDown(mssg) {
  var elem = document.getElementById(mssg);
  elem.style.transition=' all 0.5s ease-in-out';
  elem.style.height = "150px";
  
}
function check(){
  alpha=/^[A-Za-z]+$/;
  num = /[^0-9]/;

  
//Fname
var a=document.getElementById("Fn").value;
if (a.length<3 || !(a.match(alpha))){
    alert('Please enter a valid First name, it cannot contain any numbers or symbols.');
    return false;
}
//last name
var x=document.getElementById("Ln").value;
if (x.length<3 || !(x.match(alpha))){
    alert('Please enter a valid Last name, it cannot contain any numbers or symbols.')
    return false;
}
//age
var z=document.getElementById("age");
if (parseInt(z.value)<2 || (z.value.match(alpha)) || (z.value.length)<1) {
  alert('Please enter a valid age!!!!');
  return false;
}
//email
m=document.getElementById('mail');
if ((m.value.length<0) || (m.value.length>50) || (m.indexOf("@")>m.lastIndexOf(".")) || (m.indexOf("@")==-1)) {
    alert('Please enter a valid e-mail, containing (@exmpl.., .exm)');
    return false;
  }
}
