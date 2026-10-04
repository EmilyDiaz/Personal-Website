import { resolveSitePath } from '../sitePaths'

export default function ProjectHeader(props) {
    return (
        <>
            {props.projectname? <h1>{props.projectname}</h1>:null}
            <section className="projectimage">
                <img src={resolveSitePath(props.projectimg)} alt={props.alt}></img>
            </section>
        </>
    )
}