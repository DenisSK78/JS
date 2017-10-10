"use strict";
window.onload = function () {
    class Div {
        constructor() {
            this.height = 30;
            this.width = 30;
            this.name = name();
            elemDiv(this);
        }
    }

    class NewDiv extends Div {
        constructor(color) {
            super();
            color();
        }
    }

    let n=0;
    function name() {
        n++;
        return ('name'+n);
    }

    let color = function color(){
       	let Col ="#";
        let nab = "0123456789abcdef";
        for(let i=0; i<6; i++){
            Col=Col+nab[Math.floor(Math.random() * 16)];
        }
        return Col;
    };

    for (let i=0; i<300; i++){
        new NewDiv(color);
    }

    function elemDiv(arg) {
        let div = document.createElement('div');
        div.id=arg.name;
        document.body.appendChild(div);
        div.style.cssText="height : "+arg.height+"px; width : "+arg.width+"px";
        div.style.backgroundColor=color();
        console.log(arg);
    }

    let items = document.querySelectorAll('div');
    for (let i=0; i<items.length; i++){
        items[i].onclick=paint;
    }

    function paint() {
        this.style.backgroundColor==="gold"? this.style.backgroundColor=color():this.style.backgroundColor="gold";
    }
};

