import React, { useState } from "react";
import "../components/CSS/Dashboard.css";
import UpdatePlant from './UpdatePlant';
import { connect } from 'react-redux'
import {deletePlant} from '../actions'

const PlantCard = (props) => {
  const {plantDetails, deletePlant} = props
  const {species, nickname, diameter, frequency, image, id} = plantDetails


  const [editForm, setEditForm] = useState(false);

  const displayForm = () => {
    setEditForm(true)
  }

  return (
    <div>
      {!editForm && <div className="plant-card">
        <div className="card-header">
          <h2>{nickname}</h2>
          <img src={image} alt={species}/>
        </div>
        <p>{frequency}</p>
        <p>{species}</p>
        <p>{diameter}</p>

        <div className="crud-buttons">
          <div className="button" onClick={displayForm}>
            Edit

          </div>
          Type:
          <p>{frequency}</p>
          Species:
          <p>{species}</p>
          Diameter:
          <p>{diameter}</p>
          <div className="crud-buttons">
            <div className="plant-button" onClick={editPlant}>
              Edit
            </div>

          <div className="button" onClick={() => deletePlant(id)}>
            Delete
          </div>
        </div>
      </div>}
      
      {editForm && <UpdatePlant
        setEditForm={setEditForm}
        id={id}
      />}
    </div>
  )
}

export default connect(null, {deletePlant})(PlantCard)

