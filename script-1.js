var screen = document.querySelector('screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addeventlistener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext === 'x') {
            btntext = '*';
        }

        if (btntext === 'div') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() { screen.value = math.sin(screen.value);}

function cos() { screen.value = math.cos(screen.value);}

function tan() { screen.value = math.tan(screen.value);}

function pow() { screen.value = math.pow(screen.value);}

function sqrt() { screen.value = math.sqrt(screen.value);}

function log() { screen.value = math.log(screen.value);}

function pi() { screen.value = 3.14159265359;}

function e() { screen.value = 2.71828182846;}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i < num; i++) {
        f = f * i;
    }

    i = i - 1;
    screen.value = f;
}

function backspc() {
    screen.value = screen.value-substr(0, screen.value.length -1);
}