export default function Header(){
    return( 
        <>
        <a href="/portfolio/" id="homepage">
            <h4> EMILY DIAZ-FUSCO</h4>
        </a>
        <nav>
            <div className="dropdown" tabIndex="0">
                <a id="project-navbar" tabIndex="0">Projects</a>
                <div className="dropdown-content" tabIndex="0">
                    <ul>
                        <li>
                            <a href="/portfolio/decisionevaluations/">Decision Evaluations (BAH)</a>
                        </li>
                        <li>
                            <a href="/portfolio/hearings/">Hearings (BAH)</a>
                        </li>
                        <li>
                            <a href="/portfolio/reassigncases/">Reassign Cases (BAH)</a>
                        </li>
                        <li>
                            <a href="/portfolio/correspondence/">Correspondence (BAH)</a>
                        </li>
                        <li>
                            <a href="/portfolio/designsystem/">Design System (BAH)</a>
                        </li>
                        <li>
                            <a href="/portfolio/powerapp/">X&D Advisor App</a>
                        </li>
                        <li>
                            <a href="/portfolio/onboarding/">Onboarding Guide</a>
                        </li>
                        <li>
                            <a href="/portfolio/reach4help/">Reach4Help</a>
                        </li>
                        <li>
                            <a href="/portfolio/dummydata/">Dummy Data Generator</a>
                        </li>
                        <li>
                            <a href="/portfolio/prototypescanner/">Prototype Variable Scanner</a>
                        </li>
                    </ul>

                </div>
            </div>
            <a href="/Resume/Emily Diaz Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
        </nav>
        </>
    )
}
