import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectTemplate from './components/ProjectTemplate'
import ProjectHeader from './components/ProjectHeader'

// Find the placeholder elements on your existing website
const headerRoot = document.getElementById('react-header-container')
const footerRoot = document.getElementById('react-footer-container')
const projectheaderRoot = document.querySelectorAll('.projectheader')
const designprojectRoot = document.getElementById('designprojectContainer')
const devprojectRoot = document.getElementById('devprojectContainer')

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

if (projectheaderRoot) {
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
  })
}

if (designprojectRoot) {
  ReactDOM.createRoot(designprojectRoot).render(
    <React.StrictMode>
      <ProjectTemplate
        projecturl="DecisionEvaluations.html"
        projectid="decisionevaluationsproject"
        projectname="Booz Allen Hamilton Case Studies"
        dates="2025-2026"
        stickername="NDA"
        status="Shipped"
        projectdescription="Created a new feature for accessing and editing attorney performance reviews."
        alt1="Mural"
        alt2="Figma"
      />

      <ProjectTemplate
        projecturl="Hearing.html"
        projectid="hearingproject"
        projectname="Booz Allen Hamilton Case Study"
        dates="2024-2025"
        stickername="NDA"
        status="Shipped"
        projectdescription="Created a new queue for tracking Veteran hearings more efficiently. Enhanced scheduling workflows to prevent
        erroneous or double booking of Veteran hearings. "
        alt1="Mural"
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
        alt1="Mural"
        alt2="Figma"
      />

      <ProjectTemplate
        projecturl="Correspondence.html"
        projectid="correspondenceproject"
        projectname="Booz Allen Hamilton Case Study"
        dates="2022-???"
        stickername="NDA"
        status="On Hold"
        projectdescription="Created a new mail tracking workflow for Veteran Appeals."
        alt1="Mural"
        alt2="Figma"
      />
      <ProjectTemplate
        projecturl="DesignSystem.html"
        projectid="designsystemproject"
        projectname="Booz Allen Hamilton Case Studies"
        stickername="NDA"
        projectdescription="Enhanced and maintained a VA Design system based library with over 100 components through the use of layout features, variables, components, and AI."
        alt1="Mural"
        alt2="Figma"
      />
     
      <ProjectTemplate
        projecturl="reach4help.html"
        projectid="reach4helpproject"
        projectname="Reach 4 Help"
        projectdescription="Designed a mobile app version of browser application for Reach4Help, a nonprofit dedicated to connecting users to aid & resources for disaster relief."
        alt1="Mural"
        alt2="Figma"
      />
      {/*<ProjectTemplate
        projecturl="jargon.html"
        projectid="jargonproject"
        projectname="Jargon"
        projectdescription="Designed a gamified, language learning app for my Google UX certifcation."
        tool1="/Images/Mural.svg"
        alt1="Mural"
        tool2="/Images/FigmaLogo.svg"
        alt2="Figma"
      />*/}
      

    </React.StrictMode>
  )
}

if (devprojectRoot) {
  ReactDOM.createRoot(devprojectRoot).render(
    <React.StrictMode>
  
      <ProjectTemplate
        projecturl="powerapp.html"
        projectid="xdappproject"
        projectname="X&D Advisor Hub Dashboard"
        projectdescription=" Designed and developed a gamified, advisorship tracking application to help increase member aquistion and engagement."
        alt1="ChatGPT"
        alt2="Sharepoint"
        alt3="Powerapps"
        alt4="Powerautomate"
        alt5="Figma"
      />
      <ProjectTemplate
        projecturl="onboarding.html"
        projectid="onboardingproject"
        projectname="Onboarding Guide"
        projectdescription="Designed and prototyped a interactive onboarding flow, as well as created a companion glossary with PowerApps, that decreased onboarding time."
        alt1="ChatGPT"
        alt2="Sharepoint"
        alt3="Powerapps"
        alt4="Figma"
      />

      <ProjectTemplate
        projecturl="plugins.html"
        projectid="datagenproject"
        projectname="Dummy Data Generator"
        projectdescription="Coded a figma plugin for generating dummy data appropriate for designs under the Veterans Affairs portfolio. Distributed and tested across teams of more than twenty UX designers. Increased fidelity of wires when handing off to developers."
        alt1="ChatGPT"
        alt2="VS Code"
        alt3="Github"
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
        alt1="ChatGPT"
        alt2="VS Code"
        alt3="Github"
        alt4="Figma"
      />

    </React.StrictMode>
  )
}

