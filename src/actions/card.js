export const addToCard = (obj) => ({
    type: 'ADD_TO_CARD',
    payload: obj,
});

export const removeFromCard = (id) => ({
    type: 'REMOVE_FROM_CARD',
    payload: id,
});