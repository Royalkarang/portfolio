// const spans= document.querySelectorAll('progress-bar span');

// spans.forEach((span) => {
//     span.style.width = span.dataset.width;
//     span.innerHTML = span.dataset.width;
// });

const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Web-Developer";
            }, 1000);
            setTimeout(() => {
                text.textContent = "Fronted Developer";
            }, 4000);
            // setTimeout(() => {
            //     text.textContent = "Good Problem Solver";
            // }, 6000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);
        var typed = new Typed(".text sec-text", {
            strings: ["Fronted-Developer", "Backend Developer", "Full Stack Developer"],
            typeSpeed: 150, backSpeed: 150, loop: true
        })
function sendEmail() {
    Email.send({
    SecureToken:'5fbe7a64-458b-4867-829b-8936fc5a3fd9',
    To: 'karanlaptop1@gmail.com',
    From: 'Royalkarang@gmail.com',
    Subject: "New contact form Enquiry",
    Body:'Name='+ document.getElementById('name').value+
        '<br/> Number='+document.getElementById('Phone').value+
        ' <br/>Email='+ document.getElementById('email').value+
        '<br/>Message='+ document.getElementById('message').value,
        }).then(
      message => alert(message)
        );
      }