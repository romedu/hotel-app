export const findById = (itemId, itemList) => itemList.find(item => item._id === itemId);
export const updateItem = (itemId, newItem, itemList) => itemList.map(item => item._id === itemId ? newItem : item);
export const deleteItem = (itemId, itemList) => itemList.filter(item => item._id !== itemId);
export const capitalizeString = phrase =>  phrase.toLowerCase().split(" ").map(word => word.split("").map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join("")).join(" ");
export const kebabCaseString = phrase => phrase.toLowerCase().split(" ").join("-");