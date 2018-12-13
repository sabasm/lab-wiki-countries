import React from 'react'
import {Link} from 'react-router-dom'

const Detail = ({name,capital,cioc,area,borders}) =>{
    return (
        <div className="detail">
        <a href="#" class="list-group-item list-group-item-action active">{cioc}</a>
        <div className="detail-innerContainer list-group-item list-group-item-action">
        <h1>{name.common}</h1>
        <hr/>
        <h3>Capital:</h3><h5>{capital}</h5>
        <hr/>
        <h3>Área:</h3><h5>{area.toLocaleString()} km²</h5>
        <hr/>
        <h3>Fronteras:</h3>
        
        <ul style={{listStyle:"none"}}>
        {borders.map(b=><Link to="#"><li>{b}</li></Link>)}
            
        </ul>
        </div>
            
        </div>

    )
}

export default Detail