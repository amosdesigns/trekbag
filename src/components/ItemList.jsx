import { useState } from "react";
import EmptyView from "./EmptyView";
import Item from "./Item";
import Select from "react-select";
import { sortingOptions } from "../lib/constants.js";
import { useItemsContext } from "../lib/hooks.js";

export default function ItemList() {
  const {
    items,
    handleDeleteItem,
    handleCheckedItem
  } = useItemsContext();

  const [sortBy, setSortBy] = useState( "default" );
  const numberOfItems = items.length;

  const sortedItems = (items) => {
    switch (sortBy) {
      case "unpacked":
        return [...items].sort((a, b) => a.packed - b.packed);
      case "packed":
        return [...items].sort((a, b) => b.packed - a.packed);
      default:
        return [...items];
    }
  };

  const sorted = sortedItems(items);

  if (numberOfItems === 0) {
    return <EmptyView />;
  }

  return (
    <section className="item-list">
      {numberOfItems > 1 ? (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}
      <ul className="item-list">
        {sorted.map(({ name, id, packed }) => (
          <Item
            key={id}
            id={id}
            checked={packed}
            name={name}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleCheckedItem}
          />
        ))}
      </ul>
    </section>
  );
}
