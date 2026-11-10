export default function ProjectTemplate(props) {

    return (
            <div className="project">
                <a href={props.projecturl}>
                    <div className="projecttemplate" id={props.projectid}>
                        {props.projectimg ? (
                            <img className="project-cover" src={props.projectimg} alt={props.projectname ? `${props.projectname} case study cover` : ''} />
                        ) : null}
                    </div>
                </a>
                <div className="projectdescription">
                    <h3>
                        {props.projectname}
                    </h3>
                    <p>
                        {props.projectdescription}
                    </p>
                </div>
            </div>
    )
}