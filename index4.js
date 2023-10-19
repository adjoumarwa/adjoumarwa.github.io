let inp=document.getElementById('inp');
let btn=document.getElementById('btn');
let x=null;
btn.onclick = function() {
    
        this.addEventListener("click",() => {
            const top  =Math.floor(Math.random()*window.innerHeight);
            const left = Math.floor(Math.random()*window.innerWidth);
            btn.style.position="absolute";
            btn.style.top=`${top}px`;
            btn.style.left=`${left}px`;
            btn.style.transition='0.01s';
        });
    }
