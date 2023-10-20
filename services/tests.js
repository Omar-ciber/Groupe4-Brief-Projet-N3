var burger = document.querySelector('.burger');
console.log(burger);

var close = document.querySelector('.close');
console.log(close);

var dropMenu= document.querySelector('.navigation .dropMenu');
console.log(dropMenu);

burger.addEventListener('click', () => {
    dropMenu.style.display = 'block';
    dropMenu.style.left = "500px";
    // alert('Bonjour');
})