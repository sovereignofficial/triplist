import { Item } from "../App"
import { PackingList } from "./PackingList"

export const Body = ({removeItem,items,markItem}:BodyProps) => {
  return (
    <div className="row-span-4 p-2">
        <PackingList removeItem={removeItem} items={items} markItem={markItem}/>
    </div>
  )
}
type BodyProps = {
  removeItem:Function,
  markItem:Function
  items:Item[]
}