import { createStore } from "redux";

const initialState = {
    userdata:  {
      username: null,
      email: null
    },
  }
  
let reducer= ( state = initialState, action)=>{
  switch(action.type){
    case 'increment':
      console.log('oncres');
      console.log(action.payload);
      return{
        userdata: JSON.parse(localStorage.getItem('auth'))
      }
    default:
      console.log('def');
      return {
        userdata: JSON.parse(localStorage.getItem('auth'))
      };
  }
};

const store = createStore(reducer);

export default store;