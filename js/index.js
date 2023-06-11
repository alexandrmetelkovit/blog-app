// объявление переменной
const posts = [];


const postTitleInputNode = document.querySelector(".js-post-title-input"); // doc.query - вытаскивает класс из хтмл для работы в js
const postTextInputNode = document.querySelector(".js-post-text-input");
const newPostBtnNode = document.querySelector(".js-new-post-btn");
const postsNode = document.querySelector(".js-posts");

 let now = new Date();
 console.log(now)


newPostBtnNode.addEventListener("click", function () {
  // addEventListener - обработчик события . обратботка события (клик)

  // получить данные из поля ввода
  const postFromUser = getPostFromUser();

  addPost(postFromUser);

  renderPosts();

  // сохранить пост

  // отобразить пост

  // postTitle = postTitleInputNode.value; // вывод равен введенному тексту в input

  // postsNode.innerText = postTitle;
});

function getPostFromUser() {
  const title = postTitleInputNode.value;
  const text = postTextInputNode.value;


  return {
    title: title,
    text: text,
  };
}

function addPost({ title, text }) {
  posts.push({
    title: title,
    text: text,
  });
}

function getPost() {
  return posts;

}

function renderPosts() {
  const posts = getPost();

  let postsHTML = "";
  posts.forEach((post) => {
    postsHTML += `
        <div class = 'post'>
        <p class = 'post__title'>${post.title}</p>
        <p class = 'post__text'>${post.text}</p>
        </div>
    `;
  });

  postsNode.innerHTML = postsHTML;
}
