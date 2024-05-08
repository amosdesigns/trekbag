import ButtonGroup from "./ButtonGroup";
import AddItemForm from "./AddItemForm";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <AddItemForm />
      <ButtonGroup />
    </div>
  );
}
