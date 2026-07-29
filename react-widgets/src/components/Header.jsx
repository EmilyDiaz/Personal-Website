import { resolveSitePath } from '../sitePaths'

export default function Header(){
    return( 
        <>
        <a href={resolveSitePath('portfolio/')} id="homepage">
            <h4> EMILY DIAZ-FUSCO</h4>
        </a>
        <nav>
            <div className="dropdown" tabIndex="0">
                <a id="project-navbar" tabIndex="0">Projects</a>
                <div className="dropdown-content" tabIndex="0">
                    <ul>
                        <li>
                            <a href={resolveSitePath('portfolio/decisionevaluations/')}>Decision Evaluations (BAH)</a>
                        </li>
                        <li>
                            <a href={resolveSitePath('portfolio/hearings/')}>Hearings (BAH)</a>
                        </li>
                        <li>
                            <a href={resolveSitePath('portfolio/reassigncases/')}>Reassign Cases (BAH)</a>
                        </li>
                        <li>
                            <a href={resolveSitePath('portfolio/correspondence/')}>Correspondence (BAH)</a>
                        </li>
                        <li>
                            <a href={resolveSitePath('portfolio/designsystem/')}>Design System (BAH)</a>
                        </li>
                        <li>
                            <a href={resolveSitePath('portfolio/powerapp/')}>X&D Advisor App</a>
                        </li>
                        <li>
                            <a href={resolveSitePath('portfolio/onboarding/')}>Onboarding Guide</a>
                        </li>
                        <li>
                            <a href={resolveSitePath('portfolio/reach4help/')}>Reach4Help</a>
                        </li>
                        <li>
                            <a href={resolveSitePath('portfolio/dummydata/')}>Dummy Data Generator</a>
                        </li>
                        <li>
                            <a href={resolveSitePath('portfolio/prototypescanner/')}>Prototype Variable Scanner</a>
                        </li>
                    </ul>

                </div>
            </div>
            <a href={resolveSitePath('Resume/Emily Diaz Resume.pdf')} target="_blank" rel="noopener noreferrer">View Resume</a>
        </nav>
        </>
    )
}
