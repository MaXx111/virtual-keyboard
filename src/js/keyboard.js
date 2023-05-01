import DataForKeyboard from './dataForKeyboard.js';
import HtmlElems from './htmlElems.js';

export default class Keyboard {
    constructor(body) {
        this.body = body;

        this.htmlElems = new HtmlElems();
        this.textarea = [];
        this.buttons = [];
        this.lowerOrUpperCase = `Lower`;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.changeCase = this.changeCase.bind(this);
    
    }

    init() {
        this.body.appendChild(this.htmlElems.textareaHTML());
        this.body.appendChild(this.htmlElems.keyboard(`engLowerCase`));


        this.textarea = document.querySelector('.textarea');
        this.buttons = document.querySelectorAll('.keyboard__button');
        this.body.addEventListener('keydown', this.onKeyDown);
        this.body.addEventListener('keyup', this.onKeyUp);

    }

    onKeyDown(e) {
        this.textarea.focus();
        const { key } = e;

        if(key === 'Shift'){
            this.changeCase(`engUpperCase`);
        }

        this.buttons.forEach((elem) => {
            if(elem.textContent.toLowerCase() == key.toLowerCase()){
                elem.classList.add('active');
                return;
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
                this.changeCase(`engUpperCase`);
            }
        });
    }

    onKeyUp(e){
        const { key } = e;

        if(key === 'Shift'){
            this.changeCase(`engLowerCase`);
        }

        this.buttons.forEach((elem) => {
            if(elem.textContent.toLowerCase() == key.toLowerCase()){
                elem.classList.remove('active');
            }

            if(e.code == 'Backspace' && elem.classList.contains('backspace')){
                elem.classList.remove('active');
            }

            if(e.code == 'Tab' && elem.classList.contains('tab')){
                elem.classList.remove('active');
            }

            if(e.code == 'Delete' && elem.classList.contains('delete')){
                elem.classList.remove('active');
            }

            if(e.code == 'Enter' && elem.classList.contains('enter')){
                elem.classList.remove('active');
            }

            if(e.code == 'ShiftRight' && elem.classList.contains('shift__right')){
                elem.classList.remove('active');
            }

            if(e.code == 'ShiftLeft' && elem.classList.contains('shift__left')){
                elem.classList.remove('active');
            }

            if(e.code == 'ControlLeft' && elem.classList.contains('ctrl__left')){
                elem.classList.remove('active');
            }

            if(e.code == 'ControlRight' && elem.classList.contains('ctrl__right')){
                elem.classList.remove('active');
            }

            if(e.code == 'AltRight' && elem.classList.contains('alt__right')){
                elem.classList.remove('active');
            }

            if(e.code == 'AltLeft' && elem.classList.contains('alt__left')){
                elem.classList.remove('active');
            }

            if(e.code == 'ArrowUp' && elem.classList.contains('arrow__up')){
                elem.classList.remove('active');
            }

            if(e.code == 'ArrowLeft' && elem.classList.contains('arrow__left')){
                elem.classList.remove('active');
            }

            if(e.code == 'ArrowDown' && elem.classList.contains('arrow__down')){
                elem.classList.remove('active');
            }

            if(e.code == 'ArrowRight' && elem.classList.contains('arrow__right')){
                elem.classList.remove('active');
            }

            if(e.code == 'CapsLock' && elem.classList.contains('caps__lock')){
                elem.classList.remove('active');
                this.changeCase(`engLowerCase`);
            }
        });
    }

    changeCase(type) {
        console.log(`this.changeCase`)
        this.body.querySelector('.keyboard').remove();

        this.body.appendChild(this.htmlElems.keyboard(type));

        this.buttons = document.querySelectorAll('.keyboard__button');
        // switch (type) {
        //     case 'Upper':
                


        //         return;
    
        //     case 'Lower':
        //         ctx.response.body = JSON.stringify(getTaskObj(id));
        //         return;
    
            // case 'description':
            //     ctx.response.body = JSON.stringify(getTaskObj(id).description);
            //     return;
    
            // default:
            //     ctx.response.status = 404;
            //     return;
    
    }
}