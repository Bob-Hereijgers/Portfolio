import React, { useState } from "react";

interface ShoppingListItem{
  name: string,
  quantity: number
}

const ShoppingList = () => {
  const [ItemName, setItemName] = useState<string>("");
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const [itemList, setItemList] = useState<ShoppingListItem[]>([]);

  const Submit = () => {
    setItemList([...itemList, {name: ItemName, quantity: itemQuantity}])
    setItemName("");
    setItemQuantity(0);
  };
  
  return (
    <>
<form>
        <label>Name</label>
        <input
          type="text"
          value={ItemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <label>Quantity</label>
        <input
          type="number"
          value={itemQuantity}
          onChange={(event) => setItemQuantity(event.target.valueAsNumber)}
        />
        <input value="Add" type="button" onClick={Submit} />
      </form>
     
        {itemList ?  <ul> {itemList?.map((item: ShoppingListItem) => <li key={item.name}> {item.name} {item.quantity}</li>)} </ul> : null}
    </>
  );
};

export default ShoppingList;
