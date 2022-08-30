document.addEventListener("DOMContentLoaded", ()=>{
const h6 = document.createElement("h6");
h6.textContent = "copyrightsreserved@MildredChepkoech";
document.querySelector("body").appendChild(h6);

    fetch("https://random-d.uk/api/random")//, {
     //mode: 'cors'   
   // })
    .then(resp => resp.json())
    .then(data => displayDuckImage(data))
  function displayDuckImage(data){
    console.log(data)
    const cardImage =document.querySelector('#card-image')
    cardImage.src = data.url
  } 
})