//Header toggle
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer !','Back-End Developer !','Web Designer !'],
    typeSpeed:100,
    backspeed:100,
    backSDelay:2000,
    loop: true,
})