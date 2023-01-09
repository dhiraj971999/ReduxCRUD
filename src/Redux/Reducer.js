// import React from 'react'

const initialState = [
    {
        id:1,
        email: 'abc@gmail.com',
        first: 'Dhiraj',
        last: 'Sangale',
    },
    {
        id:2,
        email:'xyz@gmail.com',
        first:'Virat',
        last:'Kohli'
    },
    {
        id:3,
        email: 'pqr@gmail.com',
        first: 'MS',
        last: 'Dhoni',
    },
    {
        id:4,
        email:'lmn@gmail.com',
        first:'Rohit',
        last:'Sharma'
    }
]

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_CONTACT': const addedState = [...state, action.payload]; 
        state = addedState;
        return state;

        // case 'UPDATE_CONTACT':  const newstate=state.map((item)=>{
        //     if(item.id==action.payload.id){
        //         return(item.id==action.payload.id,
        //             item.email=action.payload.email,
        //         item.first=action.payload.first,
        //         item.last=action.payload.last)
        //     }
        // });

        // return newstate;

        case 'UPDATE_CONTACT':
        const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state

      case 'DELETE_CONTACT': return state.filter(contact=>contact.id!=action.payload.id)

      case 'SEARCH_CONTACT': return state.filter((item)=>item.first.toLowerCase().includes(action.payload.first) || item.last.toLowerCase().includes(action.payload.first) || item.email.toLowerCase().includes(action.payload.first) || item.id.toString().includes(action.payload.first))

        default: return state;
    }
}
