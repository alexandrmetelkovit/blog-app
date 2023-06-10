// объявление переменной
let postTitle = '';


const titleInputNode = document.querySelector('.js-title-input'); // doc.query - вытаскивает класс из хтмл для рабоыт в js
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');

newPostBtnNode.addEventListener('click', function() { // addEventListener - обработчик события . обратботка события (клик)
    postTitle= titleInputNode.value;

    postsNode.innerText = postTitle;
});
