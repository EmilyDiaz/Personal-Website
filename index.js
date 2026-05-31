
const resumebttn = document.getElementById("resume");
const imgdefault = document.getElementById("imgdefault");
const imghover = document.getElementById("imghover");
const boozallenproject = document.getElementById("boozallenproject");
const jargonproject = document.getElementById("jargonproject");
const datagenproject = document.getElementById("datagenproject");
const onboardingproject = document.getElementById("onboardingproject")
const xdappproject = document.getElementById("xdappproject");
const scannerproject = document.getElementById("scannerproject");
const reach4helpproject = document.getElementById("reach4helpproject")
const imganimationover = document.querySelector(".imganimationover");
const imganimationleave = document.querySelector(".imganimationleave");
const welcomeMessageEl = document.getElementById("welcomeMessage");

/*const welcomeMessageArray = ["Hi, I'm Emily!", "Hola, soy Emily!"];

function welcomeMessage() {
 for(let i=0;i<welcomeMessageArray.length;i++){
  welcomeMessageEl.textContent=welcomeMessageArray[i]
 }
 return welcomeMessageEl.textContent
}

setInterval(welcomeMessage,2000)*/


//logic for switching the image color for the download icon on the download resume button


/* resumebttn.addEventListener("mouseover", () => {
   imgdefault.hidden = true;
   imghover.hidden = false;
 });

 resumebttn.addEventListener("mouseleave", () => {
   imgdefault.hidden = false;
   imghover.hidden = true;
 });*/
//animation logic for the project covers on the home page
//design projects
ProjectAnimation(boozallenproject, "BoozAllenCaseStudy.html");
ProjectAnimation(jargonproject, "jargon.html");
ProjectAnimation(xdappproject, "powerapp.html");
ProjectAnimation(datagenproject, "plugins.html");
ProjectAnimation(onboardingproject, "onboarding.html");
ProjectAnimation(scannerproject, "plugins.html");
ProjectAnimation(reach4helpproject, "reach4help.html")





function ProjectAnimation(projectname, link) {
  projectname.addEventListener("mouseover", () => {
    projectname.classList.add('imganimationover');
    projectname.classList.remove('imganimationleave')
  });
  projectname.addEventListener("mouseleave", () => {
    projectname.classList.add('imganimationleave');
    projectname.classList.remove('imganimationover')
  });
  projectname.addEventListener("click", () => {
    location.href = link
  })
}
