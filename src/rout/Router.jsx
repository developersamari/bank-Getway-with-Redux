import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState} from "react";
import { Restoration ,negetiveInventory } from "../redux/TaskSlice";
import Navbar from "../rout/Navbar";
import Addcart from "../component/Addcart";
import Selectcard from "../component/Selectcard";
import Historycard from "../component/Historycard";
import Card from "../redux/Card";
import {  useDispatch } from "react-redux";

import {useSelector} from "react-redux"


const Router = () => {
  const list = useSelector((state) => state.card.list);
  const dispatch = useDispatch();
  const selectcard=(card)=>{
    dispatch(Restoration(card))
    console.log(selectcard)
  }


  const newcash=(negetivePrice, id)=>{
    dispatch(negetiveInventory({negetivePrice, id}))
    console.log(negetiveInventory)
    
  }
 const {history} = useSelector((state)=> state.card.history)
  
  const[cashDF , setcashDF]=useState("")

  return (
    <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route>
            <Route index element={<Addcart />} />
            <Route path="select" element={<Selectcard  newcash={newcash} cashDF={cashDF} setcashDF={setcashDF}/>} />
            <Route path="history" element={<Historycard  history={history} />} />
          </Route>
        </Routes>
        {list.map((items) => {
          return (
            <Card
              number={items.number}
              cvv={items.cvv}
              month={items.month}
              name={items.name}
              cash={items.cash}
              id={items.id}
              selectcard= {()=>selectcard(items)}
            />
          );
        })}
    </BrowserRouter>
  );
};

export default Router;
