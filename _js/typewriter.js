var container = document.getElementById('changeText');

var things = ['I write code on the Internet...', 'The web is my passion, and I want to make a difference'];
var t = -1;
var thing = '';
var message = container.innerHTML;
var mode = 'write';
var delay = 700;

function updateText(txt) {
  container.innerHTML = txt;
}

function tick() {

  //WITHOUT LOOP
  /*if (container.innerHTML.length == 0) {
    t++;
    thing = things[t];
    message = '';
    mode = 'write';
  }*/

  //WITH LOOP
  if (container.innerHTML.length == 0) {
    t++;
    thing = things[Math.floor(Math.random() * things.length)];
    message = '';
    mode = ‘write’;
  }

  switch (mode) {
    case 'write':
      message += thing.slice(0, 1);
      thing = thing.substr(1);

      updateText(message);

      if (thing.length === 0 && t === (things.length - 1)) {
        window.clearTimeout(timeout);
        return;
      }

      if (thing.length == 0) {
        mode = 'delete';
        delay = 500;
      } else {
        delay = 32 + Math.round(Math.random() * 40);
      }

      break;

    case 'delete':
      message = message.slice(0, -1);
      updateText(message);

      if (message.length == 0) {
        mode = 'write';
        delay = 500;
      } else {
        delay = 32 + Math.round(Math.random() * 100);
      }
      break;
  }

  timeout = window.setTimeout(tick, delay);
}

var timeout = window.setTimeout(tick, delay);
