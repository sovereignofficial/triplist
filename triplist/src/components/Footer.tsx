import { Item } from "../App"

export const Footer = ({items}:FooterProps) => {

  const calculateProgress = () :number  =>{
    const completedItems = items.reduce((acc,curr)=>{
      return curr.status ? acc + 1 : acc;
    },0);
    const progress = (completedItems / items.length) * 100;
    return Math.round(progress) || 0
  }
  return (
    <div className="row-span-1 flex justify-center items-center">
     👜 You have {items.length} items on your list and {calculateProgress()}% items you packed.
    </div>
  )
}

type FooterProps = {
  items:Item[]
}