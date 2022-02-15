
const initialStore = {
    user:{
        id: 1 ,
        name: 'ezequiel',
    },
        products: [
            {id: 1 , title : 'Coca cola'},
            {id: 2 , title : 'Pepsi'},
            {id: 3 , title : 'Sprite'},
        ]
}


const types = {
    authLogin: 'authLogin',
    authLogout:'authLogout',
    productDeleteAll:'productDeleteAll',
    prouctChange:'prouctChange',
}

const storeReducer = (state, action)=>{
    if(action.type === types.authLogout)
    {
      
    return {...state,
            user: null, 

    }    
    }
    if(action.type ===  types.productDeleteAll){

        return {...state,products: []}
        
    }
    if(action.type === types.authLogin){

        return {...state,user: action.payload}

    }
    if(action.type ===  types.prouctChange){

        return {...state,products: [{id:1,title: 'producto cambiado prueba'}]}
        
    }
} 


export {initialStore};
export {types};

export default storeReducer;