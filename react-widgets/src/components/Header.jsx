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
                            <a href="BoozAllenCaseStudy.html">Booz Allen Hamilton</a>
                        </li>
                        <li>
                            <a href="powerapp.html">X&D Advisor App</a>
                        </li>
                        <li>
                            <a href="jargon.html">Jargon</a>
                        </li>
                        <li>
                            <a href="onboarding.html">Onboarding Guide</a>
                        </li>
                        <li>
                            <a href="reach4help.html">Reach4Help</a>
                        </li>
                        <li>
                            <a href="plugins.html">Plugins</a>
                        </li>
                    </ul>

                </div>
            </div>
            <a href="Resume/Resume-Current.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
        </nav>
        </>
    )
}