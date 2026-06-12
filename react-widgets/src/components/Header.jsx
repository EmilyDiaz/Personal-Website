export default function Header(){
    return( 
        <>
        <a href="index.html" id="homepage">
            <h4> EMILY DIAZ-FUSCO</h4>
        </a>
        <nav>
            <div className="dropdown" tabIndex="0">
                <a id="project-navbar" tabIndex="0">Projects</a>
                <div className="dropdown-content" tabIndex="0">
                    <ul>
                        <li>
                            <a href="DecisionEvaluations.html">Decision Evaluations (BAH)</a>
                        </li>
                        <li>
                            <a href="Hearing.html">Hearings (BAH)</a>
                        </li>
                        <li>
                            <a href="ReassignCases.html">Reassign Cases (BAH)</a>
                        </li>
                        <li>
                            <a href="Correspondence.html">Correspondence (BAH)</a>
                        </li>
                        <li>
                            <a href="DesignSystem.html">Design System (BAH)</a>
                        </li>
                        <li>
                            <a href="powerapp.html">X&D Advisor App</a>
                        </li>
                        <li>
                            <a href="onboarding.html">Onboarding Guide</a>
                        </li>
                        <li>
                            <a href="reach4help.html">Reach4Help</a>
                        </li>
                        <li>
                            <a href="dummydata.html">Dummy Data Generator</a>
                        </li>
                        <li>
                            <a href="prototypescanner.html">Prototype Variable Scanner</a>
                        </li>
                    </ul>

                </div>
            </div>
            <a href="Resume/Emily Diaz Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
        </nav>
        </>
    )
}
