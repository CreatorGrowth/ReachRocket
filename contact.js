const form = document.getElementById("contactForm");

const result = document.getElementById("result");

const button = document.getElementById("submitBtn");

form.addEventListener("submit", async function(e){

e.preventDefault();

button.innerHTML = "Sending...";

const formData = new FormData(form);

const response = await fetch(
"https://api.web3forms.com/submit",
{
method:"POST",
body:formData
}
);

const data = await response.json();

if(data.success){

result.style.color="#22c55e";

result.innerHTML="Message sent successfully.";

form.reset();

}else{

result.style.color="#ef4444";

result.innerHTML="Unable to send message.";

}

button.innerHTML="Send Message";

});