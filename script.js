
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("Email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

document.getElementById("fname").classList.remove("field-error");
document.getElementById("Email").classList.remove("field-error");
document.getElementById("message").classList.remove("field-error");


    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        document.getElementById("fname").classList.add("field-error");
        isValid = false;
    }
if (email === "") {
    emailError.textContent = "Please enter your email address.";
    document.getElementById("Email").classList.add("field-error");
    isValid = false;
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    document.getElementById("Email").classList.add("field-error");
    isValid = false;
}
if (message === "") {
    messageError.textContent = "Please enter a message.";
    document.getElementById("message").classList.add("field-error");
    isValid = false;
}
    if (isValid) {
        alert("Thank you for contacting Maison de Sucre!");
        contactForm.reset();
    }
});

