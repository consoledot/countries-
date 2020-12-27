
import {Card} from './Card'
import {CardsContainer} from '../styles/styles'
import {Loading} from './Loading'
const Container = ({countries})=>{
    if(countries.length <= 0){
        return <Loading/>
    }
    return(
            <CardsContainer>
                {countries.slice(0,20).map((country,index)=>(
                    <Card key={index}imgUrl={country.flag} capital={country.capital} name={country.name} population={country.population.toLocaleString()} region={country.region}/>
                ))}
            </CardsContainer>
        )
    }
export default Container;