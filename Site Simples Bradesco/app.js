'use strict'
const switcher = document.querySelector('.botão');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('tema-escuro')

    var className = document.body.className;
    if(className == 'tema-escuro') {
        this.textContent = 'escuro';
    }
    else {
        this.textContent = 'claro';
    }
    console.log('current class name: ' + className);
});

