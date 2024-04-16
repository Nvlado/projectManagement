import reactLogo from '../assets/react.svg'
import '../App.css'

export default function Sidebar({onStartAddProject, projects, onSelectedProject, selectedProjectId}){
    return (
        <aside className="aside">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
            <h2>Your projects</h2>
            <div className="create">
            <div>
              <button className={selectedProjectId === null && "active"} onClick={onStartAddProject}>+ Add a project</button>
            </div>
            <ul>
            {projects.map(project => 
              <li key={project.id}>
              <button className={project.id === selectedProjectId && "active"} onClick={()=> onSelectedProject(project.id)}>{project.title}</button>
              </li> 
            )}
            </ul>
            </div>
        </aside>
    )
}