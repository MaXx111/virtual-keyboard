import DataForKeyboard from './dataForKeyboard.js';
import HtmlElems from './htmlElems.js';

export default class Keyboard {
    constructor(body) {
        this.body = body;

        this.htmlElems = new HtmlElems();
    }

    init() {
        this.body.appendChild(this.htmlElems.textareaHTML());
        this.body.appendChild(this.htmlElems.keyboard());

    }
}