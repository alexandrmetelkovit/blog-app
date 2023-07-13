const posts = [];

const symbolTitleLimit = 'Заголовок больше 50 символов';
const symbolTextLimit = 'Пост больше 100 символов';

const postTitleInputNode = document.querySelector(".js-post__title__input");
const postTextInputNode = document.querySelector(".js-post__text__input");
const newPostBtnNode = document.querySelector(".js-new__post__btn");
const postsNode = document.querySelector(".js-posts");
const resetPostBtnNode = document.querySelector(".js-reset__post__btn");
const resetBlogBtnNode = document.querySelector(".js-reset__blog__btn");

// по клику кнопки будет срабатывать (обработчик события)
newPostBtnNode.addEventListener("click", function () {
  // получить пост от пользователя
  const postFromUser = getPostFromUser();

  //вызов (присваиваем значение, которое ввел пользователь "post")
  addPost(postFromUser); //этот метод добавит новый пост в массив (но еще не отобразит на странице)

  //отображение поста
  renderPosts();

});

//по клику кнопки - вывод пустого поста
resetPostBtnNode.addEventListener("click", function () {
  resetPost();
});

function resetPost() {
  postTitleInputNode.value = "";
  postTextInputNode.value = "";
}

// по клику кнопки - удаляются посты
resetBlogBtnNode.addEventListener("click", function () {
  resetBlog();
});

function resetBlog() {
  let resetPost = document.querySelectorAll('.js-posts'); 

  for( let i = 0; i < resetPost.length; i++ ){
    resetPost[i].outerHTML = '';
  }
}

// получить пост от пользователя
function getPostFromUser() {
  //Обрабатываем ввод заголовка и описания
  const title = postTitleInputNode.value; // получаем заголовок из поля ввода заголовок
  const text = postTextInputNode.value; // получаем описание из поля ввода напиши текст

  // возвращаем объект из title и text
  return {
    title,
    text,
  };
}
//добавление в массив
function addPost({ date, title, text }) {

  if (!title || !text) return ;

  resetPost();

  posts.push({
    date: `${getDate()}`,
    title,
    text,
  });

}

// получить посты
function getPosts() {
  return posts;
}

//отображение одного поста
function renderPosts() {
  const posts = getPosts();
  // формирование ХТМЛ через шаблонные строки внутри js
  let postsHTML = "";

  posts.forEach((post) => {
    // добавление отдельного поста
    postsHTML += ` 
      <div class ='post'>
        <p class='post__date'>${post.date}</p>
        <p class='post__title'>${post.title}</p>
        <p class='post__text'>${post.text}</p>
      </div>
    `;
  });

  postsNode.innerHTML = postsHTML;

}

function getDate() {
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const date = new Date().toLocaleString("ru", option);

  return date;
}