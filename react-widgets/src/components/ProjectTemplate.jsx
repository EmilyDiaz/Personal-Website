

export default function ProjectTemplate(props) {
    const tools = [
        props.alt1,
        props.alt2,
        props.alt3,
        props.alt4,
        props.alt5,
        props.alt6,
    ].filter(Boolean)

    return (
            <div className="project">
                <a href={props.projecturl}>
                    <div className="projecttemplate" id={props.projectid} tabIndex="0">
                        <div className="tagrow">
                            {props.stickername ? <div className="sticker">{props.stickername}</div> : null}
                            {props.status ? (
                                <div className="status-tag">
                                    {['shipped'].some((value) => props.status?.toLowerCase().includes(value)) ? (
                                        <span className="status-dot shipped"></span>
                                    ) : null}
                                    {['on hold'].some((value) => props.status?.toLowerCase().includes(value)) ? (
                                        <span className="status-dot on-hold"></span>
                                    ) : null}
                                    {props.status}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </a>
                <div className="projectdescription">
                    <h3 tabIndex="0">{props.projectname} </h3>
                    <p tabIndex="0"><strong>{props.dates}</strong></p>
                    <p tabIndex="0">
                        {props.projectdescription}
                    </p>
                    {tools.length > 0 ? (
                        <div className="tools">
                            {tools.map((tool, index) => (
                                <span key={index} className="tooltag" tabIndex="0">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
    )
}