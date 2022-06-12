var cost = document.getElementsByClassName("cost");
var nameProduct = document.getElementsByClassName('nameproduct')
var checkAll = document.getElementById("checkall");
var checkS = document.getElementsByClassName("check");
var checkInput = document.querySelectorAll('input[type="number"]');
var thanhTiens = document.getElementsByClassName('thanhtien');
var tongTiens = document.getElementById('tongtien');
var filter = document.getElementById('filter');

function checkAlls() {
  for (let i = 0; i <= checkS.length; i++) {
    if (checkAll.checked == true) {
      checkS[i].checked = true;
      checkInput[i].disabled = false;
      nameProduct[i].style.color = 'red'
    } else {
      checkS[i].checked = false;
      checkInput[i].disabled = true;
      nameProduct[i].style.color = 'black'
    }
  }
}

function check(){
    for(let i = 0; i < checkS.length; i++){
        if(checkS[i].checked == true){
            checkInput[i].disabled = false;
            nameProduct[i].style.color = 'red'
        }else{
            checkInput[i].disabled = true;
            nameProduct[i].style.color = 'black'
        }
    }
}

for(let i = 0; i < checkS.length; i++){
    checkInput[i].onchange = function thanhTien(){
        thanhTiens[i].innerHTML = Number(cost[i].innerHTML)*Number(checkInput[i].value)
        tongTien();
    }
}

function tongTien(){
    var sum = 0;
    for(let i = 0; i < thanhTiens.length; i++){
        sum += Number(thanhTiens[i].innerHTML)
    }
    tongTiens.innerHTML = sum
}

function filters(){
    for(let i = 0; i < checkS.length; i++){
        if(filter.value == 0){
                nameProduct[i].style.color = 'black'
                checkS[i].checked = false
                checkInput[i].disabled = true;
        }else if(filter.value == 1){
            if(Number(cost[i].innerHTML) < 100){
                nameProduct[i].style.color = 'red'
                checkS[i].checked = true
                checkInput[i].disabled = false;
            }else{
                nameProduct[i].style.color = 'black'
                checkS[i].checked = false
                checkInput[i].disabled = true;
            }
        }else if(filter.value == 2){
            if(Number(cost[i].innerHTML) >= 100 & Number(cost[i].innerHTML) <= 500){
                nameProduct[i].style.color = 'red'
                checkS[i].checked = true
                checkInput[i].disabled = false;
            }else{
                nameProduct[i].style.color = 'black'
                checkS[i].checked = false
                checkInput[i].disabled = true;
            }
        }else if(filter.value == 3){
            if(Number(cost[i].innerHTML) > 500){
                nameProduct[i].style.color = 'red'
                checkS[i].checked = true
                checkInput[i].disabled = false;
            }else{
                nameProduct[i].style.color = 'black'
                checkS[i].checked = false
                checkInput[i].disabled = true;
            }
        }
        tongTiens.innerHTML = '0'
        checkInput.innerHTML = '0'
        thanhTiens[i].innerHTML = '0'
    }
}
