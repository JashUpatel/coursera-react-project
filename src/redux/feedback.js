import * as ActionTypes from  './ActionTypes';

export const Feedback = (state={errMess: null, feedback: []},action)=>{
    switch(action.type){
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
           // comment.id = state.comments.length;
            //comment.date = new Date().toISOString();
            return {...state,feedback: state.feedback.concat(feedback)};  
        default:
            return state;
    }
}