

let form = document.querySelector('form');
let USER = document.querySelector('.user');
let input = document.querySelector('input');

function getApi(user) {
    fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then((data) => {
        
    USER.innerHTML = `
    <div class="img">
    <img src="${data.avatar_url}" alt="">
        </div>
        <div class="user-info">
            <h1>${data.name}</h1>
            <div class="user-links">
                <p>Адрес : ${data.location}</p>
                <p>Логин : ${data.login}</p>
                <p>ID : ${data.id}</p>
                <p>Репозитории : ${data.public_repos}</p>
                <p>Подписчиков : ${data.followers}</p>
                <p>Подписок : ${data.following}</p>
                <a href="${data.html_url}">Посмотреть профиль</a>
            </div>
        </div>
        `
        console.log(data);
        if (data.url === undefined) {
            throw new Error('Такого профиль не найден !')
        }
    })
    .catch((err) => {
        USER.innerHTML = `
            <h2>${err}</h2>
        `
        USER.classList.add('error');
    })
    .finally(() => {
        USER.style.opacity = 1;
        input.value = ''
    })
}





form.addEventListener('submit', (e) =>{
    e.preventDefault();
    getApi(input.value);
});


// console.log(data);