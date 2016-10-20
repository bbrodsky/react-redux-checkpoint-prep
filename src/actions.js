export const createNewItemAction = (item) => {
  return {
    type: 'ADD_ITEM_TO_REGISTRY',
    item
  };
};
