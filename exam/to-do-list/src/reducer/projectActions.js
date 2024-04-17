export const addProject = (project) => ({
    type: 'ADD_PROJECT',
    payload: project,
  });
  
  export const deleteProject = (projectId) => ({
    type: 'DELETE_PROJECT',
    payload: projectId,
  });
  
