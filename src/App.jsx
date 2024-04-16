
import { useState } from 'react'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import Sidebar from './components/Sidebar'
import SelectedProject from './components/SelectedProject'

function App() {

const [projectsState, setProjectsState] = useState({
  selectedProjectId: undefined,
  projects: []
})


function handleStartAddProject(){
  setProjectsState(prevState => {
    return {...prevState,
    selectedProjectId: null
  }
  })
}

function handleCancel(){
  setProjectsState(prevState => {
    return {...prevState, 
    selectedProjectId: undefined
  }
  })
}

function handleAddProject(projectData){
  setProjectsState(prevState => {
    const projectId = Math.random()
    const newProject = {
      ...projectData, 
      id: projectId

    }
    return {...prevState,
    selectedProjectId: undefined,
    projects: [...prevState.projects, newProject]
  }
  })
}

function handleSelectedProject(id){
  setProjectsState(prevState => {
    return {
      ...prevState,
    selectedProjectId: id
    }
  })
}

function handleDelete(){
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      
    }
  })
}

let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

let content = <SelectedProject project={selectedProject} onDelete={handleDelete}/>

if(projectsState.selectedProjectId === null){  
  content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
} else if(projectsState.selectedProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
}



  return (
    <main className="main">
        <Sidebar projects={projectsState.projects} onSelectedProject={handleSelectedProject} onStartAddProject={handleStartAddProject} selectedProjectId={projectsState.selectedProjectId}/>
        {content}    
    </main>
  )
}
export default App
