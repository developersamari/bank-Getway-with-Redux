import React from "react";
// import {  useDispatch } from "react-redux";
// import { Restoration } from "../redux/TaskSlice";


function Card({ name, number, cvv, month,cash , selectcard }) {
   
  // const dispatch = useDispatch();
  
  // const selectcard=(card)=>{
  //   dispatch(Restoration(card))
  //   console.log(selectcard)
  // }




  return (
    <>
      <div
        style={{ direction: "ltr" }}
        className="card w-96 border-2 border-solid border-inherit rounded-md shadow-md font-sans font-bold  "
      >
        <div className="card-body">
          <div className="flex flex-row gap-[120px] ">
            <h4>{`Number`}</h4>
            <h4>{number}</h4>
          </div>
          <div className="flex flex-row gap-[205px] ">
            <h4>{`Name`}</h4>
            <h4>{name}</h4>
          </div>
          <div className="flex flex-row gap-[205px] ">
            <h4>{`Cash`}</h4>
            <h4>{cash}</h4>
          </div>
          <div className="flex flex-row gap-[60px]">
            <div className="flex flex-row gap-[50px] ">
              <h4>{`Cvv2`}</h4>
              <h4>{cvv}</h4>
            </div>
            <div className="flex flex-row gap-[50px] ">
              <h4>{`Validity`}</h4>
              <h4>{month}</h4>
            </div>
          </div>
          <div className="card-actions justify-end ">
            <button className="btn bg-inherit" onClick={selectcard} >Select</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;







// // components/Card.js
// import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { addCard } from '../Redux/cardSlice';

// export default function Card({
//   name, number, cvv, month,cash , selectcard
// }) {
//   // const dispatch = useDispatch();

//   // const handleAddCard = () => {
//   //   dispatch(addCard({
//   //     nameCard: name,
//   //     numberCard: Number,
//   //     passwordCard: Password,
//   //     cvv2Card: Cvv2,
//   //     yearCard: Year,
//   //     monthCard: Month,
//   //     inventory: Inventory,
//   //     imgBank: imgBank,
//   //   }));
//   // };
  

//   return (
//     <div 
//       style={{ display: "flex" }} 
//       className="w-96 h-56 mb-12 m-auto bg-white rounded-xl relative text-black shadow-2xl transition-transform transform hover:scale-110 hover:shadow-md hover:border-[#fafa]"
//       onClick={selectcard}
//     >
//       <div className="w-full px-8 absolute top-8">
//         <div className="flex justify-between">
//           <div>
//             <p className="font-light">Name</p>
//             <p className="font-medium tracking-widest">{name}</p>
//           </div>
//           {/* {imgBank && <img className="w-14 h4" src={imgBank} />} */}
//         </div>
//         <div className="pt-1">
//           <p className="font-light">Card Number</p>
//           <p className="font-medium tracking-more-wider">{number}</p>
//         </div>
//         <div className="pt-6 pr-6">
//           <div className="flex justify-between">
//             <div>
//               <p className="font-light text-xs">Expiry</p>
//               <p className="font-medium tracking-wider text-sm"> / {month}</p>
//             </div>
//             <div>
//               <p className="font-light text-xs">CVV</p>
//               <p className="font-bold tracking-more-wider text-sm">{cvv}</p>
//             </div>
//             <div>
//               {/* <p className="font-light text-xs">Password</p>
//               <p className="font-bold tracking-more-wider text-sm">{Password}</p> */}
//             </div>
//             <div>
//               <p className="font-light text-xs">Inventory</p>
//               <p className="font-bold tracking-more-wider text-sm">{cash}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }