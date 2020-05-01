import { TOGGLE_SIDEBAR, SidebarAction } from './types';

const initState = {
  isSidebarOpen: false
};

const sidebarReducer = (state = initState, action: SidebarAction) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpen: !state.isSidebarOpen }; // set inverse
    default:
      return state;
  }
};

export default sidebarReducer;
