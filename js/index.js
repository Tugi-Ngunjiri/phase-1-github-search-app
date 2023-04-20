document.addEventListener("DOMContentLoaded", () =>{
  const form =document.querySelector('form');
  form.addEventListener('submit', (e) => {
 e.preventDefault();

const searchTerm = form.querySelector('input').value;

 fetch("https://api.github.com/search/users?q=" +searchTerm)
  .then(res => res.json())
  .then( data => {
    console.log(data);

    users.forEach(user => {
    user.classList.add("col-md-3");
      user.innerHTML = ` <div class="card mb-4" style="width: 18rem;">
                                  <img src=${user.text} class="card-img-top" alt="">
                                  <div class="user-body">
                                    <h5 class="user-title">${user.title}</h5>
                                   <p class="user-text">${user.description}</p>
                                  </div>
                                </div>`
      userContent.appendChild(userContent);

      });
  
      
  })
 
  

  });
  
   })



