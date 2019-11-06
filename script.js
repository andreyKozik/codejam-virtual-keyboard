// array for rendering keyboard
// the zero element subarray is an English small letter
// the first element is a Russian small letter
// the second element is the event.code key
// the third element is a special symbol of the English layout
// the fourth element is a special symbol of the Russian layout
const array = [['`', 'ё', 'Backquote', '~', 'Ё'], [1, 1, 'Digit1', '!', '!'], [2, 2, 'Digit2', '@', '"'],
  [3, 3, 'Digit3', '#', '№'], [4, 4, 'Digit4', '$', ';'], [5, 5, 'Digit5', '%', '%'], [6, 6, 'Digit6', '^', ':'],
  [7, 7, 'Digit7', '&', '?'], [8, 8, 'Digit8', '*', '*'], [9, 9, 'Digit9', '(', '('], [0, 0, 'Digit0', ')', ')'],
  ['-', '-', 'Minus', '_', '_'], ['=', '=', 'Equal', '+', '+'], ['&#8592 Back', '&#8592 Back', 'Backspace'],
  ['Tab', 'Tab', 'Tab'], ['q', 'й', 'KeyQ'], ['w', 'ц', 'KeyW'], ['e', 'у', 'KeyE'], ['r', 'к', 'KeyR'],
  ['t', 'е', 'KeyT'], ['y', 'н', 'KeyY'], ['u', 'г', 'KeyU'], ['i', 'ш', 'KeyI'], ['o', 'щ', 'KeyO'],
  ['p', 'з', 'KeyP'], ['[', 'х', 'BracketLeft', '{', 'Х'], [']', 'ъ', 'BracketRight', '', '}', 'Ъ'],
  ['Del', 'Del', 'Delete'], ['CapsLock', 'CapsLock', 'CapsLock'], ['a', 'ф', 'KeyA'], ['s', 'ы', 'KeyS'],
  ['d', 'в', 'KeyD'], ['f', 'а', 'KeyF'], ['g', 'п', 'KeyG'], ['h', 'р', 'KeyH'], ['j', 'о', 'KeyJ'],
  ['k', 'л', 'KeyK'], ['l', 'д', 'KeyL'], [';', 'ж', 'Semicolon', ':', 'Ж'], ['&#8242;', 'э', 'Quote', '"', 'Э'],
  ['\\', '\\', 'Backslash', '|', '/'], ['Enter', 'Enter', 'Enter'], ['Shift', 'Shift', 'ShiftLeft'], ['z', 'я', 'KeyZ'],
  ['x', 'ч', 'KeyX'], ['c', 'с', 'KeyC'], ['v', 'м', 'KeyV'], ['b', 'и', 'KeyB'], ['n', 'т', 'KeyN'],
  ['m', 'ь', 'KeyM'], [',', 'б', 'Comma', '<', 'Б'], ['.', 'ю', 'Period', '>', 'Ю'], ['/', '.', 'Slash', '?', ','],
  ['&#8593', '&#8593', 'ArrowUp'], ['Shift', 'Shift', 'ShiftRight'], ['Ctrl', 'Ctrl', 'ControlLeft'],
  ['Win', 'Win', 'MetaLeft'], ['Alt', 'Alt', 'AltLeft'], ['Space', 'Space', 'Space'], ['Alt', 'Alt', 'AltRight'],
  ['&#8592', '&#8592', 'ArrowLeft'], ['&#8595', '&#8595', 'ArrowDown'], ['&#8594', '&#8594', 'ArrowRight'],
  ['Ctrl', 'Ctrl', 'ControlRight'],
];

const main = document.createElement('main');
main.id = ('main');
document.body.prepend(main);

const textarea = document.createElement('textarea');
main.append(textarea);
textarea.id = ('textarea');
textarea.autofocus = true;

const keyboard = document.createElement('div');
keyboard.id = ('keyboard');
main.append(keyboard);

localStorage.setItem('first', '0');


// collect the virtual keyboard and add the third element to the array id array for each element
function keyboardBuilder(allArray) {
  for (let i = 0; i < allArray.length; i += 1) {
    const div = document.createElement('section');
    keyboard.append(div);
    div.id = array[i][2];
    document.getElementById(div.id).innerHTML = array[i][localStorage.getItem('second')
    || localStorage.getItem('first')];
  }
}


//  highlight keys and value outputcd
document.addEventListener('keydown', (event) => {
  for (let i = 0; i < array.length; i += 1) {
    if (event.code === array[i][2]) {
      document.querySelector(`#${array[i][2]}`).classList.add('change');
      if (i !== 60 && i !== 61 && i !== 62 && i !== 53) {
        event.preventDefault();
      }
      if (i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42 && i !== 53 && i !== 54
         && i !== 55 && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 60 && i !== 61 && i !== 62 && i !== 63) {
        const output = document.getElementById('textarea');
        output.value += document.getElementById(array[i][2]).textContent;
      }
    }
  }
  textarea.focus();
});
document.addEventListener('keyup', (event) => {
  for (let i = 0; i < array.length; i += 1) {
    if (event.code === array[i][2]) {
      document.querySelector(`#${array[i][2]}`).classList.remove('change');
    }
  }
});

// displaying values from the virtual keyboard when you click the mouse
document.addEventListener('mousedown', (event) => {
  for (let i = 0; i < array.length; i += 1) {
    if (event.toElement.id === array[i][2]) {
      if (i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42 && i !== 53 && i !== 54
        && i !== 55 && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 60 && i !== 61 && i !== 62 && i !== 63) {
        const output = document.getElementById('textarea');
        output.value += document.getElementById(array[i][2]).innerHTML;
      }
    }
  }
});
//  values output from the virtual keyboard by clicking with the mouse
document.addEventListener('mousedown', (event) => {
  for (let i = 0; i < array.length; i += 1) {
    if (event.toElement.id === array[i][2]) {
      document.querySelector(`#${array[i][2]}`).classList.add('change');
      setTimeout(() => {
        document.querySelector(`#${array[i][2]}`).classList.remove('change');
      }, 300);
    }
  }
});

// change keyboard layout
const map = {};

document.addEventListener('keydown', (event) => {
  map[event.code] = true;
  const flag = document.getElementById(array[15][2]);
  if (map.ControlLeft === true && map.AltLeft === true && flag.textContent === 'q') {
    for (let i = 0; i < array.length; i += 1) {
      document.getElementById(array[i][2]).innerHTML = array[i][1];
      localStorage.setItem('second', '1');
    }
  } else if (map.ControlLeft === true && map.AltLeft === true && flag.textContent === 'й') {
    for (let i = 0; i < array.length; i += 1) {
      document.getElementById(array[i][2]).innerHTML = array[i][0];
      localStorage.setItem('second', '0');
    }
  } else if (map.ControlLeft === true && map.AltLeft === true && flag.textContent === 'Q') {
    for (let i = 0; i < array.length; i += 1) {
      document.getElementById(array[i][2]).innerHTML = array[i][1];
      if (i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42 && i !== 53 && i !== 54
        && i !== 55 && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 60 && i !== 61 && i !== 62 && i !== 63) {
        document.getElementById(array[i][2]).textContent = document.getElementById(array[i][2]).innerHTML.toUpperCase();
      }
    }
  } else if (map.ControlLeft === true && map.AltLeft === true && flag.textContent === 'Й') {
    for (let i = 0; i < array.length; i += 1) {
      document.getElementById(array[i][2]).innerHTML = array[i][0];
      if (i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42 && i !== 53 && i !== 54
        && i !== 55 && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 60 && i !== 61 && i !== 62 && i !== 63) {
        document.getElementById(array[i][2]).textContent = document.getElementById(array[i][2]).innerHTML.toUpperCase();
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  map[event.code] = false;
  delete map[event.code];
});

// make the Caps Lock key
document.addEventListener('keydown', (event) => {
  for (let i = 0; i < array.length; i += 1) {
    if (event.code === 'CapsLock'
      && document.querySelector(`#${array[i][2]}`).classList.contains('upperCase') === false
      && i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42 && i !== 54 && i !== 55
      && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 63) {
      document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toUpperCase();
      document.querySelector(`#${array[i][2]}`).classList.add('upperCase');
      document.querySelector('#CapsLock').classList.add('changeCaps');
    } else if (event.code === 'CapsLock'
      && document.querySelector(`#${array[i][2]}`).classList.contains('upperCase') === true) {
      document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toLowerCase();
      document.querySelector(`#${array[i][2]}`).classList.remove('upperCase');
      document.querySelector('#CapsLock').classList.remove('changeCaps');
    }
  }
});


document.addEventListener('click', (event) => {
  for (let i = 0; i < array.length; i += 1) {
    if (event.toElement.id === 'CapsLock'
      && document.querySelector(`#${array[i][2]}`).classList.contains('upperCase') === false
      && i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42 && i !== 54 && i !== 55
      && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 63) {
      document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toUpperCase();
      document.querySelector(`#${array[i][2]}`).classList.add('upperCase');
      document.querySelector('#CapsLock').classList.add('changeCaps');
    } else if (event.toElement.id === 'CapsLock'
      && document.querySelector(`#${array[i][2]}`).classList.contains('upperCase') === true) {
      document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toLowerCase();
      document.querySelector(`#${array[i][2]}`).classList.remove('upperCase');
      document.querySelector('#CapsLock').classList.remove('changeCaps');
    }
  }
});

// make the Back key
document.addEventListener('keydown', (event) => {
  if (event.code === 'Backspace') {
    const output = document.getElementById('textarea');
    output.value = output.value.substring(0, output.value.length - 1);
  }
});

document.addEventListener('click', (event) => {
  if (event.toElement.id === 'Backspace') {
    const output = document.getElementById('textarea');
    output.value = output.value.substring(0, output.value.length - 1);
  }
});

// make the Space key
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    document.getElementById('textarea').value = `${document.getElementById('textarea').value} `;
  }
});

document.addEventListener('click', (event) => {
  if (event.toElement.id === 'Space') {
    document.getElementById('textarea').value = `${document.getElementById('textarea').value} `;
  }
});

// make the Tab key
document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    document.getElementById('textarea').value = `${document.getElementById('textarea').value}    `;
  }
});

document.addEventListener('click', (event) => {
  if (event.toElement.id === 'Tab') {
    document.getElementById('textarea').value = `${document.getElementById('textarea').value}    `;
  }
});

// make the Enter key
document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    document.getElementById('textarea').value = `${document.getElementById('textarea').value}\n`;
  }
});

document.addEventListener('click', (event) => {
  if (event.toElement.id === 'Enter') {
    document.getElementById('textarea').value = `${document.getElementById('textarea').value}\n`;
  }
});

// make the Shift key
document.addEventListener('keydown', (event) => {
  for (let i = 0; i < array.length; i += 1) {
    if (event.code === 'ShiftLeft'
      && i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41
      && i !== 42 && i !== 54 && i !== 55 && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 63) {
      document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toUpperCase();
      if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6
        || i === 7 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12 || i === 25
        || i === 26 || i === 38 || i === 39 || i === 40 || i === 50 || i === 51 || i === 52) {
        if (document.getElementById(array[49][2]).innerHTML === 'm'
          || document.getElementById(array[49][2]).innerHTML === 'M') {
          document.getElementById(array[i][2]).innerHTML = array[i][3];
        }
        if (document.getElementById(array[49][2]).innerHTML === 'ь'
          || document.getElementById(array[49][2]).innerHTML === 'Ь') {
          document.getElementById(array[i][2]).innerHTML = array[i][4];
        }
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < array.length; i += 1) {
    if (event.code === 'ShiftLeft'
      && i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42
      && i !== 54 && i !== 55 && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 63) {
      document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toLowerCase();
      if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5
        || i === 6 || i === 7 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12
        || i === 25 || i === 26 || i === 38 || i === 39 || i === 40 || i === 50 || i === 51 || i === 52) {
        if (document.getElementById(array[49][2]).innerHTML === 'm'
          || document.getElementById(array[49][2]).innerHTML === 'M') {
          document.getElementById(array[i][2]).innerHTML = array[i][0];
        }
        if (document.getElementById(array[49][2]).innerHTML === 'ь'
          || document.getElementById(array[49][2]).innerHTML === 'Ь') {
          document.getElementById(array[i][2]).innerHTML = array[i][1];
        }
      }
    }
  }
});

// make the Shift key by double-clicking
document.addEventListener('dblclick', (event) => {
  if (event.toElement.id === 'ShiftLeft'
    && document.querySelector('#ShiftLeft').classList.contains('changeShift') === false) {
    for (let i = 0; i < array.length; i += 1) {
      if (i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42
        && i !== 54 && i !== 55 && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 63) {
        document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toUpperCase();
      }
      document.querySelector('#ShiftLeft').classList.add('changeShift');
      if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5
        || i === 6 || i === 7 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12
        || i === 25 || i === 26 || i === 38 || i === 39 || i === 40 || i === 50 || i === 51 || i === 52) {
        if (document.getElementById(array[49][2]).innerHTML === 'm'
          || document.getElementById(array[49][2]).innerHTML === 'M') {
          document.getElementById(array[i][2]).innerHTML = array[i][3];
        }
        if (document.getElementById(array[49][2]).innerHTML === 'ь'
          || document.getElementById(array[49][2]).innerHTML === 'Ь') {
          document.getElementById(array[i][2]).innerHTML = array[i][4];
        }
      }
    }
  } else if (event.toElement.id === 'ShiftLeft'
    && document.querySelector('#ShiftLeft').classList.contains('changeShift') === true) {
    for (let i = 0; i < array.length; i += 1) {
      if (i !== 13 && i !== 14 && i !== 27 && i !== 28 && i !== 41 && i !== 42
        && i !== 54 && i !== 55 && i !== 56 && i !== 57 && i !== 58 && i !== 59 && i !== 63) {
        document.getElementById(array[i][2]).innerHTML = document.getElementById(array[i][2]).innerHTML.toLowerCase();
      }
      document.querySelector('#ShiftLeft').classList.remove('changeShift');
      if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5
        || i === 6 || i === 7 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12
        || i === 25 || i === 26 || i === 38 || i === 39 || i === 40 || i === 50 || i === 51 || i === 52) {
        if (document.getElementById(array[49][2]).innerHTML === 'm'
          || document.getElementById(array[49][2]).innerHTML === 'M') {
          document.getElementById(array[i][2]).innerHTML = array[i][0];
        }
        if (document.getElementById(array[49][2]).innerHTML === 'ь'
          || document.getElementById(array[49][2]).innerHTML === 'Ь') {
          document.getElementById(array[i][2]).innerHTML = array[i][1];
        }
      }
    }
  }
});


keyboardBuilder(array);
