var arr = ["./images/character1.jpg","./images/character2.jpg","./images/character3.jpg","./images/character4.jpg"]
var index = 0;
function next(){
    if(index == arr.length-1){
        index = 0
    }else{
        index++
    }

    document.getElementById('image').src = arr[index]
    document.getElementById('caption').innerText = 'Ảnh ' + (index + 1) + '/' + (arr.length)
}

function previous(){
    if(index == 0){
        index = arr.length - 1
    }else{
        index--
    }

    document.getElementById('image').src = arr[index]
    document.getElementById('caption').innerText = 'Ảnh ' + (index + 1) + '/' + (arr.length)
}