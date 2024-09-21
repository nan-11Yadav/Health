// src/App.js
import React, { useState } from "react";

import "./App.css";
import ServiceList from "./Component/ServiceList";
import ServiceForm from "./Component/ServiceForm";


function App() {
  const [services, setServices] = useState([]);
  const [editableService, setEditableService] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditableService(null);
  };
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const editService = (service) => {
    setEditableService(service);
  };

  return (
    <div className="App">
      <h1>Healthcare Services</h1>

      <ServiceForm
        addService={addService}
        updateService={updateService}
        editableService={editableService}
      />

      <button className="service" onClick={() => setShowTable(!showTable)}>
        {showTable ? "Hide Services List" : "Show Services List"}
      </button>

      {showTable && (
        <ServiceList
          services={services}
          editService={editService}
          deleteService={deleteService}
        />
      )}
    </div>
  );
}

export default App;