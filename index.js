
let resumebttn = document.getElementById("resume");
let imgdefault = document.getElementById("imgdefault");
let imghover = document.getElementById("imghover");
let boozallenbutton = document.getElementById("boozallenbttn");
let boozallenimg = document.getElementById("boozallenimg");
let jargonproject = document.getElementById("jargonproject");
let jargonimage = document.getElementById("jargonimage");
let figmaplugin = document.getElementById("figmaplugin");
let figmaimg = document.getElementById("figmaimg");
let onboardingBttn=document.getElementById("onboardingflow")
let onboardingImg=document.getElementById("onboardingimg")
let xdapp = document.getElementById("xdapp");
let xdappimage = document.getElementById("xdappimg");
let imganimationover = document.querySelector(".imganimationover");
let imganimationleave = document.querySelector(".imganimationleave");

//logic for switching the image color for the download icon on the download resume button


  resumebttn.addEventListener("mouseover", () => {
    imgdefault.hidden = true;
    imghover.hidden = false;
  });

  resumebttn.addEventListener("mouseleave", () => {
    imgdefault.hidden = false;
    imghover.hidden = true;
  });
  //animation logic for the project covers on the home page
  //design projects
  ProjectAnimation(boozallenbutton, boozallenimg);
  ProjectAnimation(jargonproject, jargonimage);
  ProjectAnimation(figmaplugin, figmaimg);
  ProjectAnimation(xdapp, xdappimage);
  ProjectAnimation(onboardingBttn,onboardingImg)

  //nav logic for the project buttons
  navButton(boozallenbutton,"BoozAllenCaseStudy.html")
  navButton(xdapp,"powerapp.html")
  navButton(jargonproject,"jargon.html")
  navButton(onboardingBttn,"onboarding.html")



function ProjectAnimation(buttonname, imgname) {
  buttonname.addEventListener("mouseover", () => {
    imgname.classList.add('imganimationover');
    imgname.classList.remove('imganimationleave')
  });
  buttonname.addEventListener("mouseleave", () => {
    imgname.classList.add('imganimationleave');
    imgname.classList.remove('imganimationover')
  });
}

function navButton(bttn,link){
  bttn.addEventListener("click",()=>{
    location.href=link
  })
}