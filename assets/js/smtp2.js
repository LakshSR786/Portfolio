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
        Username: "gongapursr@gmail.com",
        Password: "A46A90D7A658E16CC44833617B844662A127",
        To: 'Lakshsr786@gmail.com',
        From: "gongapursr@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => alert(message)
    );
}
