import React, { useState } from "react";
// import { useHistory, } from 'react-router-dom'
import "../components/CSS/Dashboard.css";

const initialForm = {
  frequency: "",
  species: "",
  nickname: "",
  diameter: "",
  image: "",
};

export default function PlantForm({ setDisplayForm, plantList, setPlantList }) {
  const [form, setForm] = useState(initialForm);

  // const { push } = useHistory();

  // useEffect(() => {
  // }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlantList([...plantList, form]);
    setForm(initialForm);
    setDisplayForm(false);
  };

  return (
    <div className="plant-form">
      <form onSubmit={handleSubmit}>
        <input
          name="frequency"
          type="text"
          value={form.frequency}
          onChange={handleChange}
          placeholder="Frequency"
        />

        <input
          name="species"
          type="text"
          value={form.species}
          onChange={handleChange}
          placeholder="Species"
        />

        <input
          name="nickname"
          type="text"
          value={form.nickname}
          onChange={handleChange}
          placeholder="Nickname"
        />

        <input
          name="diameter"
          type="text"
          value={form.diameter}
          onChange={handleChange}
          placeholder="Diameter"
        />

        <input
          name="image"
          type="text"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <button className="add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
