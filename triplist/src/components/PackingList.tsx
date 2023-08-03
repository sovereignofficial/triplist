import { Delete } from 'react-iconly';
import { Item } from '../App';
import React from 'react';

export const PackingList = ({ removeItem, items, markItem }: PackListProps) => {

  const handleMarkAsChecked = (e: React.ChangeEvent<HTMLInputElement>, item: Item) => {
    const isChecked = e.target.checked;
    item.status = isChecked;
    markItem(item);
  }

  return (
    <div className="h-full bg-blue-800/30
    rounded-lg p-2">
      <ul className='grid grid-cols-1 md:grid-cols-6
      items-start place-items-center relative 
      overflow-y-scroll overflow-hidden h-full
      '>
        {items?.map((item) => (
          <li key={item.id} className='w-40 justify-center gap-4
                  items-center
                  flex '>
            <span>
              <input checked={item.status} onChange={(e) => handleMarkAsChecked(e, item)} type="checkbox" />
            </span>
            <span>{item.item}</span>
            <button onClick={() => removeItem(item.id)}>
              <Delete size={18}
                set="bold" primaryColor='red' />
            </button>
          </li>
        ))}

      </ul>
    </div>
  )
}

type PackListProps = {
  removeItem: Function,
  markItem: Function,
  items: Item[],
}
