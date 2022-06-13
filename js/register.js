var checkMasv = checkHoten = checkEmail = checkGT = checkSothich = checkQT = checkGhiChu = false;
var maSv = document.getElementById('masv')
var hoTen = document.getElementById('hoten')
var email = document.getElementById('email')
var gioiTinh = document.getElementsByName('gioitinh')
var soThich = document.getElementsByClassName('sthich')
var quocTich = document.getElementById('quoctich')
var ghiChu = document.getElementById('ghichu')
var errMessage = document.getElementsByClassName('errMessage');
var regRexEmail = /\S+@\S+\.\S+/
function dangKy(e){
    e.preventDefault();
    if(maSv.value.length == 0){
        errMessage[0].innerHTML = '(*)'
        errMessage[0].style.color = 'red'
    }else{
        errMessage[0].innerHTML = ''
        checkMasv = true
    }

    if(hoTen.value.length == 0){
        errMessage[1].innerHTML = '(*)'
        errMessage[1].style.color = 'red'
    }else{
        errMessage[1].innerHTML = ''
        checkHoten = true
    }

    if(email.value.length == 0){
        errMessage[2].innerHTML = '(*)'
        errMessage[2].style.color = 'red'
    }else if(!email.value.match(regRexEmail)){
        errMessage[2].innerHTML = 'Ex: user@example.domain'
        errMessage[2].style.color = 'red'
    }else{
        errMessage[2].innerHTML = ''
        checkEmail = true
    }

    if(gioiTinh[0].checked != true & gioiTinh[1].checked != true){
        errMessage[3].innerHTML = '(*)'
        errMessage[3].style.color = 'red'
    }else{
        errMessage[3].innerHTML = ''
        checkGT = true
    }

    var flag=0;
    for(var i = 0; i< soThich.length; i++){
        if(soThich[i].checked == true){
            flag++;
        }
    }
    if(flag == 0){
        errMessage[4].innerHTML = '(*)'
        errMessage[4].style.color = 'red'
    }else{
        errMessage[4].innerHTML = ''
        checkSothich = true
    }

    if(quocTich.value == 0){
        errMessage[5].innerHTML = '(*)'
        errMessage[5].style.color = 'red'
    }else{
        errMessage[5].innerHTML = ''
        checkQT = true
    }

    if(ghiChu.value.length == 0){
        errMessage[6].innerHTML = '(*)'
        errMessage[6].style.color = 'red'
    }else if(ghiChu.value.length > 200){
        errMessage[6].innerHTML = 'Vui lòng nhập dưới 200 kí tự!'
        errMessage[6].style.color = 'red'
    }else{
        errMessage[6].innerHTML = ''
        checkGhiChu = true
    }

    if(checkMasv & checkHoten & checkEmail & checkGT & checkSothich & checkQT & checkGhiChu){
        document.getElementById('form').reset();
        alert('Đăng ký thành công!')
        checkMasv = checkHoten = checkEmail = checkGT = checkSothich = checkQT = checkGhiChu = false
    }
}
