import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  count: number

  onSelectItem: (item: string, a: number) => void;
}


function ListGroup({ items, heading, count, onSelectItem }: Props) {
  // let items = ["Apple", "Mango", "grape", "orange"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p>No items found!</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {getMessage()}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, count++)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
