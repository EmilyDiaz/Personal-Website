let resumebttn=document.getElementById("resume");
let imgdefault=document.getElementById("imgdefault");
let imghover=document.getElementById("imghover");
let boozallenbutton=document.getElementById("boozallenbttn")



resumebttn.addEventListener("mouseover",()=>{
    imgdefault.hidden=true;
    imghover.hidden=false;
})

resumebttn.addEventListener("mouseleave",()=>{
    imgdefault.hidden=false;
    imghover.hidden=true;
})

boozallenbutton.addEventListener("click",()=>{
   location.replace('BoozAllenCaseStudy.html')
})