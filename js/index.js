document.addEventListener("DOMContentLoaded", () =>{
  const form =document.querySelector('form');
  form.addEventListener('submit', (e) => {
 e.preventDefault();

const searchTerm = form.querySelector('input').value;

 fetch("https://api.github.com/search/users?q=" +searchTerm)
  .then(res => res.json())
  .then( data => {
    console.log(data);
;

    users.forEach(userDiv => {
    userDiv.innerHTML = ` <div>
                             <img src=${user.avatar_url} class="user-img-top" alt="">
                              <p class="user-name">${user.login}</p>
                    <a href="https://developer.github.com/v3/search/#search-users"></a>`
      userContent.appendChild(userDiv);

      });
  
      
  })
 
  

  });
  
   })



