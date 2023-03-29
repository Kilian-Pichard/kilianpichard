import L from 'leaflet';

var contact = L.map('map', {tap:false, scrollWheelZoom:false}).setView([46.15978240966797, -1.151965856552124], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(contact);

L.marker([46.15978240966797, -1.151965856552124]).addTo(contact)

function sendEmail(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const company = form.elements.company.value;
    const message = form.elements.message.value;

    const mail_subject = "Subject"; // Replace with your own subject
    const templateParams = {
        mail_subject,
        to: email,
        name,
        phone,
        company,
        message,
    };

    // Mail to user
    /*emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID").then(
        (response) => {
            document.querySelector(".submit-button").value = "Submit";
            document.querySelector(".confirmation_message").textContent = "Thank you for your message!";
            form.elements.name.value = "";
            form.elements.email.value = "";
            form.elements.phone.value = "";
            form.elements.company.value = "";
            form.elements.message.value = "";
        },
        (error) => {
            console.log("FAILED...", error);
            document.querySelector(".submit-button").value = "Submit";
            document.querySelector(".confirmation_message").textContent = "Sorry, an error occurred. Please try again later.";
        }
    );*/

    document.querySelector(".submit-button").value = "Sending...";
    setTimeout(() => {
        document.querySelector(".confirmation_message").textContent = "";
    }, 60000);
}
