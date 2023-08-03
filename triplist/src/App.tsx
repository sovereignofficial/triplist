import { useEffect, useState } from "react"
import { Body } from "./components/Body"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

export const App = () => {
  const [items , setItems] = useState<Item[]>([]);

  const addIntoDb = (item:Item) => {
    const newItems = Array.isArray(items) ? [...items, item] : [item];
    setItems(newItems);
    localStorage.setItem("items",JSON.stringify(newItems));
  }
  const removeFromDb = (id:number) =>{
    const updatedItems = items.filter(item => item.id !== id);
    localStorage.setItem("items",JSON.stringify(updatedItems))
    setItems(updatedItems);
  }
  const getItemsFromDb = () => {
    const dbItems =  JSON.parse(localStorage.getItem("items")!) as Item[];
    setItems(dbItems);
  }
  const markAsPacked = (item:Item) => {
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        return { ...i, status:item.status};
      }
      return i;
    });
    setItems(updatedItems);
    localStorage.setItem("items",JSON.stringify(items))
  }

  useEffect(()=>{
    getItemsFromDb();
  },[])
  return (
    <div className=" bg-black text-white
    grid grid-flow-row grid-rows-6">
      <Header currItems={items} addItem = {addIntoDb}/>
      <Body removeItem={removeFromDb} items={items} markItem={markAsPacked} />
      <Footer items={items}/>
    </div>
  )
}

export type Item = {
   id:number,
   status:boolean,
   item:string,
}
