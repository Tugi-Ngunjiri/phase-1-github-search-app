document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  const userContent = document.querySelector('#user-Content');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = form.querySelector('input').value;
    fetch(`https://api.github.com/search/users?q=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        const users = data.items;
        console.log(users);

        users.forEach(user => {
          const userDiv = document.createElement('div');
          userDiv.innerHTML = `<img src=${user.avatar_url} class="user-img-top" alt="">
                                <p class="user-name">${user.login}</p>
                                <a href=${user.html_url} target="_blank">Link to ${user.login}'s GitHub Profile</a>
                               <p>Github Profiles</p>;
                          <button id="myBtn onclick="onBtnClick()">Click Here</button>`

          userContent.appendChild(userDiv);
        });
      });
    
  });
});