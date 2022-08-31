document.addEventListener("DOMContentLoaded", ()=>{
const h5 = document.createElement("h5");
h5.textContent = "copyrightsreserved@Ducks.com";
document.querySelector("body").appendChild(h5);


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


let likeCount = document.querySelector("#like-count")
let likes;

let likesbutton = document.querySelector('#like-button').addEventListener('click', ()=>{
  likes = 0;
  likes += 1;
    addLikes();
});

function addLikes() {
  likeCount.textContent = `${likes} likes`;
}



const commentsList = document.querySelector('#comments-list')
let  form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    showComment(e.target.comment.value)
    form.reset()
})




function showComment(comment) {
    console.log(comment);
    const p  = document.createElement("p");
    let btn = document.createElement('button')
    btn.addEventListener('click', deleteHandle)
      btn.textContent = 'delete'
      p.textContent = `${comment}`
    p.appendChild(btn)
    commentsList.append(p);
  }
  
   function deleteHandle(e){
      e.target.parentNode.remove()
   }
 