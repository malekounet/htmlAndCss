

    let person = document.getElementById('person');
    let montagne = document.getElementById('mont');
    let ciel = document.getElementById('ciel');


window.addEventListener('scroll', function(){
    let val = window.scrollY;
    person.style.top = val * 0.5 + "px";
})