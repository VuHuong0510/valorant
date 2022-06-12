var arr = ['./images/v1.jpg','./images/v2.jpg','./images/v3.jpg','./images/v4.jpg','./images/v5.jpg']
var index = 0
var title = document.getElementById('titleslide')
var listCharacter = ['TAZXTRO','XOMBIIE','SUFIAN','RIVEN','APEX']
function loadImages(){
    document.getElementById('imgslide').src = arr[index]
    title.innerHTML = listCharacter[index]
    index++
    if(index == arr.length){
        index = 0
    }
    setTimeout('loadImages()',3000)
}

var crt1 = document.getElementById('crt1')
var crt2 = document.getElementById('crt2')
var crt3 = document.getElementById('crt3')
var crt4 = document.getElementById('crt4')
var listCrt = ['./images/character1.jpg','./images/character2.jpg','./images/character3.jpg','./images/character4.jpg']
var listCrtClone  = ['./images/character1_1.jpg','./images/character2_1.jpg','./images/character3_1.jpg','./images/character4_1.jpg']
function o1(){
    crt1.src = listCrtClone[0]
}
function o1_1(){
    crt1.src = listCrt[0]
}

function o2(){
    crt2.src = listCrtClone[1]
}
function o2_1(){
    crt2.src = listCrt[1]
}

function o3(){
    crt3.src = listCrtClone[2]
}
function o3_1(){
    crt3.src = listCrt[2]
}

function o4(){
    crt4.src = listCrtClone[3]
}
function o4_1(){
    crt4.src = listCrt[3]
}
