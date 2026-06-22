const reviews=document.querySelectorAll(".review");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

reviews.forEach(review=>observer.observe(review));
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;
const count=+counter.innerText;

const increment=target/150;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,15);

}else{

counter.innerText=target.toLocaleString()+"+";

}

}

update();

});