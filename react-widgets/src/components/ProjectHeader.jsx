export default function ProjectHeader(props) {
    return (
        <>
            {props.projecttitleimg? <img width="100%" src={props.projecttitleimg}></img>:null}
            {props.projectname? <h1>{props.projectname}</h1>:null}
            <section className="projectimage">
                <img src={props.projectimg} alt={props.alt}></img>
            </section>
        </>
    )
}