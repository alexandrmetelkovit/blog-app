// // объявление переменной
// const posts = [];

// const TITLE_VALIDATION_LIMIT = 10;
// const TEXT_VALIDATION_LIMIT = 20;

// const postTitleInputNode = document.querySelector(".js-post-title-input");
// const postTextInputNode = document.querySelector(".js-post-text-input");
// const newPostBtnNode = document.querySelector(".js-new-post-btn");
// const postsNode = document.querySelector(".js-posts");
// const validationMessage = document.getElementById("validationMessage");

// newPostBtnNode.addEventListener("click", function () {
//   const postFromUser = getPostFromUser();

//   addPost(postFromUser);

//   renderPosts();
// });

// // 1. postTitleInputNode.addEventListener("input", function (event) {
// //   //хотя тут можно было обойтись и без event.target, а напрямую проверить postTitleInputNode.value
// //   const currentValue = event.target.value;
// //   if (currentValue.length > TITLE_VALIDATION_LIMIT) {
// //     //вынесли в константы значение TITLE_VALIDATION_LIMIT
// //     validationMessage.innerText = `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
// //     validationMessage.classList.remove('validationMessage_hidden');
// //   } else {
// //     validationMessage.classList.add('validationMessage_hidden');
// //   }
// // });

// // 2. Что такое хендлер?
// // Handler – это класс, который используется для работы с очередью сообщений, связанной с потоком.
// // postTitleInputNode.addEventListener("input", function () {
// //   validation();
// // });

// // 3.
// postTitleInputNode.addEventListener("input", validation);

// // 1.  мы просто скопировали кусок кода выше и немного подправили его под валидацию длины текста
// // postTextInputNode.addEventListener("input", function (event) {
// //   const currentValue = event.target.value;
// //   if (currentValue.length > TEXT_VALIDATION_LIMIT) {
// //     //TODO: остается проблема - если у нас уже показано сообщение о валидации по длине заголовка
// //     //то если начать вводить текст поста, то предупреждение пропадет
// //     validationMessage.innerText = `Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`;
// //     validationMessage.classList.remove('validationMessage_hidden');
// //   } else {
// //     validationMessage.classList.add('validationMessage_hidden');
// //   }
// // });

// // 2. Что такое хендлер?
// // Handler – это класс, который используется для работы с очередью сообщений, связанной с потоком.
// // postTextInputNode.addEventListener("input", function () {
// //   validation();
// // });

// // 3.
// postTextInputNode.addEventListener("input", validation);

// function validation() {
//   const titleLen = postTitleInputNode.value.length;
//   const textLen = postTextInputNode.value.length;

//   if (titleLen > TITLE_VALIDATION_LIMIT) {
//     validationMessage.innerText = `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
//     validationMessage.classList.remove("validationMessage_hidden");
//     return;
//   }

//   if (textLen > TEXT_VALIDATION_LIMIT) {
//     validationMessage.innerText = `Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`;
//     validationMessage.classList.remove("validationMessage_hidden");
//     return;
//   }

//   validationMessage.classList.add("validationMessage_hidden");
// }

// function getPostFromUser() {
//   const title = postTitleInputNode.value;
//   const text = postTextInputNode.value;

//   return {
//     title: title,
//     text: text,
//   };
// }

// function addPost({ title, text }) {
//   const currentDate = new Date();
//   const dt = `${currentDate.getDate()}.${0}${currentDate.getMonth() + 1}.${currentDate.getFullYear()}, ${currentDate.getHours()}:${0}${currentDate.getMinutes()}`

//   posts.push({
//     dt,
//    title,
//    text,
//   });
// }

// function getPost() {
//   return posts;
// }

// function renderPosts() {
//   const posts = getPost();

//   let postsHTML = "";
//   posts.forEach((post) => {
//     postsHTML += `
//         <div class = 'post'>
//         <p class = 'post__date'>${post.dt}</p>
//         <p class = 'post__title'>${post.title}</p>
//         <p class = 'post__text'>${post.text}</p>
//         </div>
//     `;
//   });

//   postsNode.innerHTML = postsHTML;
// }


let post = {
  title: '',
  text: ''
};

 const postTitleInputNode = document.querySelector('.js-post__title__input');
 const postTextInputNode = document.querySelector('.js-post__text__input');
 const newPostBtnNode = document.querySelector('.js-new_post_btn ');
 const postsNode = document.querySelector('.js-posts');



 newPostBtnNode.addEventListener('click', function() {

 // получить пост от пользователя
  const postFromUser = getPostFromUser();

  //вызов (присваиваем значение, которое ввел пользователь "post")
  setPost(postFromUser);

//отображение поста
  renderPost();
 });

 // получить пост от пользователя
 function getPostFromUser() { 

  //Обрабатываем ввод заголовка и описания
  const title = postTitleInputNode.value;  // получаем заголовок из поля ввода заголовка
  const text = postTextInputNode.value; // получаем описание из поля ввода напиши текст

  // возвращаем объект из title и text
  return {
    title,
    text
  };
 }
 
//установить пост ..  //сохранить пост
 function setPost(newPost) { 
  post = newPost;
 }

 function getPost() {
  return post;
 }

//отображение одного поста
 function renderPost() {
  // складываем внутрь HTML
  // postsNode.innerText = post; 

  const post = getPost();
  // формирование ХТМЛ через шаблонные строки внутри js 
  const postHTML = `
  <div class ='post'>
  <p class='post__title'>${post.title}</p>
  <p class='post__text'>${post.text}</p>
  </div>
  `;

  postsNode.innerHTML = postHTML;
 }


