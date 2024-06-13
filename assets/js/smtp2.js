function sendemail() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("Email").value;
    var contact = document.getElementById("Contact").value;
    var subject = document.getElementById("Subject").value;
    var message = document.getElementById("Message").value;

    var body = "First Name: " + firstname + "<br/> Last Name: " + lastname + "<br/> Email: " + email + "<br/> Contact Number: " + contact + "<br/> Subject: " + subject + "<br/> Message: " + message;
    console.log(body);
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "nondonpursr@gmail.com",
        Password: "8AE7B79E506766A124E9ABAE82C8CD45E0B8",
        To: 'Luxmipursr@gmail.com',
        From: "nondonpursr@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => alert(message + ", your message successfully sent")
    );
}