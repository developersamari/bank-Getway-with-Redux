import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { negetiveInventory } from "../redux/TaskSlice";
import { useSelector } from "react-redux";


function Selectcard({newcash, cashDF, setcashDF,}) {
  // const [Number, setNumber] = useState("");
  // const [Cvv2, setCvv2] = useState("");
  // const [Month, setMonth] = useState("");
  // const dispatch = useDispatch();
  

const selectcard=useSelector((state)=>state.card.Select);

// const newcash=(negetivePrice, id)=>{
//   dispatch(negetiveInventory(negetivePrice, id))
//   console.log(newcash)
  
// }

// const[cashDF , setcashDF]=useState("")
const[id , setid]=useState("")




  return (
    <>
      <div className="p-10">
        <div className="border-2 border-solid border-inherit w-96   rounded-md shadow-md flex ml-80 mt-[56px] p-6">
          <div className=" flex flex-col gap-5 ">
            <h1 className="font-sans text-xl font-bold">Payment Details</h1>
            <div className="flex flex-row bg-neutral-300 p-[2px] rounded-md mb-7">
              <button className="px-[50px]	bg-inherit 	">
                <Link className="text-slate-500" to="/">
                  Addcart
                </Link>
              </button>
              <button className="px-[50px] bg-inherit text-slate-500">
                <Link className="text-slate-500" to="/select">
                  Selectcart
                </Link>
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-sans font-bold	">Origin card </label>
              <input
                className="border-2 border-solid border-inherit rounded-md p-1"
                placeholder="****-****-****-****"
                value={selectcard?selectcard.number:""}
                

              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-sans font-bold">destination card </label>
              <input
                className="border-2 border-solid border-inherit rounded-md p-1"
                placeholder="****-****-****-****"
              />
            </div>
            <div className="flex flex-row gap-8">
              <div className="flex flex-col gap-3">
                <label className="font-sans font-bold">Expiry</label>
                <input
                  className="border-2 border-solid border-inherit rounded-md p-1 w-[150px]"
                  placeholder="12/04"
                  value={selectcard?selectcard.month:""}

                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-sans font-bold">cvv</label>
                <input
                  className="border-2 border-solid border-inherit rounded-md p-1 w-[150px]"
                  placeholder="345"
                  value={selectcard?selectcard.cvv:""}

                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-sans font-bold	"> Amount </label>
              <input
                className="border-2 border-solid border-inherit rounded-md p-1"
                placeholder="30000$"
                type="number"
                value={cashDF}
                onChange={(e)=>setcashDF(e.target.value)}
              />
            </div>
            <button className="font-sans font-bold text-ml mt-10 bg-blue-700	text-white haver:bg-sky-800	" onClick={()=>newcash(cashDF,1)}>
              payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selectcard;
