import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [task, settask] = useState("");
  const [newproj, setnewproj] = useState(false);
  const [isprojOpen, setisprojOpen] = useState(false);
  const [activeproj, setactiveproj] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [title, settitle] = useState("");
  const [descriptio, setdescription] = useState("");
  const [due, setdue] = useState(new Date().toISOString().split("T")[0]);
  const [titleerror, settitError] = useState(false);
  const [descriptioerror, setdesError] = useState(false);
  const [isProjectAdded,setIsProjectAdded]=useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
    const newdata = data.map((item) => {
      if (item.Projid === activeproj) {
        return {
          ...item,
          tasks: [],
        };
      }
      return item;
    });
    setData(newdata);
  };

  const handletask = () => {
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

  const handlecomp = (taskIndex) => {
    const newdata = data.map((item) => {
      if (item.Projid === activeproj) {
        return {
          ...item,
          tasks: item.tasks.map((task, index) =>
            index === taskIndex
              ? { ...task, isComplete: !task.isComplete }
              : task
          ),
        };
      }
      return item;
    });
    setData(newdata);
  };

  const generateRandomId = () => {
    return `p${Math.random().toString(36).substr(2, 9)}_${Date.now()}`;
  };

  const handleSave = () => {
    const trimmedTitle = title.trim();
    const trimmedDescriptio = descriptio.trim();
  
    const isTitleEmpty = trimmedTitle === "";
    const isDescriptioEmpty = trimmedDescriptio === "";
  
    settitError(isTitleEmpty);
    setdesError(isDescriptioEmpty);
  
    if (!isTitleEmpty && !isDescriptioEmpty) {
      setIsProjectAdded(true);
      setData([
        {
          title: trimmedTitle,
          descriptio: trimmedDescriptio,
          due,
          Projid: generateRandomId(),
        },
        ...data,
      ]);
  
      settitle("");
      setdescription("");
      console.log(data);
  
    
      setTimeout(() => {
        setIsProjectAdded(false);
      }, 3000);
    }
  };

  const handleCancel = () => {
    settitle("");
    setdescription("");
    setdue(new Date().toISOString().split("T")[0]);
    setnewproj((newproj) => !newproj);
  };

  const handleisOpen = (Projid) => {
    data.forEach((item) => {
      if (item.Projid === Projid) {
        setisprojOpen(true);
        setactiveproj(Projid);
        setnewproj(false);
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        task,
        settask,
        handleDele,
        newproj,
        isprojOpen,
        activeproj,
        darkMode,
        newprojHandler,
        isProjectAdded,
      
        toggleDarkMode,
        handleclear,
        handletask,
        handlecomp,
        title,
        settitle,
        descriptio,
        setdescription,
        due,
        setdue,
        titleerror,
        descriptioerror,
        handleSave,
        handleCancel,
        handleisOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
