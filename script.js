document.addEventListener("DOMContentLoaded", ()=>{
// const h6 = document.createElement("h6");
// h6.textContent = "copyrightsreserved@MildredChepkoech";
// document.querySelector("body").appendChild(h6);


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
 

const likeCount = document.querySelector("#like-count")
let likes;



const likesbutton = document.querySelector('#like_button').addEventListener('click', ()=>{
    likes += 1
    addLikes()
})

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
  function addLikes() {
    likeCount.textContent = `${likes} likes`;
  }
