//import { DISHES } from '../shared/dishes'
//import { COMMENTS } from '../shared/comments';
//import { PROMOTIONS } from '../shared/promotions';
//import { LEADERS } from '../shared/leaders';


//divided this main reducer file into different small reducers function so it is no longer needed

export const initialState={

    dishes:DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS,
};

export const Reducer = (state= initialState,action)=>{
    return state;
}