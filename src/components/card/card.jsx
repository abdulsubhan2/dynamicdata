import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div  className="card-container">
     <h1>{props.student.name }</h1>   
    </div>
)