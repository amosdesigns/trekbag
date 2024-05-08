import { useState, useEffect, createContext } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const ItemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(ItemsFromLocalStorage || initialItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: Date.now(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleCheckedItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleSetAllComplete = (e) => {
    e.preventDefault();
    const newItems = items.map((item) => ({
      ...item,
      packed: true,
    }));
    setItems(newItems);
  };

  const handleSetAllIncomplete = (e) => {
    e.preventDefault();
    const newItems = items.map((item) => ({
      ...item,
      packed: false,
    }));
    setItems(newItems);
  };

  const handleResetAllItems = (e) => {
    e.preventDefault();
    setItems(initialItems);
  };

  const handleRemoveAllItems = (e) => {
    e.preventDefault();
    setItems([]);
  };
  const packed = items.filter((item) => item.packed).length;
  const total = items.length;
  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleCheckedItem,
        handleSetAllComplete,
        handleSetAllIncomplete,
        handleResetAllItems,
        handleRemoveAllItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
