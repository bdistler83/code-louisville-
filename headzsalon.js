/* --- Element Form --- */

var x = document.getElementById("eform");
var createform = document.createElement('form'); 
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post"); 
x.appendChild(createform);

/* --- Heading of email form --- */

var heading = document.createElement('h2'); 
heading.innerHTML = "Ask Us A Question";
createform.appendChild(heading);

/* --- Making the horizontal rows for the form */

var line = document.createElement('hr'); 
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

/* --- Name field --- */

var namelabel = document.createElement('label'); 
namelabel.innerHTML = "Name : "; 
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); 
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

/* --- Email field --- */ 

var emaillabel = document.createElement('label'); 
emaillabel.innerHTML = "Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); 
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('mlabel'); 
messagelabel.innerHTML = "Message : ";
createform.appendChild(messagelabel);

/* --- Message field --- */

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

/* --- Submit button --- */

var submitelement = document.createElement('input');
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Send");
createform.appendChild(submitelement);


