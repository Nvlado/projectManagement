export default function NoProjectSelected({onStartAddProject}){
    return (
        <div className="no-project-selected">
        <h2>You have not selected a project</h2>
        <p>Create a new project</p>
        <button onClick={onStartAddProject}>+ Add a project</button>
        </div>
    )
}