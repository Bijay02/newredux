import { act } from "react-dom/test-utils"

const initialState ={
    nameList: [],
}

const nameReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'ADD':
            console.log("add reducer call");
            return{
                ...state,
                nameList:[
                    ...state.nameList,
                    action.payload
                ]
            };
        
        case 'DELETE':
            console.log("delete reducer call");
            return{
                    ...state,
                nameList:  [           
                    state.nameList.filter((i)=>  (i.id!== action.payload))   
                ]
            };

        default:
            return{
                ...state,
            };

    }
}

export default nameReducer;