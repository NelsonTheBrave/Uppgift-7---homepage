// CODE TO ENABLE POPUP-BOXES FOR EXPERIENCE SECTION

//Identify experience section and add event listener
const experience = document.querySelector("#experience");
experience.addEventListener("click", popupText);

//Function to handle popup boxes and arrow rotation
function popupText(e) {
  if (e.target.id !== "experience" && e.target.id !== "") {
    const popupBox = e.target.parentNode.querySelector(".popupBoxes");
    const arrow = e.target.parentNode.querySelector(".fa"); // Sorry, these lines are rather messy, I just couldn't find a good way to target the right things without also targeting unwanted things, so this became the result.

    //Toggle rotation of arrow
    arrow.classList.toggle("rotated");

    //Enable/disable visibility of popup text
    if (popupBox.style.display !== "block") {
      popupBox.style.display = "block";
    } else {
      popupBox.style.display = "none";
    }
  }
}
