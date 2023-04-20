document.addEventListener("DOMContentLoaded", () =>{
  const form =document.querySelector('form');
  form.addEventListener('submit', (e) => {
 e.preventDefault();

const searchTerm = form.querySelector('input').value;

 fetch("https://api.github.com/search/users?q=" +searchTerm)
  .then(res => res.json())
  .then( data => {
    console.log(data);

    const users = data.map(user=> {
      let user =document.createElement('div')
       user.classList.add = ("col -md-3")
       user.innerHTML = ` <div>
   <a href="${repo.owner.html_url}">${repo.owner.login}</a>
    </div>`
    userContent.appendChild(userName);
      });
  
      
  })
 
  

  });
  
   })



