import { useRef } from "react";
import CircumIcon from "@klarr-agency/circum-icons-react";

export default function Item( {
  id,
  checked,
  name,
  onDeleteItem,
  onToggleItem
} ) {
  const inputRef = useRef(null);

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={checked}
          ref={inputRef}
          onChange={() => onToggleItem(id)}
          id={id}
        />
        {name}
      </label>
      <button onClick={() => onDeleteItem(id)}>
        <CircumIcon name="circle_remove" className="delBtn" />
      </button>
    </li>
  );
}
