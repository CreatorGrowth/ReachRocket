const faqs=document.querySelectorAll(".faq-item");

faqs.forEach(faq=>{

const button=faq.querySelector(".faq-question");

button.addEventListener("click",()=>{

faq.classList.toggle("active");

const answer=faq.querySelector(".faq-answer");

const icon=button.querySelector("span");

if(faq.classList.contains("active")){

answer.style.maxHeight=answer.scrollHeight+"px";

icon.textContent="−";

}else{

answer.style.maxHeight=0;

icon.textContent="+";

}

});

});

const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

document.querySelectorAll(".faq-item").forEach(item=>{

item.style.display=item.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

});