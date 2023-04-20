document.addEventListener("DOMContentLoaded", () =>{
  const form =document.querySelector('form');
  form.addEventListener('submit', (e) => {
 e.preventDefault();

const searchTerm = form.querySelector('input').value;

 fetch("https://api.github.com/search/users?q=" +searchTerm)
  .then(res => res.json())
  .then( data => {
    console.log(data);

     const users = data.items;
     let  UserA = Jane;
     let UserB=  Peter;
     let Users = Peter + Jane;

    users.forEach(user => {
    user.classList.add("col-md-3");
      user.innerHTML = ` <div>
                             <img src=${user.img} class="user-img-top" alt="">
                              <div class="user-name">${user.login}</div>
                               <p class="user-text">${user.description}</p>
                          </div>
                                </div>`
      userContent.appendChild(userContent);

      });
  
      
  })
 
  

  });
  
   })



