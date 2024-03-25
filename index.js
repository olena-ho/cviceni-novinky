const bodyElement = document.querySelector("body");
bodyElement.style.backgroundColor = "#e9e9e9";

const news = document.querySelector(".news");
news.style.backgroundColor = "white";
news.style.maxWidth = "60rem";

document.querySelector("h1").classList.add("news__title");
document.querySelector(".news__title").textContent = "Aktuální novinky"

document.getElementById("zprava1").classList.add("post--main");

const imgElement = document.querySelector("#zprava3 img");
imgElement.src = 'images/zprava3-novy.jpg';
imgElement.alt = 'delnik'; 
