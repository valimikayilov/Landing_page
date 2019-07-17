// when the button pressed accepts the data with proper formating
document.getElementById('post-data').addEventListener('submit', newPost)

function newPost(){
  let email = document.querySelector('#email').value;
  //convert it to a JSON script and send to the back end
  fetch('http://jsonplaceholder.typicode.com/posts', { method: 'POST', body: JSON.stringify({ email: email }) })
  .then(response => response.json())
  .then(response => console.log(email));
}
