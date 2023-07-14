import { useContext, createContext, useState } from "react";

const StateContext = createContext(null);

const initialState = {
  openModal: false,
  openSideBar: false,
};

export default function StateContextProvider({ children }) {
  const [openSideBar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenSidebar = (value) => {
    setOpenSidebar(value);
  };

  const handleOpenModal = (value) => {
    setOpenModal(value);
  };

  return (
    <StateContext.Provider
      value={{ openSideBar, openModal, handleOpenSidebar, handleOpenModal }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateValue = () => useContext(StateContext);
