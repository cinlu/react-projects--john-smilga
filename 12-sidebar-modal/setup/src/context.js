import React, { useState, useContext } from 'react'
import App from './App';

const AppContext = React.createContext(); 

const AppProvider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false); 
    const [isModalOpen, setIsModalOpen] = useState(true); 

    const openSideBar = () => {
        setIsSideBarOpen(true); 
    }

    const closeSideBar = () => {
        setIsSideBarOpen(false); 
    }

    const openModal = () => {
        setIsModalOpen(true); 
    }

    const closeModal = () => {
        setIsModalOpen(false); 
    }

    return (
        <AppContext.Provider 
            value={{
                isModalOpen,
                isSideBarOpen,
                openModal, 
                openSideBar,
                closeModal,
                closeSideBar
            }}
        > 
                {children} 
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}