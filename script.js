const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitButton = document.getElementById("submitButton");
const finalSubmitButton = document.getElementById("finalSubmitButton");

const frame1 = document.getElementById("frame1");
const frame2 = document.getElementById("frame2");

let isEmailValid = false;
let isPasswordValid = false;


const successMessage = document.createElement("div");
successMessage.className = "success hidden";
successMessage.textContent = "All good to go!";
passwordError.parentNode.insertBefore(successMessage, passwordError.nextSibling);


function validateEmail() {
  const email = emailInput.value;
  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    emailError.textContent = "";
    isEmailValid = true;
  } else {
    emailError.textContent = "Make sure email is more than 3 characters and has @ and a.";
    isEmailValid = false;
  }
  updateSuccessMessage();
}


function validatePassword() {
  const password = passwordInput.value;
  if (password.length > 8) {
    passwordError.textContent = "";
    isPasswordValid = true;
  } else {
    passwordError.textContent = "Make sure password is more than 8 characters.";
    isPasswordValid = false;
  }
  updateSuccessMessage();
}


function updateSuccessMessage() {
  if (isEmailValid && isPasswordValid) {
    successMessage.classList.remove("hidden");
  } else {
    successMessage.classList.add("hidden");
  }
}


emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);


submitButton.addEventListener("click", (e) => {
  e.preventDefault(); 

  
  validateEmail();
  validatePassword();

  if (isEmailValid && isPasswordValid) {
    frame1.classList.add("hidden");
    frame2.classList.remove("hidden"); 
    frame2.querySelector("#finalEmail").value = emailInput.value;
    frame2.querySelector("#finalPassword").value = passwordInput.value;
  } else {
    alert("Please fix the errors before submitting.");
    clearInputs();
  }
});


function clearInputs() {
  emailInput.value = "";
  passwordInput.value = "";
}

finalSubmitButton.addEventListener("click", () => {
  if (confirm("Do you want to submit?")) {
    alert("Successful signup!");
    window.location.reload(); 
  }
});
