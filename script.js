document.addEventListener("DOMContentLoaded", ()=>{
const h5 = document.createElement("h5");
h5.textContent = "copyrightsreserved@Ducks.com";
document.querySelector("body").appendChild(h5);

//fetches image and displays it
    fetch("https://random-d.uk/api/random")
     
    .then(resp => resp.json())
    .then(data => displayDuckImage(data))
  function displayDuckImage(data){
    console.log(data)
    const cardImage =document.querySelector('#card-image')
    cardImage.src = data.url
  } 
  let count = 1;
const likebutton =document.querySelector("#like-button").addEventListener('click', ()=>{
  count += 1;
  addLikes();
})
const likeCount = document.querySelector("#like-count")
function addLikes(){
  likeCount.textContent = `${count} likes`
}
// const countSpan = document.querySelector("#like-count")

//  const count = 1

//  likebutton.addEventListener("click", ()=>{
//   console.log(likebutton)
 
//   // count += 1;
//   // countSpan.innerHTML = count
//  })

// const likeCount = document.querySelector("#like-count")
// let likes;

// document.querySelector('#like-button').addEventListener('click', ()=>{
//   likes = 0;
//   likes ++;
//   addLikes()
// })
  
// function addLikes() {
  
//   likeCount.textContent = `${likes} likes`;
// }


//selects the form and in it we create a <p> tag and append it to the comments list
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
  //deletes a comment
   function deleteHandle(e){
      e.target.parentNode.remove()
   }
  })