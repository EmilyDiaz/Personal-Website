

export default function ProjectTemplate(props) {
    return (
        <div className="project">
            <a href={props.projecturl}>
                <div className="projecttemplate" id={props.projectid} tabIndex="0"></div>
            </a>
            <div className="projectdescription">
                <h3 tabIndex="0">{props.projectname} </h3>
                <p tabIndex="0">
                    {props.projectdescription}
                </p>
                <div className="tools">
                    <img src="Images/Tools.svg" tabIndex="0"></img>
                    <p tabIndex="0">Tools:</p>
                    <img src={props.tool1} tabIndex="0" alt={props.alt1}></img>
                    <img src={props.tool2} tabIndex="0" alt={props.alt2}></img>
                    <img src={props.tool3} tabIndex="0" alt={props.alt3}></img>
                    <img src={props.tool4} tabIndex="0" alt={props.alt4}></img>
                    <img src={props.tool5} tabIndex="0" alt={props.alt5}></img>
                    <img src={props.tool6} tabIndex="0" alt={props.alt6}></img>
                </div>
            </div>
        </div>
    )
}