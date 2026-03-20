

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
let xdapp = document.getElementById("xd app");
let xdappimage = document.getElementById("XD app image");
let imganimationover = document.querySelector(".imganimationover");
let imganimationleave = document.querySelector(".imganimationleave");
/* booz allen case studies logic*/
let probsol = document.querySelector(".probsol");
let bahproblem1 = document.getElementById("bahproblem1");
let bahproblem2 = document.getElementById("bahproblem2");
let bahproblem3 = document.getElementById("bahproblem3");
let mailtracking = document.getElementById("mailtracking");
let issueapproval = document.getElementById("issueapproval");
let decisioneval = document.getElementById("decisioneval");
let casestudybttn = document.querySelectorAll(".casestudybttn");
/* Logic for zooming in images */
let imgzoom = document.querySelectorAll(".componentimages img");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalimg");
var span = document.getElementsByClassName("close")[0];


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
  boozallenbutton.addEventListener("mouseover", () => {
    boozallenimg.classList.add('imganimationover');
    boozallenimg.classList.remove('imganimationleave')
  });
  boozallenbutton.addEventListener("mouseleave", () => {
    boozallenimg.classList.add('imganimationleave');
    boozallenimg.classList.remove('imganimationover')
  });
  reach4helpproject.addEventListener("mouseover", () => {
    reach4helpimage.classList.add('imganimationover');
    reach4helpimage.classList.remove('imganimationleave')
  });
  reach4helpproject.addEventListener("mouseleave", () => {
    reach4helpimage.classList.add('imganimationleave');
    reach4helpimage.classList.remove('imganimationover')
  });
  jargonproject.addEventListener("mouseover", () => {
    jargonimage.classList.add('imganimationover');
    jargonimage.classList.remove('imganimationleave')
  });
  jargonproject.addEventListener("mouseleave", () => {
    jargonimage.classList.add('imganimationleave');
    jargonimage.classList.remove('imganimationover')
  });
  //non-design projects
  figmaplugin.addEventListener("mouseover", () => {
    figmaimg.classList.add('imganimationover');
    figmaimg.classList.remove('imganimationleave')
  });
  figmaplugin.addEventListener("mouseleave", () => {
    figmaimg.classList.add('imganimationleave');
    figmaimg.classList.remove('imganimationover')
  });
  xdapp.addEventListener("mouseover", () => {
    xdappimage.classList.add('imganimationover');
    xdappimage.classList.remove('imganimationleave')
  });
  xdapp.addEventListener("mouseleave", () => {
    xdappimage.classList.add('imganimationleave');
    xdappimage.classList.remove('imganimationover')
  });
  //nav logic for the project buttons
  boozallenbutton.addEventListener("click", () => {
    location.replace('BoozAllenCaseStudy.html');
  });
  xdapp.addEventListener("click", () => {
    location.replace('powerapp.html');
  });

};

//zoom logic for the images in the projects
imgzoom.forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%"

  });

});

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



function setActiveProblem(active, others) {
  active.classList.add("active");
  others.forEach(other => {
    other.classList.remove("active");
  }
  );
}


