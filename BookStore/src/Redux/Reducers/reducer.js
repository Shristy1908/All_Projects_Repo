const Init_state={
    carts:[]
};

export const cartreducer=(state=Init_state,action) => {
    switch(action.type){
        case "Add_Cart":

            const itemIndex=state.carts.findIndex((item)=> item.id === action.payload.id);

            if(itemIndex>=0){
                state.carts[itemIndex].qnty+=1;
            }
            else{
                const temp={...action.payload,qnty:1}
                  return {
                    ...state,
                    carts: [...state.carts,temp],
                  };
            }
          
        case "Remove_Cart":
            let data=state.carts.filter((ele)=>ele.id !== action.payload);
            return{
                ...state,
                carts:data
            }

        case "Remove_One":
            const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

            if(state.carts[itemIndex_dec].qnty >=1){
                const dltItem=state.carts[itemIndex_dec].qnty -= 1;
                console.log(...state.carts,dltItem)
            
                return{
                   ...state,
                   carts:[...state.carts],
                }
            }
            else if (state.carts[itemIndex_dec].qnty == 1) {
                  let data = state.carts.filter(
                    (ele) => ele.id !== action.payload
                  );
                  return {
                    ...state,
                    carts: data,
                  };
            }

        default:
            return state
    }
}