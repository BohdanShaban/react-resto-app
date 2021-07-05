const initState = {
    menu: [],
    loading: true,
    error: false,
    selectedItems: [
        {
			"title": "Cesar salad",
			"price": 12,
			"url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
			"category": "salads",
			"id": 1
		},
		{
			"title": "Pizza Margherita",
			"price": 10,
			"url": "http://www.academiabarilla.com/anteprima_pizzamargherita_xhm1p-2_1200.jpg?h=faa3bae42d7180a508c490395249247ded3f362c",
			"category": "pizza",
			"id": 2
		}
    ]
}


const reducer = (state = initState, action) => {

    switch(action.type) {
        case 'MENU_REQUESTED':
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                menu: state.menu,
                loading: true,
                error: false
            };

        case 'MENU_LOADED':
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                menu: action.payload,
                loading: false,
                error: false
            }
        
        case 'MENU_ERROR': 
            return {
                ...state, // !!!!!  SPREAD PREV STATE  !!!!!
                menu: state.menu,
                loading: false,
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
                ]
            }

        default:
            return state;
    }
}

export default reducer;