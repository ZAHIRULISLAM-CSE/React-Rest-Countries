import React from 'react';
import "./Country.css"

const Country = (props) => {
    const {name,population,area}=props.country;
    const {common}=name;
    return (
        <div className='container'>
            <h1>Country Name:{common}</h1>
            <h3>Population:{population}</h3>
            <h4>Area:{area}</h4>
        </div>
    );
};

export default Country;