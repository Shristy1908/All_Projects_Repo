export const Add=(item)=>{
    return{
        type:"Add_Cart",
        payload:item,
    }
}

// remove items

export const Remove=(id)=>{
    return{
        type:"Remove_Cart",
        payload:id
    }
}

// remove individuals item

export const individualRemove=(item)=>{
        return {
            type:"Remove_One",
            payload:item,
        }
}