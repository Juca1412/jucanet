function Login(form) {
var urlbar = form.urlbar.value;
if (urlbar) {
var site = "http://" + urlbar; window.location = site;}
else {alert("Please enter your adress");}}