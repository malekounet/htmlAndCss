

    let person = document.getElementById('person');
    let montagne = document.getElementById('mont');
    let ciel = document.getElementById('ciel');


window.addEventListener('scroll', function(){
    let val = window.scrollY;
    console.log(val)
    person.style.top = val * 0.2 + "px";
    ciel.style.left = (-val * 0.2) + "px";
    montagne.style.left = -val * 0.1 + "px";
})