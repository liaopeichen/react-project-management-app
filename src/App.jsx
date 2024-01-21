import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    const projectId = uuidv4();
    const newProject = {
      ...projectData,
      id: projectId,
    };

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancelAddProject={handleCancelAddProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
