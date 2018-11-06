const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;
  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

  const itemListi = items.getElementsByTagName("li");
  for(let i = 0; i < itemListi.length; i++) {
    itemListi[i].children[0].addEventListener('click', () => {
        finish(itemListi[i]);
    });
  }

  for(let i = 0; i < itemListi.length; i++) {
    itemListi[i].children[1].addEventListener('click', () => {
        edit(itemListi[i].children[1]);
    });
  }

  for(let i = 0; i < itemListi.length; i++) {
    itemListi[i].children[2].addEventListener('click', () => {
        deleteItem(itemListi[i]);
    });
  }
    
  }

  function formHandler(e) {
    e.preventDefault();

    const p = document.createElement('li');
    const inputInput = document.createElement('input');
    const inputSpan = document.createElement('span');
    const inputButton = document.createElement('button');
    
    p.setAttribute('class', 'item');

    inputInput.setAttribute('type', 'checkbox');
    inputInput.setAttribute('class', 'item__checkbox')
    inputSpan.setAttribute('class', 'item__text');
    inputButton.setAttribute('class', 'item__button');

    const eyda = document.createTextNode('Eyða');
    var texti = document.getElementsByClassName('form__input')[0].value;
    inputText = document.createTextNode(texti);

    inputButton.appendChild(eyda);
    inputSpan.appendChild(inputText);
    p.appendChild(inputInput);
    p.appendChild(inputSpan);
    p.appendChild(inputButton);

    
    var fun = document.body.getElementsByClassName('items')[0].appendChild(p);
    inputInput.addEventListener('click', () => {
        finish(p);
    });

    inputSpan.addEventListener('click', () => {
        edit(inputSpan);
    });

    inputButton.addEventListener('click', () => {
        deleteItem(p);
    });
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
      e.getElementsByClassName('item__text')[0].style.textDecoration = 'line-through';
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
      var texti = e.innerText;
      const foreldri = e.parentNode;

      foreldri.removeChild(e)

      const inputInput = document.createElement('input');
      const p = foreldri.getElementsByClassName('item__button')[0];

      inputInput.style.width = '100%';
      inputInput.style.padding = '7px';
      inputInput.setAttribute('type', 'text');
      inputInput.setAttribute('value', texti);

      foreldri.insertBefore(inputInput, p);

      var fun = e.getElementsByClassName('item__text')[0];

        inputInput.addEventListener('keyup', function(g) {
            g.preventDefault();
            if (g.keyCode === 13) {
                commit(inputInput);
            }
        });
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    const foreldri = e.parentNode;
    
    foreldri.removeChild(e);

    const p = foreldri.getElementsByClassName('item__button')[0];
    const inputSpan = document.createElement('span');

    inputSpan.setAttribute('class', 'item__text');
    inputSpan.innerText = e.value;
    foreldri.insertBefore(inputSpan, p);
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    document.getElementsByClassName('items')[0].removeChild(e);
  }

  return {
    init: init
  }
})();