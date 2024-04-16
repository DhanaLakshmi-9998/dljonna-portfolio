

import { createContext, useReducer } from "react";

// Create the context with an initial value
const ThemeContext = createContext({
  state: { darkMode: false },
  dispatch: () => {}
});

// Define the initial state
const initialState = { darkMode: true };

// Define the reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

// Define the ThemeProvider component
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// Export the ThemeContext
export default ThemeContext;
