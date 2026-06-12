
const welcomeMessageEl = document.getElementById("welcomeMessage");


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
