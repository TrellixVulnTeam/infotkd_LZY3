//Go-up function
window.onscroll = function() {
    if(document.documentElement.scrollTop > 400) {
        document.querySelector('.go-up').classList.add('show');
    } else {
            document.querySelector('.go-up').classList.remove('show');
    };
};

document.querySelector('.go-up').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});