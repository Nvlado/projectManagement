export default function SelectedProject({project, onDelete}){
    return (
        <div className="selected-project">
            <h2>{project.title}</h2>
            <p>{project.date}</p>
            <p className="description">{project.description}</p>
            <p className="button"><button onClick={onDelete}>Delete</button></p>
        </div>
        
    )
}