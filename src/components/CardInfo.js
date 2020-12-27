import {useState, useEffect} from 'react'
import { ContainerDiv,CardInfoContainer,Button,CountryDescription,BorderButton } from "../styles/styles";
import {Link} from 'react-router-dom'
import {Loading} from './Loading'

export const CardInfo = (props)=>{
    const name = props.match.params.name
    const [country, setCountry] = useState([])
    useEffect(()=>{
        function getInfo(name){
            fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
            .then(res => res.json())
            .then(data=> setCountry(data[0]))
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
           <Link to="/" style={{color:"unset", textDecoration:"none"}}>
               <Button Link> Back</Button>
            </Link>
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
                            <p><span>Currencies: </span>{country.currencies[0].name}</p>
                            <p><span>Native name: </span>{country.nativeName}</p>
                            <p><span className="languages">Languages: </span> {country.languages.map((lan,i)=> <Languages key={lan.iso639_1} language={lan.name}/>)}</p>
                        </div>
                    </CountryDescription>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <p>Border Countries</p>:<div>{country.borders.map((border,i)=> <Border key={border+i} border={border}/>)}</div>
                    </div>
                </div>
           </CardInfoContainer>
        </ContainerDiv>
    )
} 

const Languages = ({language})=>(
    <span>{language} </span>
)
const Border = ({border})=>{
    const [borderName, setBorderName] = useState("")
    useEffect(()=>{
        function getBorders(){
            fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
            .then(res => res.json())
            .then(data => setBorderName(data.name))
        }
        return(
            getBorders()
        )
    })
    return(
        <Link to={`/${borderName}`}style={{color:"unset", textDecoration:"none"}}>
            <BorderButton border>{borderName}</BorderButton>
        </Link>
    )
}