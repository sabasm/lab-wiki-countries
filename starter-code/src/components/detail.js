import React from 'react'
import {Link} from 'react-router-dom'

const Detail = () =>{
    return (
        <div className="detail">
        <a href="#" class="list-group-item list-group-item-action active">MEX</a>
        <div className="detail-innerContainer list-group-item list-group-item-action">
        <h1>México</h1>
        <hr/>
        <h3>Capital:</h3><h5>Hermosillo</h5>
        <hr/>
        <h3>Área:</h3><h5>Un chingómetros de km2</h5>
        <hr/>
        <h3>Fronteras:</h3>
        
        <ul style={{listStyle:"none"}}>
            <Link to="#"><li>Estados Unidos</li></Link>
        </ul>
        </div>
            
        </div>

    )
}

export default Detail