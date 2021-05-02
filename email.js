const contactUsForm = document.getElementById("form-contact-us");
contactUsForm.addEventListener("submit", event => {
    event.preventDefault();
    this.sendEmail(contactUsForm);
});

function sendEmail(contactUsForm) {

    const body = {
        name: contactUsForm.name.value,
        email: contactUsForm.email.value,
        phoneNumber: contactUsForm.phone.value,
        message: contactUsForm.message.value
    }

    Email.send({
        Host: "smtp.gmail.com",
        Username: "shivutomar790@gmail.com",
        Password: "Shiva@1997",
        To: 'shiva@datability.co',
        From: "shivutomar790@gmail.com",
        Subject: `New mail recieved from contact us form from ${body.name}`,
        Body: body
    }).then(
        message => alert(message)
    );
}
