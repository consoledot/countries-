
import {CardContainer} from '../styles/styles'
import {Link} from 'react-router-dom'
export const Card = ({name,imgUrl,population,region,capital})=>{
    return (
           
            <CardContainer>
                 <Link to={`/${name}`}style={{color:"unset", textDecoration:"none"}}>
                    <div className="" >
                        <img src={imgUrl} alt={name}/>
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <p><span className="text">Population: </span>{population.toLocaleString()}</p>
                        <p><span className="text">Region: </span>{region}</p>
                        <p><span className="text">Capital: </span>{capital}</p>
                    </div>
                    </Link>
                </CardContainer>
            
            )
}