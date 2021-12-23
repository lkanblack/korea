let gifts = document.querySelectorAll('.gift');
let arrows = document.querySelectorAll('.arrow');

for(let arrow of arrows){
    console.log(arrow);
    arrow.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('rotate');
    })
}