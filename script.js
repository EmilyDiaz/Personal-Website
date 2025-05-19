let home=document.getElementById("homepage");
let about=document.getElementById("aboutmepage");

about.addEventListener("click",()=>{
about.classList.add('mySelectedPage')
home.classList.remove('mySelectedPage')
}
)