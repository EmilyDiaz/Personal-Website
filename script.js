let resumebttn=document.getElementById("resume");
let imgdefault=document.getElementById("imgdefault");
let imghover=document.getElementById("imghover");



resumebttn.addEventListener("mouseover",()=>{
    imgdefault.hidden=true;
    imghover.hidden=false;
})

resumebttn.addEventListener("mouseleave",()=>{
    imgdefault.hidden=false;
    imghover.hidden=true;
})