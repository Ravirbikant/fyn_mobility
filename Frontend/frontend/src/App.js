import React, { useEffect, useState } from "react";
import { getComponents, getVehicles } from "./components/api";
import AddComponent from "./components/AddComponent";
import AddVehicle from "./components/AddVehicle";
import AddIssue from "./components/AddIssue";

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [components, setComponents] = useState([]);

  const fetchOptions = async () => {
    const vehiclesData = await getVehicles();
    const componentsData = await getComponents();
    setVehicles(vehiclesData);
    setComponents(componentsData);
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  return (
    <div>
      <AddComponent onAdd={fetchOptions} />
      <AddVehicle onAdd={fetchOptions} />
      <AddIssue vehicles={vehicles} components={components} />
    </div>
  );
};

export default App;
