document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.process-imgs img[alt]').forEach((img) => {
    const existingCaption = img.nextElementSibling;
    if (existingCaption && existingCaption.classList.contains('alt-caption')) {
      return;
    }

    const caption = document.createElement('p');
    caption.className = 'alt-caption';
    caption.textContent = img.alt;
    img.insertAdjacentElement('afterend', caption);
  });
});






/* Logic for zooming in images */
let imgzoom = document.querySelectorAll(".componentimages img,#xduserflow img");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalimg");
var span = document.getElementsByClassName("close")[0];
var caption = document.getElementById("caption");
let nextbutton = document.getElementById("nextbutton");
let previousbutton = document.getElementById("previousbutton");





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

