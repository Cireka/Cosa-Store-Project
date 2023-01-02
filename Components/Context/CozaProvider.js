import DataContext from "./coza-context";

import { useReducer } from "react";

const defaultCartState = {
  items: [],
  TotalItems: 0,
  TotalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = state.items.concat(action.item);
    let updatedTotalItems = state.TotalItems + 1;
    let updatedTotalAmount = state.TotalAmount + action.item.price;
    return {
      items: updatedItems,
      TotalItems: updatedTotalItems,
      TotalAmount: updatedTotalAmount,
    };
  }
};

const CozaProvider = (props) => {
  const [cartState, DispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    DispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    DispatchCartAction({ type: "REMOVE", id: id });
  };

  const data = {
    // key: cartState.key,
    items: cartState.items,
    totalAmount: cartState.TotalAmount,
    totalItems: cartState.TotalItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};

export default CozaProvider;
