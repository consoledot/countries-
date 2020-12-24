import React from 'react'
import {Card} from './Card'
import {CardsContainer} from './styles/styles'
const Container = ({countries})=>{
    if(countries.length <= 0){
        return <h1>Loading</h1>
    }
    return(
            <CardsContainer>
                {countries.slice(0,20).map((country,index)=>(
                    <Card key={index}imgUrl={country.flag} capital={country.capital} name={country.name} population={country.population} region={country.region}/>
                ))}
            </CardsContainer>
        )
    }
export default Container;