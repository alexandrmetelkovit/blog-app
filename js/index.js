const posts = [];

const limitTitle = 10;
const limitText = 20;
// достаем все нужные нам элементы из htmL
const postTitleInputNode = document.querySelector(".js-post__title__input");
const postTextInputNode = document.querySelector(".js-post__text__input");
const validationTitle = document.querySelector(".js-validationTitle");
const validationText = document.querySelector(".js-validationText");
const validationMessage = document.querySelector(".js-validationMessage");
const newPostBtnNode = document.querySelector(".js-new__post__btn");
const resetPostBtnNode = document.querySelector(".js-reset__post__btn");
const resetBlogBtnNode = document.querySelector(".js-reset__blog__btn");
const postsNode = document.querySelector(".js-posts");

//обработчики события
postTitleInputNode.addEventListener("input", validation);
postTextInputNode.addEventListener("input", validation);
newPostBtnNode.addEventListener("click", newPostBtnHandler);
resetPostBtnNode.addEventListener("click", resetPost);
resetBlogBtnNode.addEventListener("click", resetBlog);

function validation() {
  // проверка (валидация) на символы в инпутах
  const titleLength = postTitleInputNode.value.length;
  const textLength = postTextInputNode.value.length;

  if (titleLength > limitTitle) {
    validationMessage.className = "validationMessage";
    validationMessage.innerText = `Длина заголовка не должна превышать ${limitTitle} символов`;
    newPostBtnNode.disabled = true;
    return;
  } else {
    validationMessage.className = "validationMessage__hidden";
    newPostBtnNode.disabled = false;
  }

  if (textLength > limitText) {
    validationMessage.className = "validationMessage";
    validationMessage.innerText = `Длина поста не должна превышать ${limitText} символов`;
    newPostBtnNode.disabled = true;
    return;
  } else {
    validationMessage.className = "validationMessage__hidden";
    newPostBtnNode.disabled = false;
  }
}

function newPostBtnHandler() {
  const postFromUser = getPostFromUser(); //присвоит значение, которое ввел пользователь

  addPost(postFromUser); //этот метод добавит новый пост в массив (но еще не отобразит на странице)

  validation();

  renderPosts(); //отобразит пост на странице

  resetPost(); //очистит инпуты
}

// получить пост от пользователя
function getPostFromUser() {
  //Обрабатываем ввод заголовка и описания
  const title = postTitleInputNode.value; // получаем заголовок из поля ввода заголовок
  const text = postTextInputNode.value; // получаем описание из поля ввода напиши текст
  if (title === "") {
    addPostBtnNode.disabled = true;
    return;
  }
  if (text === "") {
    addPostBtnNode.disabled = true;
    return;
  }
  // возвращаем объект из title и text
  return {
    title,
    text,
  };
}

// по клику кнопки срабатывает очистка инпутов
function resetPost() {
  postTitleInputNode.value = "";
  postTextInputNode.value = "";

  validation();
}

//удаление постов
function resetBlog() {
  posts.length = [];

  postsNode.innerHTML = "Тут пока пусто...";
}

//добавление поста в массив
function addPost({ title, text }) {
  if (!title || !text) return;

  resetPost();

  posts.push({
    date: `${getDate()}`,
    title,
    text,
  });
}

//получение даты
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

// получение постов
function getPosts() {
  return posts;
}

//отображение одного поста
function renderPosts() {
  const posts = getPosts();
  // формирование HTML через шаблонные строки внутри JS
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