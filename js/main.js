/**
 * Project 5 - Refactored Javascript for access of visitor form
 */
// Visitor Form
document.addEventListener("DOMContentLoaded", function(event) {
  const logVisitLink = document.getElementById("log-visit");
  const formContainer = document.getElementById("visitor-form-container");

  logVisitLink.addEventListener("click", function() {
      formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
  });
});



// click action for About Me Section

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
