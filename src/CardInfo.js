import React, {useState, useEffect} from 'react'
import { ContainerDiv } from "./styles/styles";
import {CardInfoContainer} from './styles/styles'
import {Button} from './styles/styles'
import {Link} from 'react-router-dom'
import {CountryDescription} from './styles/styles'
import {Loading} from './Loading'

export const CardInfo = (props)=>{
    const name = props.match.params.name
    const [country, setCountry] = useState([])
    useEffect(()=>{
        function getInfo(name){
            fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
            .then(res => res.json())
            .then(data=> {
                setCountry(data[0])
                console.log(data[0])
            })
            .catch(err=> console.log(err))
        }
        return(
            getInfo(name)
        )
       
    },[name])
  
    if(country.length <= 0){
        return <Loading/>
    }  
    return(
       <ContainerDiv>
           <Link to="/" style={{color:"unset", textDecoration:"none"}}><Button>Back</Button></Link>
           <CardInfoContainer>
                <div>
                    <img src={country.flag} alt={country.name}/>
                </div>
                <div>
                    <h3>{country.name}</h3>
                    <CountryDescription>
                        <div>
                            <p><span>Native name: </span>{country.nativeName}</p>
                            <p><span>Population: </span>{country.population}</p>
                            <p><span>Region: </span>{country.region}</p>
                            <p><span>Sub Region: </span>{country.subregion}</p>
                            <p><span>Capital: </span>{country.capital}</p>
                        </div>
                        <div>
                            <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                            {/* <p><span>Currencies: </span>{country.currencies[0].code}</p> */}
                            <p><span>Native name: </span>{country.nativeName}</p>
                            {/* <p><span>Languages: </span>{country.languages.map(lan=> lan)}</p> */}
                        </div>
                    </CountryDescription>
                    <div style={{display:"flex"}}>
                        <p>Border Countries</p>: <Button>France</Button> <Button>Nigeria</Button>
                    </div>
                </div>
           </CardInfoContainer>
        </ContainerDiv>
    )
} 