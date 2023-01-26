import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    // if (selectedCategory === "All") return true;

    // return item.category === selectedCategory;

    if (selectedCategory === "All") {
      if (item.name.includes(searchText)) { // case if item name contains search text
        return true;
      } else { // case if item name does NOT contain search text
        return false;
      }
    } else {
      // to return true:
      // item category needs to match selected category AND item name needs to include search text
      return (item.category === selectedCategory) && (item.name.includes(searchText));
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={searchText} onSearchChange={handleSearchTextChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;