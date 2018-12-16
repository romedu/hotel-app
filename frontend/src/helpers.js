export const findById = (itemId, itemList) => itemList.find(item => item._id === itemId);
export const findByName = (itemName, itemList, kebabCased) => itemList.find(item => capitalizeString(item.name) === capitalizeString(itemName, kebabCased));
export const updateItem = (itemId, newItem, itemList) => itemList.map(item => item._id === itemId ? newItem : item);
export const deleteItem = (itemId, itemList) => itemList.filter(item => item._id !== itemId);
export const capitalizeString = (phrase, kebabCased) =>  phrase.toLowerCase().split(kebabCased ? "-" : " ").map(word => word.split("").map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join("")).join(" ");
export const kebabCaseString = phrase => phrase.toLowerCase().split(" ").join("-");