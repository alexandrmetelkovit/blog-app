// объявление переменной
let post = '';


const titleInputNode = document.querySelector('.js-title-input'); // doc.query - вытаскивает класс из хтмл для работы в js
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');

newPostBtnNode.addEventListener('click', function() { // addEventListener - обработчик события . обратботка события (клик)

    // получить данные из поля ввода
    const postFromUser = getPostFromUser();

    setPost(postFromUser);

    renderPost();

    // сохранить пост

    // отобразить пост

    postTitle = titleInputNode.value; // вывод равен введенному тексту в input

    postsNode.innerText = postTitle;
});

function getPostFromUser() {
    const post = titleInputNode.value;

    return post;
};

function setPost(newPost) {
    post = newPost;
};

function renderPost() {
    postsNode.innerText = post;
}
