const toggle = document.getElementById('toggle');

const navBar = document.getElementById('nav');

toggle.addEventListener('click',function(){
    navBar.classList.toggle('active');
})