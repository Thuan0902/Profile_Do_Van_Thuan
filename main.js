
var hiName = document.getElementById('name')
// hiName.innerHTML = nameHi.valueOf()



function btn(){
    var imgNui = document.querySelectorAll('.imgMou>img')
    imgNui[0].style.marginLeft = '-50%';
    imgNui[1].style.marginLeft = '100%';
    var btn = document.querySelector('.btn');
    btn.style.display = 'none'
    var headingWel = document.querySelector('.headingWel')
    headingWel.style.top = '10%'
    headingWel.style.left = '10%'
    headingWel.innerHTML = 'INFORMATION'

    setTimeout(function(){
        var slide2 = document.querySelector('.slide2')
            slide2.style.left = '5%'
    },1000)
};  






