import React from 'react'
import {CardContainer} from './styles/styles'
export const Card = ()=>(
   <CardContainer>
        <div className="">
            <img src="https://restcountries.eu/data/nga.svg" alt="Nigeria"/>
        </div>
        <div>
            <h3>Germany</h3>
            <p><span className="text">Population: </span> 3,08,62627</p>
            <p><span className="text">Region: </span>Africa</p>
            <p><span className="text">Capital: </span>Abuja</p>
        </div>
    </CardContainer>
)