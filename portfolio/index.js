



window.addEventListener('load', () => {
  const correspondenceproject = document.getElementById("correspondenceproject");
  const reassigncasesproject = document.getElementById("reassigncasesproject");
  const decisionevaluationsproject = document.getElementById("decisionevaluationsproject");
  const hearingproject = document.getElementById("hearingproject");
  const designsystemproject = document.getElementById("designsystemproject");
  const jargonproject = document.getElementById("jargonproject");
  const datagenproject = document.getElementById("datagenproject");
  const onboardingproject = document.getElementById("onboardingproject");
  const xdappproject = document.getElementById("xdappproject");
  const scannerproject = document.getElementById("scannerproject");
  const reach4helpproject = document.getElementById("reach4helpproject");



  ProjectAnimation(reassigncasesproject);
  ProjectAnimation(correspondenceproject);
  ProjectAnimation(decisionevaluationsproject);
  ProjectAnimation(hearingproject);
  ProjectAnimation(designsystemproject);
  ProjectAnimation(jargonproject);
  ProjectAnimation(xdappproject);
  ProjectAnimation(datagenproject);
  ProjectAnimation(onboardingproject);
  ProjectAnimation(scannerproject);
  ProjectAnimation(reach4helpproject);

  const frogvideo = document.getElementById("frogvideo");
  const frogvideoPause = document.querySelector(".frogvideo__pause");
  if (frogvideo && frogvideoPause) {
    frogvideoPause.addEventListener("click", () => {
      if (frogvideo.paused) {
        frogvideo.play();
        frogvideoPause.setAttribute("aria-label", "Pause frog video");
        frogvideoPause.classList.remove("is-playing");
      } else {
        frogvideo.pause();
        frogvideoPause.setAttribute("aria-label", "Play frog video");
        frogvideoPause.classList.add("is-playing");
      }
    });
  }

});

function ProjectAnimation(projectname) {
  if (!projectname) return;

  projectname.addEventListener("mouseover", () => {
    projectname.classList.add('imganimationover');
    projectname.classList.remove('imganimationleave');
  });
  projectname.addEventListener("mouseleave", () => {
    projectname.classList.add('imganimationleave');
    projectname.classList.remove('imganimationover');
  });
}
