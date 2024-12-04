import React, { useState } from "react";
import { addIssue, calculatePrice } from "./api";
import "./addIssue.css";

const AddIssue = ({ vehicles, components }) => {
  const [vehicleId, setVehicleId] = useState("");
  const [componentId, setComponentId] = useState("");
  const [isNew, setIsNew] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addIssue({
      vehicle_id: vehicleId,
      component_id: componentId,
      is_new: isNew,
      quantity: quantity,
    });

    // Fetch the total price after adding the issue
    const result = await calculatePrice(vehicleId);
    setTotalPrice(result.total_price); // Set the new total price
  };

  const handleVehicleChange = (e) => {
    setVehicleId(e.target.value);
    setTotalPrice(null); // Clear total price for a fresh value
  };

  return (
    <div className="add-issue-container">
      <h2>Add Issue</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Select Vehicle:
          <select onChange={handleVehicleChange} value={vehicleId} required>
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Select Component:
          <select
            onChange={(e) => setComponentId(e.target.value)}
            value={componentId}
            required
          >
            <option value="">Select Component</option>
            {components.map((component) => (
              <option key={component.id} value={component.id}>
                {component.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Issue Type:</span>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="issue_type"
                checked={isNew}
                onChange={() => setIsNew(true)}
              />
              New Component
            </label>
            <label>
              <input
                type="radio"
                name="issue_type"
                checked={!isNew}
                onChange={() => setIsNew(false)}
              />
              Repair
            </label>
          </div>
        </label>

        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </label>

        <button type="submit" className="submit-button">
          Add Issue
        </button>
      </form>

      {totalPrice !== null && (
        <div className="total-price">
          <h3>Total Cost for Vehicle: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default AddIssue;
