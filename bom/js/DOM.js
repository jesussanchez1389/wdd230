const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
        let chapter = input.value;
    input.value = '';
    let listChapter = document.createElement('li');
    const chapterName = document.createElement('span');
    const listBtn = document.createElement('button');

    listChapter.appendChild(chapterName);
    listChapter.textContent = chapter;
    listChapter.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listChapter);

    listBtn.onclick = function (e) {
        list.removeChild(listChapter);
    }

    input.focus();
});