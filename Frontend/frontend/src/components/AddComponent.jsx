import React, { useState } from "react";
import { addComponent } from "./api";
import "./addComponent.css";

const AddComponent = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [repairPrice, setRepairPrice] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComponent({
      name,
      repair_price: repairPrice,
      purchase_price: purchasePrice,
    });
    alert("Component added successfully!");
    onAdd();
  };

  return (
    <div className="add-component-container">
      <h2>Add Component</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input
            type="text"
            placeholder="Component Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Repair Price:
          <input
            type="number"
            placeholder="Repair Price"
            value={repairPrice}
            onChange={(e) => setRepairPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Purchase Price:
          <input
            type="number"
            placeholder="Purchase Price"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-button">
          Add Component
        </button>
      </form>
    </div>
  );
};

export default AddComponent;
