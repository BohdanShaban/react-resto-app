const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}
const menuError = () => { 
    return {
        type: 'MENU_ERROR'
    }
}
const addedToCart = (id) => {  
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: id
    }
}
const onItemFromCartDeleate = (id) => {  
    return {
        type: 'ITEM_FROM_CART_DELETE',
        payload: id
    }
}


export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    onItemFromCartDeleate
};