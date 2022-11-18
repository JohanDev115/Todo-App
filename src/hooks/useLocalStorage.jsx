import React from "react";

function useLocalStorage(itemName, initValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const storagedItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!storagedItem) {
          localStorage.setItem(itemName, JSON.stringify(initValue));
          parsedItem = initValue;
        } else {
          parsedItem = JSON.parse(storagedItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, [sincronizedItem]);


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  }
}

export default useLocalStorage;