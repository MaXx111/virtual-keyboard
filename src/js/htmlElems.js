import DataForKeyboard from './dataForKeyboard.js'

export default class HTMLElems {
    constructor() {
        this.dataForKeyboard = new DataForKeyboard();
    }

    textareaHTML() {
        const div = document.createElement("div");
        div.className = "div__textarea";

        const divWrapper = document.createElement('div');
        divWrapper.className = "textarea__wrapper";

        const title = document.createElement("h1");
        title.className = "textarea__title";
        title.textContent = 'Virtual Keyboard';

        const textarea = document.createElement("textarea");
        textarea.className = "textarea";

        const text = document.createElement('span');
        text.className = "textarea__text";
        text.textContent = "смена языка пока не реализована";

        divWrapper.appendChild(title);
        divWrapper.appendChild(textarea);
        divWrapper.appendChild(text);


        div.appendChild(divWrapper);

        return div;
    }

    keyboard(type) {
        if(true) {
            console.log(this.dataForKeyboard.engKeysLowerCase());
        }
    }
}