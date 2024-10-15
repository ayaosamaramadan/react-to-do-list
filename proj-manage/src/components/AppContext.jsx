import React, { createContext, useState, useContext } from 'react';


const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [task, settask] = useState("");
  const [newproj, setnewproj] = useState(false);
  const [isprojOpen, setisprojOpen] = useState(false);
  const [activeproj, setactiveproj] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const newprojHandler = () => {
    setnewproj(!newproj);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDele = (activeproj) => {
    const newdata = data.filter((item) => item.Projid !== activeproj);
    setData(newdata);
  };

  const handleclear = () => {
    settask("");
  };

  const handletask = (activeproj) => {
    const newdata = data.map((item) => {
      if (item.Projid === activeproj) {
        return {
          ...item,
          tasks: [...(item.tasks || []), { text: task, isComplete: false }],
        };
      }
      return item;
    });
    setData(newdata);
    settask("");
  };

  const handlecomp = (activeproj, taskIndex) => {
    const newdata = data.map((item) => {
      if (item.Projid === activeproj) {
        return {
          ...item,
          tasks: item.tasks.map((task, index) =>
            index === taskIndex ? { ...task, isComplete: !task.isComplete } : task
          ),
        };
      }
      return item;
    });
    setData(newdata);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        task,
        settask,
        newproj,
        setnewproj,
        isprojOpen,
        setisprojOpen,
        activeproj,
        setactiveproj,
        darkMode,
        setDarkMode,
        newprojHandler,
        toggleDarkMode,
        handleDele,
        handleclear,
        handletask,
        handlecomp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  return useContext(AppContext);
};