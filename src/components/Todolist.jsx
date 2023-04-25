
import { useState } from "react";
import "../style/style.css"
import TodoItem from "./TodoItem";


function Todolist() {

   const [item,setItem] = useState("");
   const [item_list,setItemList] = useState([]);

   const addItem = ()=>{
      setItemList((old_list)=>{
         return [...old_list,item];
      });
      setItem("");
      const input_field = document.getElementById("input_field");
      input_field.value='';
   }

   const deleteItem = (id)=>{
      console.log("deleted call "+id);
      setItemList((old_list)=>{
         return item_list.filter((arrElement,index)=>{
            return index!==id;
         });
      });
      
   }



   return (
      <>
      
      
      <div className="main-container">
         
         <input type="text" id="input_field" className="input_field" onChange={(event)=>setItem(event.target.value)} placeholder="Enter Todo"/>
         <button type="button" className="add-btn" onClick={addItem} >+</button>

      </div>

      <div className="fruit-container">
         
         <div className="container">
            

               <ul>
                  {
                  item_list.map((item1,index) => {
                     return (
                        <>
                           <TodoItem
                              key={index} 
                              id={index} 
                              sendItem={item1}
                              onSelect={deleteItem}/>
                        </>
                     )
                  })
               }

                  
               </ul>

               
               
            </div>
      
      </div>
      
      </>
   )
}

export default Todolist;