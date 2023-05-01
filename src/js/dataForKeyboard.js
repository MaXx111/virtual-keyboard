export default class DataForKeyboard {
  constructor() {
    this.engKeysLowerCase = this.engKeysLowerCase.bind(this);
    this.engKeysUpperCase = this.engKeysUpperCase.bind(this);
  }

  engKeysLowerCase() {
    return ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
      'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'delete',
      'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
      'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
      'Ctrl', 'win', 'Alt', ' ', 'alt', '◄', '▼', '►', 'ctrl'];
  }

  engKeysUpperCase() {
    return ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
      'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'delete',
      'caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'enter',
      'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'shift',
      'Ctrl', 'win', 'Alt', ' ', 'alt', '◄', '▼', '►', 'ctrl'];
  }
}
