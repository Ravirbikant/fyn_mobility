const API_BASE_URL = "http://127.0.0.1:8000/api";

export const addComponent = async (componentData) => {
  const response = await fetch(`${API_BASE_URL}/add-component/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(componentData),
  });
  return response.json();
};

export const addVehicle = async (vehicleData) => {
  const response = await fetch(`${API_BASE_URL}/add-vehicle/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(vehicleData),
  });
  return response.json();
};

export const addIssue = async (issueData) => {
  const response = await fetch(`${API_BASE_URL}/add-issue/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(issueData),
  });
  return response.json();
};

export const calculatePrice = async (vehicleId) => {
  const response = await fetch(`${API_BASE_URL}/calculate-price/${vehicleId}/`);
  return response.json();
};

export const getRevenueGraphs = async () => {
  const response = await fetch(`${API_BASE_URL}/revenue-graphs/`);
  return response.json();
};

export const getComponents = async () => {
  const response = await fetch(`${API_BASE_URL}/components/`);
  const data = await response.json();
  return data;
};

export const getVehicles = async () => {
  const response = await fetch(`${API_BASE_URL}/vehicles/`);
  const data = await response.json();
  return data;
};
