
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => addPostsToPage(json));

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => addDogImageToPage(json.message));
function addPostsToPage(posts) {
  const postList = document.getElementById('postList');

  posts.forEach(post => {
    let postDiv = document.createElement('div');
    postDiv.classList.add('col-md-4');
    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    postList.appendChild(postDiv);
  });
}

function addDogImageToPage(imageUrl) {
  const dogImage = document.getElementById('dogImage');

  let imageDiv = document.createElement('div');
  imageDiv.classList.add('col-md-12');
  imageDiv.innerHTML = `<img src="${imageUrl}" alt="Dog Image" class="img-fluid">`;
  dogImage.appendChild(imageDiv);
}
