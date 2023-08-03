import { useState } from "react"
import { Input } from "./Input"
import { Item } from "../App";

export const Header = ({addItem,currItems}:HeaderProps) => {
    const [input , setInput] = useState("");
    
  return (
    <div className="row-span-1 space-y-5 p-2
    text-center">
      <Logo />
      <div className="flex flex-col md:flex-row gap-1 md:gap-8 justify-center align-center
    p-1 md:p-3 bg-blue-500/30 rounded-md">
        <span className=" font-semibold md:-ml-40">What do you need for your 🏖️ trip?</span>
        <Input input={input} setInput={setInput} addItem={addItem} currItems={currItems} />
      </div>
    </div>
  )
}
const Logo = () => {
  return (
    <div className="md:text-4xl text-xl
    font-medium text-blue-300">☀️ TripList </div>
  )
}

type HeaderProps = {
  addItem:Function,
  currItems:Item[]
}
