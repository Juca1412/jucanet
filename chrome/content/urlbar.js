function Login(form) {
var urlbar = form.urlbar.value;
if (urlbar) {
var site = "http://" + urlbar; document.getElementById('browser-content').loadURI(site);}
}