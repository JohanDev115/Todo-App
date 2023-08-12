import React from "react";

function useLocalStorage(itemName, initValue) {

  const actionTypes = {
    sincronize: 'SINCRONIZE',
    error: 'ERROR',
    loading: 'LOADING',
    seItem: 'SET-ITEM'
  }

  const initialState = ({ initValue }) => ({
    sincronizedItem: true,
    error: false,
    loading: true,
    item: initValue
  })

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes?.sincronize:
        return {
          ...state,
          sincronizedItem: action.payload,
        }

      case actionTypes?.error:
        return {
          ...state,
          error: true
        }

      case actionTypes?.loading:
        return {
          ...state,
          loading: action.payload
        }

      case actionTypes?.seItem:
        return {
          ...state,
          item: action.payload
        }
      default:
        break;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState({ initValue }));

  const { item, loading, error } = state;

  const onSicronize = (val) => dispatch({type: actionTypes?.sincronize, payload: val});
  const onError = () => dispatch({type: actionTypes?.error});
  const onLoading = (val) => dispatch({type: actionTypes?.loading, payload: val});
  const onSetItem = (item) => dispatch({type: actionTypes?.seItem, payload: item});

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

        onSetItem(parsedItem);
        onLoading(false);
        onSicronize(true);
      } catch (error) {
        onError();
      }
    }, 500);
  }, [state.sincronizedItem]);


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSetItem(newItem);
    } catch (error) {
      onError();
    }
  }

  const sincronizeItem = () => {
    onLoading(true);
    onSicronize(false);
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