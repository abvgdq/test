const arrow = document.querySelector('.card__img');
const text = document.querySelector('.card__discription');
let isRotate = false;
arrow.addEventListener('click', function(){
    if(!isRotate){
        arrow.classList.remove('rotate')  
        text.classList.remove('hidden')
        isRotate = true;    
    } else{
        arrow.classList.add('rotate')
        text.classList.add('hidden')
        isRotate = false
    }   
})