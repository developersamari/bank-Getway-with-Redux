import React from "react";
import { Link } from "react-router-dom";
import  { useState } from "react";
import {  useDispatch } from "react-redux";
import { addcard } from "../redux/TaskSlice";
function Addcart() {
  
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [month, setmonth] = useState("");
  const [cvv, setcvv] = useState("");
  const[cash,setcash]=useState("");
 
  const dispatch = useDispatch();





  return (
    <>
    <div className="p-10">
      <div className="border-2 border-solid border-inherit w-96   rounded-md shadow-md flex ml-[280PX] mt-[56px] p-6">
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
            <label className="font-sans font-bold	">Cardholder Name</label>
            <input
              className="border-2 border-solid border-inherit rounded-md p-1"
              placeholder="Danial"
              value={name}
              onChange={(e)=>setname(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-sans font-bold">Cardholder Number</label>
            <input
              className="border-2 border-solid border-inherit rounded-md p-1"
              placeholder="****-****-****-****"
              value={number}
              onChange={(e)=>setnumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-sans font-bold">Cash</label>
            <input
              className="border-2 border-solid border-inherit rounded-md p-1"
              placeholder="3000$"
              type="number"
              value={cash}
              onChange={(e)=>setcash(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-3">
              <label className="font-sans font-bold">Expiry</label>
              <input
                className="border-2 border-solid border-inherit rounded-md p-1 w-[150px]"
                placeholder="12/04"
                value={month}
                onChange={(e)=>setmonth(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-sans font-bold">cvv</label>
              <input
                className="border-2 border-solid border-inherit rounded-md p-1 w-[150px]"
                placeholder="345"
                value={cvv}
                onChange={(e)=>setcvv(e.target.value)}
              />
            </div>
          </div>
          <button
          onClick={()=> dispatch(addcard({name,number,month,cvv,cash}),setcash(""),setcvv(""),setmonth(""),setname(""),setnumber(""))}
           className="font-sans font-bold text-ml mt-10 bg-blue-700	text-white haver:bg-sky-800	">
            save
            
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Addcart;
