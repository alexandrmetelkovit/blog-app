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

const posts = [];

const postTitleInputNode = document.querySelector(".js-post-title-input");
const postTextInputNode = document.querySelector(".js-post-text-input");
const newPostBtnNode = document.querySelector(".js-new-post-btn");
const postNode = document.querySelector(".js-posts");

newPostBtnNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  addPost(postFromUser); // сохраняем пост

  renderPosts();
});

function getPostFromUser() {
  //получаем данные через инпут
  const title = postTitleInputNode.value;
  const text = postTextInputNode.value;

  return {
    title: title,
    text: text,
  };
}

function addPost({ title, text }) {
  posts.push({
    title,
    text,
  });
}

function getPosts() {
  return posts;
}

function renderPosts() {
  const posts = getPosts();

  let postsHTML = '';

  posts.forEach(post => {
    postsHTML += `
      <div class='post'>
        <p class='post__title'>${post.title}</p>
        <p class='post__text'>${post.text}</p>
      </div>
      `;
  });

  postNode.innerHTML = postsHTML;
}
