import DataContext from "./coza-context";

import { useReducer } from "react";

const defaultCartState = {
  items: [],
  TotalItems: 0,
  TotalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let existingItem = state?.items.findIndex((item) => {
      if (item.id === action.item.id) {
        return item;
      }
    });
    const alreadyExistingItem = state.items[existingItem];
    if (alreadyExistingItem) {
      alreadyExistingItem.amount += 1;
      let updatedTotalItems = state.TotalItems + 1;
      let updatedTotalAmount = state.TotalAmount + action.item.price;

      return {
        items: state.items,
        TotalItems: updatedTotalItems,
        TotalAmount: updatedTotalAmount,
      };
    } else {
      let updatedItems = state?.items.concat(action.item);
      let updatedTotalItems = state.TotalItems + 1;
      let updatedTotalAmount = state.TotalAmount + action.item.price;
      return {
        items: updatedItems,
        TotalItems: updatedTotalItems,
        TotalAmount: updatedTotalAmount,
      };
    }
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    if (existingItem.amount === 1) {
      let updatedItems;
      updatedItems = state.items.filter((item) => item.id !== action.id);
      let updatedTotalItems = state.TotalItems - 1;
      let updatedTotalAmount = state.TotalAmount - existingItem.price;

      return {
        items: updatedItems,
        TotalItems: updatedTotalItems,
        TotalAmount: updatedTotalAmount,
      };
    } else {
      let updatedItems;
      updatedItems = state.items.filter((item) => item.id !== action.id);
      existingItem.amount -= 1;
      let updatedTotalItems = state.TotalItems - 1;
      let updatedTotalAmount = state.TotalAmount - existingItem.price;
      return {
        items: state.items,
        TotalItems: updatedTotalItems,
        TotalAmount: updatedTotalAmount,
      };
    }
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
    items: cartState?.items,
    totalAmount: cartState?.TotalAmount,
    totalItems: cartState?.TotalItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};

export default CozaProvider;
