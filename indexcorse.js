let img=document.querySelector('.img');
let container= document.querySelector('.container');
function modules(module) {
    img.src = module;
}
function colors(color) {
    container.style.background=color;
}