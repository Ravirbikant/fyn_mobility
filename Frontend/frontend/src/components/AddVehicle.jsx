import React, { useState } from "react";
import { addVehicle } from "./api";
import "./addVehicle.css";

const AddVehicle = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVehicle({ name });
    alert("Vehicle added successfully!");
    onAdd();
  };

  return (
    <div className="add-vehicle-container">
      <h2>Add Vehicle</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Vehicle Name:
          <input
            type="text"
            placeholder="Enter Vehicle Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-button">
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
