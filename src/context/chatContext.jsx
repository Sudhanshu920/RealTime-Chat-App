import { createContext, useContext, useReducer } from 'react';
import { AuthContext } from './authContext';

export const chatContext = createContext();

export function ChatContextProvider({ children }) {
  const  currentUser  = useContext(AuthContext);

  const INITIAL_STATE = {
    user: {},
    chatID: 'null',
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_USER':
        return {
          user: action.payload,
          chatID:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <chatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </chatContext.Provider>
  );
}
