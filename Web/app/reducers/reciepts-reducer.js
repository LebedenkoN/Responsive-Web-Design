const initialState = {
    ingredients: [],
    reciepts: []
};

const RecieptsReducer = (state = initialState, action) => {
    const ingredients = state.ingredients;
    const reciepts = state.reciepts;
    switch (action.type) {
    case 'ADD_INGREDIENTS':
        return {
            ingredients: { ...action.payload },
            reciepts
        };
    case 'GET_RECIEPTS':
        return {
            ingredients,
            reciepts: { ...action.payload }
        };
    default: return state;
    }
};
export default RecieptsReducer;
