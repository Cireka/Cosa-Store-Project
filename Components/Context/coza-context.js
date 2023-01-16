import React from "react";

const DataContext = React.createContext({
  name: "",
  totalAmount: 0,
  items: [],
  totalItems: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  comletlyRemoveItem: (id) => {},
});

export default DataContext;
