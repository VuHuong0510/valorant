var arr = ['./images/v1.jpg','./images/v2.jpg','./images/v3.jpg','./images/v4.jpg','./images/v5.jpg']
var index = 0

function loadImages(){
    document.getElementById('imgslide').src = arr[index]
    index++
    if(index == arr.length-1){
        index = 0
    }
    setTimeout('loadImages()',1500)
}
