let resumebttn=document.getElementById("resume");
let imgdefault=document.getElementById("imgdefault");
let imghover=document.getElementById("imghover");
let boozallenbutton=document.getElementById("boozallenbttn");
let probsol=document.querySelector(".probsol");
let bahproblem1=document.getElementById("bahproblem1");
let bahproblem2=document.getElementById("bahproblem2");
let bahproblem3=document.getElementById("bahproblem3");
let mailtracking=document.getElementById("mailtracking");
let issueapproval=document.getElementById("issueapproval");
let decisioneval=document.getElementById("decisioneval");
let casestudybttn=document.querySelectorAll(".casestudybttn");
let imgzoom=document.querySelectorAll(".component img");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalimg");
var span = document.getElementsByClassName("close")[0];



if(resumebttn && imgdefault && imghover && casestudybttn) {

resumebttn.addEventListener("mouseover",()=>{
    imgdefault.hidden=true;
    imghover.hidden=false;
});

resumebttn.addEventListener("mouseleave",()=>{
    imgdefault.hidden=false;
    imghover.hidden=true;
});

boozallenbutton.addEventListener("click",()=>{
   location.replace('BoozAllenCaseStudy.html');
});
};
imgzoom.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


//need to figure out how to make the stuff below into a function so its neater.
if(probsol && bahproblem1 && bahproblem2 && bahproblem3) {
bahproblem1.addEventListener("click",()=>{
mailtracking.style.display="block";
probsol.style.gridTemplateColumns="2fr 1fr 1fr";
issueapproval.style.display="none";
decisioneval.style.display="none";
setActiveProblem(bahproblem1, [bahproblem2, bahproblem3]);
});

bahproblem2.addEventListener("click",()=>{
mailtracking.style.display="none";
decisioneval.style.display="none";
probsol.style.gridTemplateColumns="1fr 2fr 1fr";
issueapproval.style.display="block";
setActiveProblem(bahproblem2, [bahproblem1, bahproblem3]);
});

bahproblem3.addEventListener("click",()=>{
mailtracking.style.display="none";
issueapproval.style.display="none";
probsol.style.gridTemplateColumns="1fr 1fr 2fr";
decisioneval.style.display="block";
setActiveProblem(bahproblem3, [bahproblem1, bahproblem2]);
})
}



function setActiveProblem(active,others){
    active.classList.add("active");
    others.forEach(other => {
        other.classList.remove("active");
    }
    );
}


