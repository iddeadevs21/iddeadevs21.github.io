function sendEmail(name, email, phone, message) {
	Email.send({
        Host: "smtp.gmail.com",
        Username : "iddeadevs.services@gmail.com",
        Password : "Cartagena7081",
        To : 'iddeadevs.services@gmail.com',
        From : email,
        Subject : "Iddeadevs web contact",
        Body : name + " " + phone + " " + message,
	}).then(
		message => {
            alert("Mensaje enviado!");
            var form = document.getElementById("contact_form");
            form.reset();
        }
	);
}

var submit_contact_form = function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phoneNumber").value;
    var message = document.getElementById("message").value;
    sendEmail(name, email, phone, message);
};

// your form
var form = document.getElementById("contact_form");

// attach event listener
form.addEventListener("submit", submit_contact_form, true);