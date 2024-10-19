const select = document.querySelector('select');
select.addEventListener('change', changeURLLanguage);

const allLang = ['en', 'de', 'ru'];

function changeURLLanguage() {
    let lang = select.value;
    localStorage.setItem('selectedLang', lang);
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        let savedLang = localStorage.getItem('selectedLang');
        if (savedLang && allLang.includes(savedLang)) {
            hash = savedLang;
        } else {
            hash = 'ru';
        }
        location.href = window.location.pathname + '#' + hash;
        location.reload();
    }

    select.value = hash;

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let savedLang = localStorage.getItem('selectedLang');
    if (savedLang && allLang.includes(savedLang)) {
        select.value = savedLang;
        location.href = window.location.pathname + '#' + savedLang;
    }
    changeLanguage();
});

