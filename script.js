
let a = 0;
let first = document.getElementById('first');
first.onclick = function () {
    let on = document.getElementById('but');
    let Text = "You clicked Firt button"
    on.innerHTML = Text;
}
first.onmousemove = function () {
    a++;
    this.style.width = 100 + 'px';
    this.style.height = 60 + 'px';
    first.onmouseleave = function () {
        a++;
        this.style.width = 70 + 'px';
        this.style.height = 50 + 'px';

    }
}

let b = 0;
let second = document.getElementById('second');
second.onclick = function () {
    let on = document.getElementById('but');
    let Text = "You clicked Second button"
    on.innerHTML = Text;
}
second.onmousemove = function () {
    b++;
    this.style.width = 100 + 'px';
    this.style.height = 60 + 'px';
    second.onmouseleave = function () {
        b++;
        this.style.width = 70 + 'px';
        this.style.height = 50 + 'px';
    }
}

let c = 0;
let third = document.getElementById('third');
third.onclick = function () {
    let on = document.getElementById('but');
    let Text = "You clicked Third button"
    on.innerHTML = Text;
}
third.onmousemove = function () {
    c++;
    this.style.width = 100 + 'px';
    this.style.height = 60 + 'px';
    third.onmouseleave = function () {
        c++;
        this.style.width = 70 + 'px';
        this.style.height = 50 + 'px';
    }

}










/* let a = 0;
first.onmousemove = function () {
    a++;
    this.style.width = 100 + 'px';
    first.onmouseleave = function () {
        a++;
        this.style.width = 70 + 'px';
    }
}
 */



/* let b = 0;
first.onmouseleave = function () {
    b++;
    this.style.width = 70 + 'px';
}
*/

/*  let c = 0;
first.onmouseleave = function () {
    b++;
    this.style.width = 70 + 'px';
}
let d = 0;
first.onmouseleave = function () {
    b++;
    this.style.width = 70 + 'px';
}
let i = 0;
first.onmouseleave = function () {
    b++;
    this.style.width = 70 + 'px';
} */