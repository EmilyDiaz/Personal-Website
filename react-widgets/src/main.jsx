import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectTemplate from './components/ProjectTemplate'
import ProjectHeader from './components/ProjectHeader'

// Find the placeholder elements on your existing website
const headerRoot = document.getElementById('react-header-container')
const footerRoot = document.getElementById('react-footer-container')
const projectheaderRoot=document.querySelectorAll('.projectheader')
const projectRoot = document.querySelector('.project-container')

// Mount components safely if the elements exist on the current page
if (headerRoot) {
  ReactDOM.createRoot(headerRoot).render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  )
}


if (footerRoot) {
  ReactDOM.createRoot(footerRoot).render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>
  )
}

if(projectheaderRoot){
projectheaderRoot.forEach((element) => {
  // Mount an independent React instance into each individual HTML wrapper
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <ProjectHeader
        projecttitleimg={element.dataset.titleimg}
        projectname={element.dataset.name}
        projectimg={element.dataset.img}
        alt={element.dataset.alt}
      />
    </React.StrictMode>
  )
})}

if (projectRoot) {
  ReactDOM.createRoot(projectRoot).render(
    <React.StrictMode>
      <ProjectTemplate
        projecturl="Correspondence.html"
        projectid="correspondenceproject"
        projectname="Booz Allen Hamilton Case Study"
        dates="2022-???"
        stickername="NDA"
        status="On Hold"
        projectdescription="Created a new mail tracking workflow for Veteran Appeals."
        tool1="/Images/Mural.svg"
        alt1="Mural"
        tool2="/Images/FigmaLogo.svg"
        alt2="Figma"
      />
      <ProjectTemplate
        projecturl="ReassignCases.html"
        projectid="reassigncasesproject"
        projectname="Booz Allen Hamilton Case Study"
        dates="2023-2024"
        stickername="NDA"
        status="Shipped"
        projectdescription="Enhancement of supervisor and employee workflows for Veteran Health Administration."
        tool1="/Images/Mural.svg"
        alt1="Mural"
        tool2="/Images/FigmaLogo.svg"
        alt2="Figma"
      />
       <ProjectTemplate
        projecturl="Hearing.html"
        projectid="hearingproject"
        projectname="Booz Allen Hamilton Case Study"
        dates="2024-2025"
        stickername="NDA"
        status="Shipped"
        projectdescription="Designed and have seen over a dozen projects to production deployment for a web-based application under for the Department of Veterans Affairs. Enhanced and maintained a design library with over 100 components."
        tool1="/Images/Mural.svg"
        alt1="Mural"
        tool2="/Images/FigmaLogo.svg"
        alt2="Figma"
      />
       <ProjectTemplate
        projecturl="DecisionEvaluations.html"
        projectid="decisionevaluationsproject"
        projectname="Booz Allen Hamilton Case Studies"
        dates="2025-2026"
        stickername="NDA"
        status="Shipped"
        projectdescription="Designed and have seen over a dozen projects to production deployment for a web-based application under for the Department of Veterans Affairs. Enhanced and maintained a design library with over 100 components."
        tool1="/Images/Mural.svg"
        alt1="Mural"
        tool2="/Images/FigmaLogo.svg"
        alt2="Figma"
      />
       <ProjectTemplate
        projecturl="DesignSystem.html"
        projectid="designsystemproject"
        projectname="Booz Allen Hamilton Case Studies"
        stickername="NDA"
        projectdescription="Designed and have seen over a dozen projects to production deployment for a web-based application under for the Department of Veterans Affairs. Enhanced and maintained a design library with over 100 components."
        tool1="/Images/Mural.svg"
        alt1="Mural"
        tool2="/Images/FigmaLogo.svg"
        alt2="Figma"
      />
      <ProjectTemplate
        projecturl="powerapp.html"
        projectid="xdappproject"
        projectname="X&D Advisor Hub Dashboard"
        projectdescription=" Designed and developed a gamified, advisorship tracking application to help increase member aquistion and engagement."
        tool1="/Images/Chat GPT.svg"
        alt1="ChatGPT"
        tool2="/Images/Sharepoint.svg"
        alt2="Sharepoint"
        tool3="/Images/Powerapps Logo.svg"
        alt3="Powerapps"
        tool4="/Images/Powerautomate.svg"
        alt4="Powerautomate"
        tool5="/Images/FigmaLogo.svg"
        alt5="Figma"
      />
      <ProjectTemplate
        projecturl="onboarding.html"
        projectid="onboardingproject"
        projectname="Onboarding Guide"
        projectdescription="Designed and prototyped a interactive onboarding flow, as well as created a companion glossary with PowerApps, that decreased onboarding time."
        tool1="/Images/Chat GPT.svg"
        alt1="ChatGPT"
        tool2="/Images/Sharepoint.svg"
        alt2="Sharepoint"
        tool3="/Images/Powerapps Logo.svg"
        alt3="Powerapps"
        tool4="/Images/FigmaLogo.svg"
        alt4="Figma"
      />
      <ProjectTemplate
        projecturl="reach4help.html"
        projectid="reach4helpproject"
        projectname="Reach 4 Help"
        projectdescription="Designed a mobile app version of browser application for Reach4Help, a nonprofit dedicated to connecting users to aid & resources for disaster relief."
        tool1="/Images/Mural.svg"
        alt1="Mural"
        tool2="/Images/FigmaLogo.svg"
        alt2="Figma"
      />
      <ProjectTemplate
        projecturl="jargon.html"
        projectid="jargonproject"
        projectname="Jargon"
        projectdescription="Designed a gamified, language learning app for my Google UX certifcation."
        tool1="/Images/Mural.svg"
        alt1="Mural"
        tool2="/Images/FigmaLogo.svg"
        alt2="Figma"
      />
      <ProjectTemplate
        projecturl="plugins.html"
        projectid="datagenproject"
        projectname="Dummy Data Generator"
        projectdescription="Coded a figma plugin for generating dummy data appropriate for designs under the Veterans Affairs portfolio. Distributed and tested across teams of more than twenty UX designers. Increased fidelity of wires when handing off to developers."
        tool1="/Images/Chat GPT.svg"
        alt1="ChatGPT"
        tool2="/Images/VS Code.svg"
        alt2="VS Code"
        tool3="/Images/Github.svg"
        alt3="Github"
        tool4="/Images/FigmaLogo.svg"
        alt4="Figma"
      />
      <ProjectTemplate
        projecturl="plugins.html"
        projectid="scannerproject"
        projectname="Prototype Variable Scanner"
        projectdescription=" Coded a figma plugin for quick and easy variable documentation used in advanced prototyping.
                            Distributed and tested across teams of more than twenty UX designers. Assisted with
                            collaboration
                            between designers."
        tool1="/Images/Chat GPT.svg"
        alt1="ChatGPT"
        tool2="/Images/VS Code.svg"
        alt2="VS Code"
        tool3="/Images/Github.svg"
        alt3="Github"
        tool4="/Images/FigmaLogo.svg"
        alt4="Figma"
      />

    </React.StrictMode>
  )
}
