const initialState = {
    projects: [],
  };
  
  const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PROJECT':
        return {
          ...state,
          projects: [...state.projects, action.payload],
        };
      case 'DELETE_PROJECT':
        return {
          ...state,
          projects: state.projects.filter(project => project.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default projectReducer;