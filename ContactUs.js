function formInteract() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;


    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>First Name: ${firstName}</p>
                           <p>Last Name: ${lastName}</p>
                           <p>Email: ${email}</p>
                           <p>Comments: ${comments}</p>`;


}