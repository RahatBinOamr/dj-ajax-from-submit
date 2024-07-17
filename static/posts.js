console.log('hello posts on server');
const postsBox = document.getElementById('posts-box');
const spinnerBox = document.getElementById('spinner-box');
const loadingBox = document.getElementById('loading-box');
const loadBtn = document.getElementById('load-btn');
let visible = 4;

const handelGetData = () => {
  $.ajax({
    type: 'GET',
    url: `/posts/${visible}`,
    success: function (response) {
      const maxSize = response.max;
      const posts = response.data;
      spinnerBox.classList.remove('d-none');
      setTimeout(() => {
        spinnerBox.classList.add('d-none');
        posts.map(post => {
          postsBox.innerHTML += `
              <div class="col-sm-6 mt-2 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${post.name} </h5>
                    <p class="card-text"> ${post.body} </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
          `;
        });
        if (maxSize) {
          loadingBox.innerHTML = '<h3> no more posts </h3> ';
        }
      }, 500);
    },
    error: function (error) {
      console.log(error);
    },
  });
};

loadBtn.addEventListener('click', () => {
  visible += 4;
  handelGetData();
});

handelGetData();
