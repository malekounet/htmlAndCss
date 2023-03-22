let atlas = document.getElementById("atlas");


let style = window.getComputedStyle(atlas);
let tops = style.getPropertyValue("top");
tops = parseInt(tops)

// console.log(document.styleSheets[0].rules[4].style.setProperty("top", "700px"))
window.addEventListener("scroll", function(){
    document.styleSheets[0].rules[4].style.setProperty("top", (tops - this.window.scrollY*0.4) + "px")
});