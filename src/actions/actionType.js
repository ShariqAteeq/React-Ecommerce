export const addToCart = (id) => {
    return {
        type : 'addToCart',
        id
    }
}
export const removeItem = (id) => {
    return {
        type : 'removeItem',
        id
    }
}
export const addQuantity = (id) => {
    return {
        type : 'addQuantity',
        id
    }
}
export const subQuantity = (id) => {
    return {
        type : 'subQuantity',
        id
    }
}