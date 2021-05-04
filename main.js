function openSlideMenu() {
  document.getElementById("menu").style.width = "250px";
  // document.getElementById("hover").style.cssText =
  //   "opacity: 1;  transition: 0.5s ease-in;";
  document.getElementById("hover").classList.add("show");
}
function closeSlideMenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("hover").classList.remove("show");
  // document.getElementById("hover").style.cssText = "opacity: 0;   ease-in;";
}
