import {React,useState} from 'react';
import ProjectList from './ProjectList';

function ProjectPage(projects) {
 

  return (
    <div>
      <h2>Список проєктів</h2>

      <ProjectList projects={projects}/>
    </div>
  );
}

export default ProjectPage;