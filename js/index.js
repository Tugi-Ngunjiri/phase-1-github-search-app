document.addEventListener("DOMContentLoaded", () =>{
  const form =document.querySelector('form');
  form.addEventListener('submit', (e) => {
 e.preventDefault();

const searchTerm = form.querySelector('input').value;

 fetch("https://api.github.com/search/users?q=" +searchTerm)
  .then(res => res.json())
  .then( data => {
    console.log(data);

    const users = User.map(User=> {
user.classList.add = ("col -md-3")
       user.innerHTML = ` <div>
   <a href="${User.html_url}">${User.login}</a>
    </div>`
    userContent.appendChild(userName);
      });
  
      
  })
 
  

  });
  
   })



