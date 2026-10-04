export default function ProjectTemplate(props) {
    const tools = [
        props.alt1,
        props.alt2,
        props.alt3,
        props.alt4,
        props.alt5,
        props.alt6,
    ].filter(Boolean)

    const projectUrl = props.requiresPassword
        ? `password.html?case=${encodeURIComponent(props.projectid)}`
        : props.projecturl

    return (
            <div className="project">
                <a href={projectUrl}>
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
                    <h3>
                        {props.projectname}
                        {props.requiresPassword && (
                            <span className="project-lock" role="img" aria-label="Password protected" title="Password protected">
                                <svg viewBox="0 0 28 28" aria-hidden="true" focusable="false" fill="none">
                                    <rect x="4" y="12" width="20" height="13" rx="2" stroke="white" strokeWidth="2" />
                                    <path d="M9 12V8a5 5 0 0 1 10 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                        )}
                    </h3>
                    <p>
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