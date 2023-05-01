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

        const div = document.createElement("div");
        div.className = "keyboard";

        const divWrapper = document.createElement("div");
        divWrapper.className = "keyboard__wrapper";

        let keyboardKeys;

        if(type == `engLowerCase`) {
            keyboardKeys = this.dataForKeyboard.engKeysLowerCase();
        } else if (type == `engUpperCase`) {
            keyboardKeys = this.dataForKeyboard.engKeysUpperCase();
        }

        for(let i = 0; i < keyboardKeys.length; i++) {
            const button = document.createElement('button');
            button.className = 'keyboard__button';
            button.textContent = keyboardKeys[i];

            let buttonUpgrate = this.specialButton(button);
            divWrapper.append(buttonUpgrate);
        }


        div.appendChild(divWrapper);

        return div;
    }

    specialButton(button) {
        const buttonText = button.textContent;

        if(buttonText == "backspace") {
            button.classList.add("special");
            button.classList.add("backspace");
        }

        if(buttonText == "tab") {
            button.classList.add("special");
            button.classList.add("tab");
        }

        if(buttonText == "delete") {
            button.classList.add("special");
            button.classList.add("delete");
        }

        if(buttonText == "caps lock") {
            button.classList.add("special");
            button.classList.add("caps__lock");
        }

        if(buttonText == "enter") {
            button.classList.add("special");
            button.classList.add("enter");
        }

        if(buttonText == "Shift") {
            button.classList.add("special");
            button.classList.add("shift__left");
        }

        if(buttonText == "shift") {
            button.classList.add("special");
            button.classList.add("shift__right");
        }

        if(buttonText == "Ctrl") {
            button.classList.add("special");
            button.classList.add("ctrl__left");
        }

        if(buttonText == "ctrl") {
            button.classList.add("special");
            button.classList.add("Ctrl__right");
        }

        if(buttonText == "win") {
            button.classList.add("special");
            button.classList.add("win");
        }

        if(buttonText == "Alt") {
            button.classList.add("special");
            button.classList.add("alt__left");
        }

        if(buttonText == "alt") {
            button.classList.add("special");
            button.classList.add("alt__right");
        }

        if(buttonText == " ") {
            button.classList.add("special");
            button.classList.add("space");
        }

        if(buttonText == "▲") {
            button.classList.add("special");
            button.classList.add("arrow__up");
        }

        if(buttonText == "◄") {
            button.classList.add("special");
            button.classList.add("arrow__left");
        }

        if(buttonText == "▼") {
            button.classList.add("special");
            button.classList.add("arrow__down");
        }

        if(buttonText == "►") {
            button.classList.add("special");
            button.classList.add("arrow__right");
        }

        return button;
    }
}