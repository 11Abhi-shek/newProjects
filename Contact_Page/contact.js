//  sendEmail function is triggered when it calls by the onSubmit inside the form tag
//Inside the function using the Email.send function to send an email.
// using some external email service named Elastic Email to send the mail
//In the SMTP server host user name and password is used
//The email is being sent to the address specified in the (To) field and being sent from (From) field email address 
// Subject and Body will display in the mail accordingly and there is a alert message after submit
function sendEmail()  
{
    console.log("working!!!");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abhi.abhishek11jul@gmail.com",
        Password : "B402CAE643D86F92163A9478866F008CA72A",
        To : 'abhishekaishwarya828@gmail.com',
        From : 'aishwaryaabhishek.cse.@skit.org.in',
        Subject : "For Enquiry purpose",
        Body : "Name:"+ document.getElementById("name").value
              + "<br>Email:" +document.getElementById("email").value
              + "<br>Phone No:" +document.getElementById("phone").value
              + "<br>Message:" +document.getElementById("textarea").value
    }).then(
      message => alert("Infromation provide successfully"));
}


