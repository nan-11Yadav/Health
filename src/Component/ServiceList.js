// src/components/ServiceList.js
import React from "react";

const ServiceList = ({ services, editService, deleteService }) => {
  return (
    <div className="service-list">
      <h2>Service List</h2>

      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>${service.price}</td>
                <td>
                  <button onClick={() => editService(service)}>Edit</button>
                  <button onClick={() => deleteService(service.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ServiceList;