import Button from "./Button";
import { useItemsContext } from "../lib/hooks.js";

export default function ButtonGroup() {
  const {
    handleSetAllComplete,
    handleSetAllIncomplete,
    handleResetAllItems,
    handleRemoveAllItems,
  } = useItemsContext();

  const Btns = [
    {
      _id: "100",
      text: "Mark All as complete",
      onClick: handleSetAllComplete,
    },
    {
      _id: "200",
      text: "Mark All as incomplete",
      onClick: handleSetAllIncomplete,
    },
    {
      _id: "300",
      text: "Reset to initial",
      onClick: handleResetAllItems,
    },
    {
      _id: "400",
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <section className="button-group">
      {Btns.map((btn) => (
        <Button key={btn._id} onClick={btn.onClick} versionType="secondary">
          {btn.text}
        </Button>
      ))}
    </section>
  );
}
