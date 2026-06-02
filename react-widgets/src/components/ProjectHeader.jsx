export default function ProjectHeader(props) {
    return (
        <>
            <img src={props.projecttitleimg}></img>
            <h1>{props.projectname}</h1>
            <section className="projectimage">
                <img src={props.projectimg} alt={props.alt}></img>
            </section>
        </>
    )
}