document.getElementById('contents').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        var confirmed = confirm(`Хочешь покинуть страницу по ссылке ${event.target.innerText}?`);
        if (!confirmed) {
            event.preventDefault();
        }
    }
});