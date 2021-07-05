const initState = {
    menu: [],
    loading: true,
    error: false,
    selectedItems: [],
    totalPrice: 0
}


const reducer = (state = initState, action) => {

    switch(action.type) {
        case 'MENU_REQUESTED':
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                menu: state.menu,
                loading: true,
                //error: false
            };

        case 'MENU_LOADED':
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                menu: action.payload,
                loading: false,
                //error: false
            }
        
        case 'MENU_ERROR': 
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                // menu: state.menu,
                // loading: false,
                error: true
            }

        case 'ITEM_ADDED_TO_CART': 
            const id = action.payload;
            const searchedItem = state.menu.find( item => item.id === id);

            const newItem = {
                title: searchedItem.title,
                price: searchedItem.price,
                url: searchedItem.url,
                category: searchedItem.category,
                id: searchedItem.id,
            };

            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                selectedItems: [
                    ...state.selectedItems,
                    newItem
                ],
                totalPrice: state.totalPrice + searchedItem.price
            }
        
            case 'ITEM_FROM_CART_DELETE': 
                const idx = action.payload;
                const searcheIdx = state.selectedItems.findIndex( item => item.id === idx);
                const itemPrice = state.selectedItems[searcheIdx].price;

                const before = state.selectedItems.slice(0, searcheIdx);
                const after = state.selectedItems.slice(searcheIdx + 1);
                const newItems = [ ...before, ...after ]

                return {
                    ...state, 
                    selectedItems: newItems,
                    totalPrice: state.totalPrice - itemPrice
                }

        default:
            return state;
    }
}

export default reducer;