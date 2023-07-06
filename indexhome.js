let btnopen = document.getElementByIdById('open');
let btnclose= document.getElementByIdById('close');
let container= document.querySelector('container');
btnclose.onclick = function() {
    container.classList.add('hide');
    this.classList.add('hide');
    btnclose.classList.remove('hide');
}
btnopen.onclick = function() {
    this.classList.add('hide');
    btnclose.classList.remove('hide');
    container.classList.remove('hide');
    
}