import { createSlice } from "@reduxjs/toolkit";




// const TaskSlice = createSlice({
//   name: "card",
//   initialState: {
//     list:[],
//     Select:null,

// },
//   reducers: {
//     addcard: (state,actions) => {
//       state.list.push({
//         id: state.list.length+1,
//         ...actions.payload

//       })
//     },
//     Restoration:(state,actions)=>{
//       const findCard=state.list.filter((card)=>{
//         return card.id===actions.payload.id
//       });
//       if(findCard){
//         state.Select.push({name:list.name,number:list.number,month:list.month ,cvv:list.cvv})
//       }
//     }
//   },
// });
// export const { addcard,Restoration} = TaskSlice.actions;
// export default TaskSlice.reducer;



const TaskSlice = createSlice({
  name: "card",
  initialState: {
    list: [],
    Select: [], 
    history:[], 
  },
  reducers: {
    addcard: (state, actions) => {
      state.list.push({
        id: state.list.length + 1,
        ...actions.payload,
      });
    },
    Restoration: (state, actions) => {
      state.Select = actions.payload;
      //  state.Select.push({
      //   name:actions.payload.name,
      //   number:actions.payload.number,
      //   month:actions.payload.month,
      //   cvv:actions.payload.cvv,
      //  })
      // const findCard = state.list.find((card) => {
      //   return card.id === actions.payload.id;
      // });
      // if (findCard) {
      //   state.Select.push({
      //     name: findCard.name,
      //     number: findCard.number,
      //     month: findCard.month,
      //     cvv: findCard.cvv,
      //   });
      

    },
    

    

  //   negetivcash:(state,actions)=> {
  //   const{negetivePrice, id} = actions.payload
  //     state.list=  state.list.map((card) => 
  //        card.id === id && card.cash >= negetivePrice
  //         ? { ...card, cash: card.cash - negetivePrice }
  //         : card
  //     );
      
  
  // const newcash= state.list.find(card=>card.id===id);
  // if(newcash){
  //   state.history=[...state.history,{...newcash,p:negetivePrice}]
  // }

  
    
  //   }


  negetiveInventory : (state , action) => {
    const {negetivePrice , id} = action.payload

    state.list = state.list.map((card)=>
        card.id === id && card.cash >= negetivePrice
        ?{...card , cash: card.cash - negetivePrice}
        :card


    );

    const updateCard = state.list.find(card => card.id === id);
     if(updateCard){
        state.history = [...state.history, { ...updateCard , p: negetivePrice}]
     }


   },

  },
});

export const { addcard, Restoration,negetiveInventory } = TaskSlice.actions;
export default TaskSlice.reducer;

