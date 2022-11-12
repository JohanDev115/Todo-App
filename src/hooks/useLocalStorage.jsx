import React from "react";

function useLocalStorage(itemName, initValue) {  
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initValue);

  React.useEffect(() => {
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
    } catch (error) {
      setError(error);
    }
  });


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export default useLocalStorage;