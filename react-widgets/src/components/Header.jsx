import { resolveSitePath } from '../sitePaths'

export default function Header(){
    return( 
        <>
        <a href={resolveSitePath('portfolio/')} id="homepage" aria-label="Emily Diaz-Fusco home">
            <span className="site-brand__frog">
                <img src={resolveSitePath('Images/faviconbigger.png')} alt="" aria-hidden="true" />
            </span>
        </a>
        <nav>
            <a href={resolveSitePath('Resume/Emily Diaz-Fusco Resume.docx')} target="_blank" rel="noopener noreferrer">View Resume</a>
            <a href={resolveSitePath('worldmap/')} >View World Map</a>
        </nav>
        </>
    )
}
