const registrationForm = document.getElementById("registrationForm");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const containerDiv = document.getElementById("containerDiv");

let isRegistrationFormOpen = false;
let isFormRendered = false;

let generatedDiv = null;

registerBtn.addEventListener("click", () => {
  isRegistrationFormOpen = !isRegistrationFormOpen;

  //Inline styles exist, but it is better not to use them
  //registrationForm.style.display = isRegistrationFormOpen ? "block" : "none";

  registrationForm.classList.toggle("hiddenAll");

  setTimeout(function () {
    registrationForm.classList.toggle("hidden");
  }, 20);
});

loginBtn.addEventListener("click", () => {
  //the first time a button is clicked, render the login form
  if (!isFormRendered) containerDiv.appendChild(generateOverlayDiv());
  generatedDiv = document.getElementById("loginOverlay");
  generatedDiv.classList.add("block");
  generatedDiv.classList.remove("hiddenAll");
  generatedDiv.addEventListener("click", () => {
    generatedDiv.classList.remove("block");
    generatedDiv.classList.add("hiddenAll");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      generatedDiv.classList.remove("block");
      generatedDiv.classList.add("hiddenAll");
    }
  });
});

function generateOverlayDiv() {
  isFormRendered = true;
  let overlayDiv = document.createElement("div");
  overlayDiv.setAttribute("id", "loginOverlay");
  overlayDiv.classList.add("overlay");

  let loginInput = document.createElement("input");
  loginInput.setAttribute("id", "overlayLogin");
  loginInput.classList.add("form-label", "form-control");

  let pswInput = document.createElement("input");
  pswInput.setAttribute("id", "overlayPsw");
  pswInput.classList.add("form-label", "form-control");

  overlayDiv.appendChild(
    document
      .createElement("div")
      .appendChild(document.createElement("div").appendChild(loginInput))
  );

  overlayDiv.appendChild(
    document
      .createElement("div")
      .appendChild(document.createElement("div").appendChild(pswInput))
  );
  //console.log(overlayDiv);

  return overlayDiv;
}
document.getElementById('regForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from being submitted

  if (this.checkValidity()) {
    alert('Submission was successful.');
  } else {
    alert('Please fill out all required fields.');
    this.reportValidity(); // Highlight invalid fields
  }
});
