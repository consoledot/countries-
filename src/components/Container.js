import {useEffect, useState} from 'react'
import {ContainerDiv} from '../styles/styles'
import CardsContainer from './CardsContainer'
import {Inputs} from '../styles/styles'
import {Error} from './Error'
export const Container = ()=>{
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(false)
    const Search =(e)=>{
        if(e.target.value === ""){
            getCountries()
        }else{
            const text = e.target.value.trim()
            setCountries([])
            fetch(`https://restcountries.eu/rest/v2/name/${text}`)
            .then(res=>res.json())
            .then(data => {
                if(data.status){
                    setError(true)
                }else{
                    setError(false)
                    setCountries(data)
                }
               
            })
            .catch(err => console.log(err))
           
        }
       
    }
    const UpdateRegion = (e)=>{
        if(e.target.value === ""){
            getCountries()
        }else{
            setCountries([])
            fetch(`https://restcountries.eu/rest/v2/region/${e.target.value}`)
            .then(res=>res.json())
            .then(data => setCountries(data))
            .catch(err => console.log(err))
        }
    }
    const getCountries = ()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data=> setCountries(data))
        .catch(err => console.log(err))
    }
    useEffect(()=>{
       
        return(
            getCountries()
        )
       
    },[])
    return(
            <ContainerDiv>
                <Inputs>
                    <div>
                        <ion-icon name="search-outline"></ion-icon>
                        <input placeholder="Search for a country..." onChange={(e)=> Search(e)}/>
                    </div>
                    <div>
                        <select placeholder="iaauu" onChange={(e)=> UpdateRegion(e)}>
                                <option value="" defaultChecked>Filter by Region</option>
                                <option value="africa">Africa</option>
                                <option value="americas">Americas</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="oceania">Oceania</option>
                        </select>
                    </div>   
                </Inputs>
                {error ? <Error/>:<CardsContainer countries={countries}/>}
            </ContainerDiv>
    )
}