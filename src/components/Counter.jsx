import { useItemsContext } from "../lib/hooks.js";

export default function Counter() {
  const { items } = useItemsContext();
  const packed = items.filter((item) => item.packed).length;
  const total = items.length;

  return (
    <p>
      <b>{packed}</b> / {total} {total > 1 ? "items" : "item"} packed
    </p>
  );
}
