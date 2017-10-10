"use strict";
window.onload = function () {

function arr() {
    let arr1=[];
    let x=-20;
    for (let i=0; i<30; i++){
       let y = Math.floor(Math.random() * (400 - 20)) + 20;
       x = x+20;
       arr1[i]=[x,y];
    }
       return arr1;
}

let arr1=arr();
console.log(arr1);

class Block {
    constructor(h, w, name, put, x, y) {
        this.x=x;
        this.y=y;
        this.h = h;
        this.w = w;
        this.name = name;
        this.put=put;
        fBlock(this);
    }
}

let fBlock = function putBlock(obj) {
    if(obj.put===1){
        let item = document.createElement('div');
        item.className=obj.name;
        document.body.appendChild(item);
        item.style.cssText="height : "+obj.h+"px; width : "+obj.w+"px";
        console.log(item);
    }else {
        let item = document.createElement('div');
        item.className=obj.name;
        item.id=fNameDiv();
        let idD=item.id;
        let bigDiv=document.querySelector('.bigDiv');
        bigDiv.appendChild(item);
        let sDiv = document.getElementById(idD);
        item.style.cssText="height : "+obj.h+"px; width : "+obj.w+"px;";
        sDiv.style.marginLeft=(obj.x+'px');
        sDiv.style.marginTop=(obj.y+'px');
    }
};

let nameDiv=0;
function fNameDiv() {
    nameDiv++;
    return ('name'+nameDiv);
}

    let bigDiv1=new Block(400, 600, 'bigDiv', 1);
    console.log(bigDiv1);

    for (let j=0; j<30; j++){
        let h=(400-arr1[j][1]-3);
        new Block(h, 15, 'sDiv', 2, arr1[j][0]+2, arr1[j][1]);
    }
};

