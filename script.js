


let resumebttn = document.getElementById("resume");
let imgdefault = document.getElementById("imgdefault");
let imghover = document.getElementById("imghover");
/* id captures for home page animations*/
let boozallenbutton = document.getElementById("boozallenbttn");
let boozallenimg = document.getElementById("boozallenimg");
let reach4helpproject = document.getElementById("reach4helpproject");
let reach4helpimage = document.getElementById("reach4helpimage");
let jargonproject = document.getElementById("jargonproject");
let jargonimage = document.getElementById("jargonimage");
let figmaplugin = document.getElementById("figmaplugin");
let figmaimg = document.getElementById("figmaimg");
let xdapp = document.getElementById("xdapp");
let xdappimage = document.getElementById("xdappimg");
let imganimationover = document.querySelector(".imganimationover");
let imganimationleave = document.querySelector(".imganimationleave");
let imggrow = document.querySelector(".imggrow");
let imgnormal = document.querySelector(".imgnormal")
/* booz allen case studies logic*/
let probsol = document.querySelector(".probsol");
let bahproblem1 = document.getElementById("bahproblem1");
let bahproblem2 = document.getElementById("bahproblem2");
let bahproblem3 = document.getElementById("bahproblem3");
let mailtracking = document.getElementById("mailtracking");
let issueapproval = document.getElementById("issueapproval");
let decisioneval = document.getElementById("decisioneval");
let casestudybttn = document.querySelectorAll(".casestudybttn");

let otherprojects = document.querySelector(".otherprojectsdiv");
/* Logic for zooming in images */
let imgzoom = document.querySelectorAll(".componentimages img,#xduserflow img");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalimg");
var span = document.getElementsByClassName("close")[0];
var caption = document.getElementById("caption");
let nextbutton = document.getElementById("nextbutton");
let previousbutton = document.getElementById("previousbutton");



//logic for switching the image color for the download icon on the download resume button

if (resumebttn && imgdefault && imghover && casestudybttn) {

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

  //nav logic for the project buttons
  boozallenbutton.addEventListener("click", () => {
    location.href = "BoozAllenCaseStudy.html";
  });
  xdapp.addEventListener("click", () => {
    location.href = "powerapp.html";
  });
  jargonproject.addEventListener("click", () => {
    location.href = "jargon.html"
  })

};
//image modal work
let currentIndex = 0;
const imageSources = Array.from(imgzoom).map(img => img.src);
const imageAlts = Array.from(imgzoom).map(img => img.alt);

imgzoom.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(index);
  });

});



nextbutton.addEventListener("click", showNextImage);
previousbutton.addEventListener("click", showPreviousImage);

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.height = "auto"
}

//When the user clicks outside of the modal, close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto"
  }
}


//need to figure out how to make the stuff below into a function so its neater.
if (probsol && bahproblem1 && bahproblem2 && bahproblem3) {
  bahproblem1.addEventListener("click", () => {
    mailtracking.style.display = "block";
    probsol.style.gridTemplateColumns = "2fr 1fr 1fr";
    issueapproval.style.display = "none";
    decisioneval.style.display = "none";
    setActiveProblem(bahproblem1, [bahproblem2, bahproblem3]);
  });

  bahproblem2.addEventListener("click", () => {
    mailtracking.style.display = "none";
    decisioneval.style.display = "none";
    probsol.style.gridTemplateColumns = "1fr 2fr 1fr";
    issueapproval.style.display = "block";
    setActiveProblem(bahproblem2, [bahproblem1, bahproblem3]);
  });

  bahproblem3.addEventListener("click", () => {
    mailtracking.style.display = "none";
    issueapproval.style.display = "none";
    probsol.style.gridTemplateColumns = "1fr 1fr 2fr";
    decisioneval.style.display = "block";
    setActiveProblem(bahproblem3, [bahproblem1, bahproblem2]);
  })
}
//for section beneath each project page to quickly navigate to other projects

if (otherprojects && boozallenimg && jargonimage) {
  SetOtherProjects(boozallenimg, "BoozAllenCaseStudy.html");
  SetOtherProjects(jargonimage, "jargon.html")
}
if (otherprojects && xdappimage && jargonimage) {
  SetOtherProjects(xdappimage, "powerapp.html");
  SetOtherProjects(jargonimage, "jargon.html")
}
if (otherprojects && boozallenimg && xdappimage) {
  SetOtherProjects(boozallenimg, "BoozAllenCaseStudy.html");
  SetOtherProjects(xdappimage, "powerapp.html")
}

//functions

function setActiveProblem(active, others) {
  active.classList.add("active");
  others.forEach(other => {
    other.classList.remove("active");
  }
  );
}


function SetOtherProjects(project, htmllink) {
  project.addEventListener("mouseover", () => {
    project.classList.add('imggrow');
    project.classList.remove('imgnormal')
  });
  project.addEventListener("mouseleave", () => {
    project.classList.add('imgnormal');
    project.classList.remove('imggrow')
  });
  project.addEventListener("click", () => {
    location.href = htmllink
  })
}

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

// Function to open the modal and set the initial image
function openModal(index) {
  currentIndex=index
  modal.style.display = 'block';
  modalImg.src = imageSources[currentIndex];
  caption.innerHTML = imageAlts[currentIndex];
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
  if(currentIndex==0){
    previousbutton.style.display="none"
  } else {
    previousbutton.style.display="block"
  };
  if(currentIndex==(imageSources.length-1)){
    nextbutton.style.display="none"
  } else {
    nextbutton.style.display="block"
  }
};

// Function to show the next image
function showNextImage() {
  // Increment index. If at the end, loop back to the first image.
  currentIndex = (currentIndex + 1) % imageSources.length;
  modalImg.src = imageSources[currentIndex];
  if(currentIndex==0){
    previousbutton.style.display="none"
  } else {
    previousbutton.style.display="block"
  };
  if(currentIndex==(imageSources.length-1)){
    nextbutton.style.display="none"
  } else {
    nextbutton.style.display="block"
  }
};
function showPreviousImage() {
  currentIndex = (currentIndex - 1) % imageSources.length;
  modalImg.src = imageSources[currentIndex];
  if(currentIndex==0){
    previousbutton.style.display="none"
  } else {
    previousbutton.style.display="block"
  };
  if(currentIndex==(imageSources.length-1)){
    nextbutton.style.display="none"
  } else {
    nextbutton.style.display="block"
  }
}