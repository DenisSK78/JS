"use strict";
window.onload = function () {

    function color(){
        let Col ="#";
        let nab = "0123456789abcdef";
        for(let i=0; i<6; i++){
            Col=Col+nab[Math.floor(Math.random() * 16)];
        }
        return Col;
    }

    let divB=document.getElementById('bigBlock');
    let n=0;

    for (let i=0; i<400; i++){
        let divS = document.createElement('div');
        divS.className='sBlock';
        divS.id=name();
        divB.appendChild(divS);
    }

    for (let i=0; i<7; i++){
        let divB=document.getElementById('colour');
        let divS = document.createElement('div');
        divS.className='ColsBlock';
        divS.id=name();
        let idC=divS.id;
        divB.appendChild(divS);
        document.getElementById(idC).style.backgroundColor=color();
    }

    function name() {
        n++;
        return ('name'+n);
    }

    let colP=document.querySelectorAll('.ColsBlock');
    let colorP;
    for (let i=0; i<colP.length; i++){
        colP[i].onclick=function(){
        colorP=this.style.backgroundColor;
        };
    }

    let listP = document.querySelectorAll('.sBlock');
    for (let j=0; j<listP.length; j++){
        listP[j].onclick=function () {
            if(colorP !=null)
                this.style.backgroundColor===colorP?this.style.backgroundColor='':this.style.backgroundColor=colorP;
        };
    }

    let fClean=document.getElementById('clean');
    fClean.onclick=function () {
        for (let j=0; j<listP.length; j++) {
            listP[j].style.backgroundColor = '';
        }
    }
};

