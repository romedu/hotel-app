export const findById = (itemId, itemList) => itemList.find(item => item._id === itemId);
export const updateItem = (itemId, newItem, itemList) => itemList.map(item => item._id === itemId ? newItem : item);
export const deleteItem = (itemId, itemList) => itemList.filter(item => item._id !== itemId);