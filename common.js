//logic for hex and cashew's sprites on the footer
const hexCanvas =  document.getElementById("hexCanvas")
hexCanvas.width=100;
hexImage = new Image();
hexImage.onload = () => {
  const hexCtx = hexCanvas.getContext("2d")
  hexCtx.imageSmoothingEnabled = false;
	hexCtx.drawImage(hexImage, 0, 0, 100, 100);
}
hexImage.src = "Personal-Website/Images/hexpixel.png"

hexCanvas.addEventListener("mouseover",()=>{
 hexImage.src = "Personal-Website/Images/hexpixel.gif"
})
hexCanvas.addEventListener("mouseleave",()=>{
 hexImage.src = "Personal-Website/Images/hexpixel.png"
})

const cashewCanvas =  document.getElementById("cashewCanvas")
cashewCanvas.width=100;
cashewImage = new Image();
cashewImage.onload = () => {
  const cashewCtx = cashewCanvas.getContext("2d")
  cashewCtx.imageSmoothingEnabled = false;
	cashewCtx.drawImage(cashewImage, 0, 10, 100, 100);
}
cashewImage.src = "Personal-Website/Images/cashewneutral.png"

cashewCanvas.addEventListener("mouseover",()=>{
 cashewImage.src = "Personal-Website/Images/cashewpet.png"
})
cashewCanvas.addEventListener("mouseleave",()=>{
 cashewImage.src = "Personal-Website/Images/cashewneutral.png"
})




/* id captures for home page animations*/
const projectdropdown=document.querySelector(".dropdown");
const dropdowncontent=document.querySelector(".dropdown-content");
let boozallenimg = document.getElementById("boozallenimg");
let jargonimage = document.getElementById("jargonimage");
let xdappimage = document.getElementById("xdappimg");
let imggrow = document.querySelector(".imggrow");
let imgnormal = document.querySelector(".imgnormal")
let cursorhover=document.querySelector(".cursorhover")


let otherprojects = document.querySelector(".otherprojectsdiv");
/* Logic for zooming in images */
let imgzoom = document.querySelectorAll(".componentimages img,#xduserflow img");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalimg");
var span = document.getElementsByClassName("close")[0];
var caption = document.getElementById("caption");
let nextbutton = document.getElementById("nextbutton");
let previousbutton = document.getElementById("previousbutton");

headerDropdown()
function headerDropdown(){
projectdropdown.addEventListener("mouseover",()=>{
  dropdowncontent.style.display="block"
});
projectdropdown.addEventListener("mouseleave",()=>{
  dropdowncontent.style.display="none"
});
}



//image modal work
let currentIndex = 0;
const imageSources = Array.from(imgzoom).map(img => img.src);
const imageAlts = Array.from(imgzoom).map(img => img.alt);
if(modal){
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
};

//When the user clicks outside of the modal, close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto"
  }
};

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
};

//functions

function SetOtherProjects(project, htmllink) {
  project.addEventListener("mouseover", () => {
    project.classList.add('imggrow');
    project.classList.remove('imgnormal');
    project.classList.add('cursorhover')
  
  });
  project.addEventListener("mouseleave", () => {
    project.classList.add('imgnormal');
    project.classList.remove('imggrow');
    project.classList.remove('cursorhover')
  });
  project.addEventListener("click", () => {
    location.href = htmllink
  })
};



// Function to open the modal and set the initial image
function openModal(index) {
  currentIndex = index
  modal.style.display = 'block';
  modalImg.src = imageSources[currentIndex];
  caption.innerHTML = imageAlts[currentIndex];
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
  if (currentIndex == 0) {
    previousbutton.style.display = "none"
  } else {
    previousbutton.style.display = "block"
  };
  if (currentIndex == (imageSources.length - 1)) {
    nextbutton.style.display = "none"
  } else {
    nextbutton.style.display = "block"
  }
};

// Function to show the next image
function showNextImage() {
  // Increment index. If at the end, loop back to the first image.
  currentIndex = (currentIndex + 1) % imageSources.length;
  modalImg.src = imageSources[currentIndex];
  caption.innerHTML=imageAlts[currentIndex];
  if (currentIndex == 0) {
    previousbutton.style.display = "none"
  } else {
    previousbutton.style.display = "block"
  };
  if (currentIndex == (imageSources.length - 1)) {
    nextbutton.style.display = "none"
  } else {
    nextbutton.style.display = "block"
  }
};
function showPreviousImage() {
  currentIndex = (currentIndex - 1) % imageSources.length;
  modalImg.src = imageSources[currentIndex];
  caption.innerHTML=imageAlts[currentIndex];
  if (currentIndex == 0) {
    previousbutton.style.display = "none"
  } else {
    previousbutton.style.display = "block"
  };
  if (currentIndex == (imageSources.length - 1)) {
    nextbutton.style.display = "none"
  } else {
    nextbutton.style.display = "block"
  }
}

