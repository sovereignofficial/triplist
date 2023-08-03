import React from "react"
import { Item } from "../App"

export const Input = ({input,setInput,addItem,currItems}:InputProps) => {
  
  const handleAddItem = () => {
    if(input.trim() === ""){
      return alert("Please type item!");
    }
    const newItem:Item = {
       id:currItems?.length ?? 0,
       status:false,
       item:input
    }
    addItem(newItem);
  }

  return (
    <div className="space-x-2">
      <input  onChange={(e)=>setInput(e.target.value)}
       className="py-1 
      text-center rounded-md text-black
      outline-none focus:outline-blue-500
      focus:outline-2 focus:outline-offset-0
      border-none"
      type="text" placeholder="Item..."/>

      <button onClick={handleAddItem}
      className="bg-blue-500 px-4 py-1 
      rounded-md">Add</button>
    </div>
  )
}
type InputProps = {
    input:string,
    setInput:React.Dispatch<React.SetStateAction<string>>,
    addItem:Function,
    currItems:Item[],
  }