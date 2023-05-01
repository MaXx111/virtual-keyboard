import DataForKeyboard from './dataForKeyboard.js';
import HtmlElems from './htmlElems.js';

export default class Keyboard {
    constructor(body) {
        this.body = body;

        this.htmlElems = new HtmlElems();
        this.textarea = [];
        this.buttons = [];

        this.onKeyDown = this.onKeyDown.bind(this);
    
    }

    init() {
        this.body.appendChild(this.htmlElems.textareaHTML());
        this.body.appendChild(this.htmlElems.keyboard());


        this.textarea = document.querySelector('.textarea');
        this.buttons = document.querySelectorAll('.keyboard__button');
        this.body.addEventListener('keydown', this.onKeyDown);

    }

    onKeyDown(e) {
        this.textarea.focus();
        const { key } = e;

        this.buttons.forEach((elem) => {
            if(elem.textContent == key){
                elem.classList.add('active');
            }

            if(e.code == 'Backspace' && elem.classList.contains('backspace')){
                elem.classList.add('active');
            }

            if(e.code == 'Tab' && elem.classList.contains('tab')){
                elem.classList.add('active');
            }

            if(e.code == 'Delete' && elem.classList.contains('delete')){
                elem.classList.add('active');
            }

            if(e.code == 'Enter' && elem.classList.contains('enter')){
                elem.classList.add('active');
            }

            if(e.code == 'ShiftRight' && elem.classList.contains('shift__right')){
                elem.classList.add('active');
            }

            if(e.code == 'ShiftLeft' && elem.classList.contains('shift__left')){
                elem.classList.add('active');
            }

            if(e.code == 'ControlLeft' && elem.classList.contains('ctrl__left')){
                elem.classList.add('active');
            }

            if(e.code == 'ControlRight' && elem.classList.contains('ctrl__right')){
                elem.classList.add('active');
            }

            if(e.code == 'AltRight' && elem.classList.contains('alt__right')){
                elem.classList.add('active');
            }

            if(e.code == 'AltLeft' && elem.classList.contains('alt__left')){
                elem.classList.add('active');
            }

            if(e.code == 'ArrowUp' && elem.classList.contains('arrow__up')){
                elem.classList.add('active');
            }

            if(e.code == 'ArrowLeft' && elem.classList.contains('arrow__left')){
                elem.classList.add('active');
            }

            if(e.code == 'ArrowDown' && elem.classList.contains('arrow__down')){
                elem.classList.add('active');
            }

            if(e.code == 'ArrowRight' && elem.classList.contains('arrow__right')){
                elem.classList.add('active');
            }




            if(e.code == 'CapsLock' && elem.classList.contains('caps__lock')){
                elem.classList.add('active');
            }
        })
        console.log(key)
        console.log(e.code)
    }
}