import { createStore, combineReducers } from 'redux';
//import { Reducer, initialState  } from "./reducer";

import { Dishes } from "./dishes";
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';


export const ConfigureStore=()=>{
   // const store = createStore(Reducer,initialState);

   //combining all the small reducer functions 
   const store = createStore(combineReducers({
       dishes: Dishes,
       comments: Comments,
       leaders: Leaders,
       promotions: Promotions
   }));
    return store;
}