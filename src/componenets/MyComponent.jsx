import React, { useContext } from "react";
import { StoreContext, useDispatch, useStore } from "../store/StoreProvoder";
import { types } from "../store/storeReducer/StoreReducer";

export default function MyComponent() {


// const [store, dispatch] = useContext(StoreContext)
const store = useStore();
const dispatch = useDispatch();

     const {user, products}=store

     return (
       <div>
         <h2>MyComponent</h2>
         <h2>User: {user?.name}</h2>

         <button
           onClick={() =>
             dispatch({
               type: types.authLogout,
             })
           }
         >
           Logout
         </button>

         <button
           onClick={() =>
             dispatch({
               type: types.authLogin,
               payload: { id: 1, name: "ezequiel" },
             })
           }
         >
           Login
         </button>

         <h2>Products</h2>
         <ul>
           {products?.map((product) => {
             return <li key={product.id}>{product.title}</li>;
           })}

           <button onClick={() => dispatch({ type: types.productDeleteAll })}>
             Delete all
           </button>
           <button onClick={() => dispatch({ type: types.prouctChange })}>
             Change all</button>
         </ul>
       </div>
     );
}
