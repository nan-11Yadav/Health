// src/components/ServiceForm.js
import React, { useState, useEffect } from "react";

const ServiceForm = ({ addService, updateService, editableService }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (editableService) {
      setFormData({
        name: editableService.name,
        description: editableService.description,
        price: editableService.price,
      });
    }
  }, [editableService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price) {
      alert("Please fill in all fields");
      return;
    }

    if (editableService) {
      updateService({ ...formData, id: editableService.id });
    } else {
      addService(formData);
    }

    setFormData({ name: "", description: "", price: "" });
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <h2>{editableService ? "Edit Service" : "Add New Service"}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>
      <div>
        <label>Price ($):</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{editableService ? "Update" : "Add"}</button>
    </form>
  );
};

export default ServiceForm;